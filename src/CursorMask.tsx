import React from "react";
import "./CursorMask.css";

interface CursorMaskProps {
  active: boolean;
}

const CursorMask: React.FC<CursorMaskProps> = ({ active }) => {
  return <div className={`cursor-mask ${active ? "active" : ""}`}></div>;
};

export default CursorMask;
