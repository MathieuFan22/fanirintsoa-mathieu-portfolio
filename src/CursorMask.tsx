import React, { useState, useEffect } from "react";
import "./CursorMask.css";

const CursorMask: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 30, y: e.clientY - 30 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-mask" style={{ left: position.x, top: position.y }}>
      <div className="honeycomb">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="hexagon"></div>
        ))}
      </div>
    </div>
  );
};

export default CursorMask;
