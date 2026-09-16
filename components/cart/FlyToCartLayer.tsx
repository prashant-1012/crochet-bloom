"use client";

import { useEffect } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import { createArcPath, type Flight } from "@/lib/utils/fly-to-cart";

function FlyingItem({ flight, onDone }: { flight: Flight; onDone: () => void }) {
  const { fromRect, toRect, image } = flight;
  const fromCenter = { x: fromRect.left + fromRect.width / 2, y: fromRect.top + fromRect.height / 2 };
  const toCenter = { x: toRect.left + toRect.width / 2, y: toRect.top + toRect.height / 2 };
  const targetScale = Math.max(0.15, toRect.width / fromRect.width);

  const x = useMotionValue(fromCenter.x);
  const y = useMotionValue(fromCenter.y);
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  useEffect(() => {
    const path = createArcPath(fromCenter, toCenter, { strength: 0.4, peak: 0.2, rotate: 0.5 });
    const controls = animate(0, 1, {
      duration: 0.65,
      ease: [0.61, 0.06, 0.35, 1],
      onUpdate: (t) => {
        const point = path(t);
        x.set(point.x);
        y.set(point.y);
        rotate.set(point.rotate);
        scale.set(1 - (1 - targetScale) * t);
        opacity.set(t < 0.8 ? 1 : 1 - (t - 0.8) / 0.2);
      },
      onComplete: onDone,
    });
    return () => controls.stop();
    // Runs once per flight instance — this component is mounted fresh (keyed
    // by flight.id) and unmounts itself via onDone, so it never needs to
    // react to prop changes mid-flight.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[60] overflow-hidden rounded-xl shadow-lift"
      style={{
        left: -fromRect.width / 2,
        top: -fromRect.height / 2,
        width: fromRect.width,
        height: fromRect.height,
        x,
        y,
        rotate,
        scale,
        opacity,
      }}
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes={`${Math.round(Math.max(fromRect.width, fromRect.height))}px`}
      />
    </motion.div>
  );
}

export function FlyToCartLayer() {
  const { flights, completeFlight } = useCart();

  return (
    <>
      {flights.map((flight) => (
        <FlyingItem key={flight.id} flight={flight} onDone={() => completeFlight(flight.id)} />
      ))}
    </>
  );
}
