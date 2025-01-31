import React, { useState, useEffect } from "react";
import "./CursorMask.css";

const CursorMask: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor-mask" style={{ left: position.x, top: position.y }} />;
};

export default CursorMask;
