"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { useReducedMotion } from "framer-motion";
import type { CartAction, CartItem, CartState } from "@/lib/types/cart";
import type { Flight } from "@/lib/utils/fly-to-cart";

const STORAGE_KEY = "cb_cart_v1";

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const quantity = action.quantity ?? 1;
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, quantity }],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    case "HYDRATE":
      return action.payload;
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  cartIconRef: RefObject<HTMLButtonElement | null>;
  flights: Flight[];
  flyToCart: (fromRect: DOMRect, image: string) => void;
  completeFlight: (id: string) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hydrated = useRef(false);
  const cartIconRef = useRef<HTMLButtonElement | null>(null);
  const flightIdRef = useRef(0);
  const [flights, setFlights] = useState<Flight[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        dispatch({ type: "HYDRATE", payload: parsed });
      }
    } catch {
      // corrupt or unavailable storage — start with an empty cart
    } finally {
      hydrated.current = true;
    }
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Stable references (dispatch and setState setters never change identity across
  // renders), so consumers like CartDrawer's Escape-key effect — which depends on
  // closeDrawer — only re-subscribe when isDrawerOpen actually changes, not on
  // every cart mutation. Without this, adding/removing/updating quantity while the
  // drawer is open tears down and rebuilds the Escape listener on every keystroke
  // of cart activity, opening a race window where a real Escape press can land
  // mid-rebuild and get silently dropped.
  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity?: number) =>
      dispatch({ type: "ADD_ITEM", payload: item, quantity }),
    []
  );
  const removeItem = useCallback(
    (productId: string) => dispatch({ type: "REMOVE_ITEM", payload: { productId } }),
    []
  );
  const updateQuantity = useCallback(
    (productId: string, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setIsDrawerOpen((open) => !open), []);

  // Decorative only — the cart mutation that triggers this always fires
  // separately and immediately, regardless of whether a flight starts.
  const flyToCart = useCallback(
    (fromRect: DOMRect, image: string) => {
      if (shouldReduceMotion) return;
      const toEl = cartIconRef.current;
      if (!toEl) return;
      const toRect = toEl.getBoundingClientRect();
      const id = `flight-${flightIdRef.current++}`;
      setFlights((current) => [...current, { id, fromRect, toRect, image }]);
    },
    [shouldReduceMotion]
  );
  const completeFlight = useCallback(
    (id: string) => setFlights((current) => current.filter((flight) => flight.id !== id)),
    []
  );

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      cartIconRef,
      flights,
      flyToCart,
      completeFlight,
    };
  }, [
    state,
    isDrawerOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    flights,
    flyToCart,
    completeFlight,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
