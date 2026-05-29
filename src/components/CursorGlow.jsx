import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const moveGlow = (e) => {
      const x = e.clientX - 150;
      const y = e.clientY - 150;

      glow.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0) 70%)",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(50px)",
        willChange: "transform",
        transition: "transform 0.05s linear",
      }}
    />
  );
}

export default CursorGlow;