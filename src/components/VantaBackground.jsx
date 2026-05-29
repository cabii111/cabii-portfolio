import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function VantaBackground() {

  const vantaRef = useRef(null);

  useEffect(() => {

    const effect = NET({
      el: vantaRef.current,

      THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      scale: 1,
      scaleMobile: 1,

      color: 0x8b5cf6,
      backgroundColor: 0x05010f,

      points: 10,
      maxDistance: 22,
      spacing: 18,
    });

    return () => {
      if (effect) effect.destroy();
    };

  }, []);

return (
  <div
    ref={vantaRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: -1,
    }}
  />
);
}

export default VantaBackground;