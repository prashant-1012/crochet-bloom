export interface Flight {
  id: string
  fromRect: DOMRect
  toRect: DOMRect
  image: string
}

interface ArcPoint {
  x: number
  y: number
  rotate: number
}

interface ArcOptions {
  /** How far the arc bows away from a straight line, relative to the distance covered. */
  strength?: number
  /** Where along the path the bow peaks, 0–1. */
  peak?: number
  /** How much the item tilts to follow the arc's tangent, 0 = no rotation. */
  rotate?: number
}

function quadratic(t: number, p0: number, p1: number, p2: number) {
  const rest = 1 - t
  return rest * rest * p0 + 2 * rest * t * p1 + t * t * p2
}

function tangentAngle(
  t: number,
  x0: number,
  cx: number,
  x1: number,
  y0: number,
  cy: number,
  y1: number
) {
  const dx = 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx)
  const dy = 2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy)
  return (Math.atan2(dy, dx) * 180) / Math.PI
}

/**
 * Builds a quadratic-bezier arc between two points and returns a sampler
 * for position + tangent rotation at t in [0, 1]. Curve direction (left vs.
 * right bow) is picked from the straight-line direction so it always reads
 * as a natural "toss", not a fixed left/right bias.
 */
export function createArcPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  { strength = 0.4, peak = 0.2, rotate = 0.5 }: ArcOptions = {}
) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const length = Math.sqrt(dx * dx + dy * dy)
  const curve = (Math.abs(dx) >= Math.abs(dy) ? dx : dy) < 0 ? -strength : strength

  const ctrl =
    length === 0
      ? from
      : {
          x: from.x + dx * peak + (-dy / length) * curve * length,
          y: from.y + dy * peak + (dx / length) * curve * length,
        }

  const startAngle = tangentAngle(0, from.x, ctrl.x, to.x, from.y, ctrl.y, to.y)

  return (t: number): ArcPoint => ({
    x: quadratic(t, from.x, ctrl.x, to.x),
    y: quadratic(t, from.y, ctrl.y, to.y),
    rotate: (tangentAngle(t, from.x, ctrl.x, to.x, from.y, ctrl.y, to.y) - startAngle) * rotate,
  })
}
