import { useEffect, useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  maxDistance = 520,
  maxScale = 1.2,     // slightly smaller max scale reduces "jump" feeling
  maxTranslate = 50,   // smaller translate = less dramatic pull
  lerp = 0.12,         // interpolation for transform (lower -> smoother/slower)
  mouseLerp = 0.18,    // interpolation for raw mouse position smoothing
  deadZone = 50,        // px: radius around center where translate is forced to 0
}) {
  const btnRef = useRef(null);
  const rawMouse = useRef({ x: -9999, y: -9999 });   // immediate mouse coords
  const smoothMouse = useRef({ x: -9999, y: -9999 }); // smoothed mouse coords
  const stateRef = useRef({ tx: 0, ty: 0, scale: 1 });
  const rafRef = useRef(null);
  const isTouchRef = useRef(false);

  const lerpVal = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    isTouchRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchRef.current) return;

    function onMouseMove(e) {
      rawMouse.current.x = e.clientX;
      rawMouse.current.y = e.clientY;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    }

    function onLeave() {
      rawMouse.current.x = -9999;
      rawMouse.current.y = -9999;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    // init smoothing to avoid jump on mount
    smoothMouse.current.x = rawMouse.current.x;
    smoothMouse.current.y = rawMouse.current.y;

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseLerp]);

  function animate() {
    rafRef.current = null;
    const btn = btnRef.current;
    if (!btn) return;

    // 1) Smooth mouse position (low-pass filter)
    smoothMouse.current.x = lerpVal(smoothMouse.current.x, rawMouse.current.x, mouseLerp);
    smoothMouse.current.y = lerpVal(smoothMouse.current.y, rawMouse.current.y, mouseLerp);

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const mx = smoothMouse.current.x;
    const my = smoothMouse.current.y;

    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.hypot(dx, dy);

    // influence 0..1 (1 when cursor at center, 0 when >= maxDistance)
    const influence = Math.max(0, 1 - Math.min(dist, maxDistance) / maxDistance);

    // DEAD ZONE: if very close to center, don't translate — avoids tiny micro-movements
    let targetTx = 0;
    let targetTy = 0;
    if (dist > deadZone && influence > 0) {
      const pullStrength = dist > 0 ? (influence * maxTranslate) / dist : 0;
      targetTx = dx * pullStrength;
      targetTy = dy * pullStrength;
    }

    // target scale (cap influence slightly so scale doesn't hit exact maximum instantly)
    const targetScale = 1 + influence * (maxScale - 1);

    // interpolate current state -> target (damping)
    const cur = stateRef.current;
    cur.tx = lerpVal(cur.tx, targetTx, lerp);
    cur.ty = lerpVal(cur.ty, targetTy, lerp);
    cur.scale = lerpVal(cur.scale, targetScale, lerp);

    // gentle rotation based on influence (smaller values reduce perceived jitter)
    const rotY = (dx / rect.width) * 3.5 * influence;
    const rotX = -(dy / rect.height) * 3.5 * influence;

    // Apply transform (always write explicit transform string — don't clear it)
    btn.style.transform = `translate3d(${cur.tx.toFixed(2)}px, ${cur.ty.toFixed(
      2
    )}px, 0) scale(${cur.scale.toFixed(3)}) rotateX(${rotX.toFixed(
      2
    )}deg) rotateY(${rotY.toFixed(2)}deg)`;

    // box shadow scaled by influence
    btn.style.boxShadow = influence
      ? `0 ${6 + influence * 14}px ${12 + influence * 24}px rgba(255,92,27, ${0.06 + influence * 0.48})`
      : "0 0 0 rgba(0,0,0,0)";

    // Consider "still" if differences are very small
    const still =
      Math.abs(cur.tx - targetTx) < 0.45 &&
      Math.abs(cur.ty - targetTy) < 0.45 &&
      Math.abs(cur.scale - targetScale) < 0.0015;

    // If not still, continue animating; otherwise stop rAF until next mousemove
    if (!still) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      // If cursor is far away, ensure clean reset to exact defaults to avoid tiny remnants
      if (influence === 0) {
        cur.tx = 0;
        cur.ty = 0;
        cur.scale = 1;
        btn.style.transform = `translate3d(0px, 0px, 0) scale(1) rotateX(0deg) rotateY(0deg)`;
        btn.style.boxShadow = "";
      }
    }
  }

  return (
    <div
      className="magnetic-wrapper"
      style={{ display: "inline-block", perspective: 1000, padding: 6, lineHeight: 0 }}
    >
      <button
        ref={btnRef}
        className={`magnetic-button ${className}`}
        // keep focus styles for accessibility
      >
        {children}
      </button>
    </div>
  );
}
