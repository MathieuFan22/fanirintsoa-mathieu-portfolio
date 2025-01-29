import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Particles.css";

const NUM_PARTICLES = 50;

const generateParticles = () =>
  new Array(NUM_PARTICLES).fill(null).map(() => ({
    id: Math.random().toString(36).substring(7),
    size: Math.random() * 5 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    speed: Math.random() * 2 + 1,
  }));

const Particles = () => {
  const [scrollY, setScrollY] = useState(0);
  const [particles] = useState(generateParticles());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
          }}
          animate={{ y: (scrollY * 0.05) % 100 }} // Parallax effect
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

export default Particles;
