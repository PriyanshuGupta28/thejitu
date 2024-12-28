import React from "react";
import { motion } from "framer-motion";
import "./VerticalScroll.css";

const VerticalScroll: React.FC = () => {
  const leftImages = [
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=", // Replace with your image paths
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
  ];

  const rightImages = [
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=", // Replace with your image paths
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
    "https://media.istockphoto.com/id/1368628035/photo/brooklyn-bridge-at-sunset.jpg?s=612x612&w=0&k=20&c=hPbMbTYRAVNYWAUMkl6r62fPIjGVJTXzRURCyCfoG08=",
  ];

  const marqueeVariants = {
    animate: {
      y: [0, -100, 0], // Adjust the `-100` based on image heights
      transition: {
        y: {
          repeat: Infinity,
          duration: 10, // Duration of the animation
          ease: "linear",
        },
      },
    },
  };

  const reverseMarqueeVariants = {
    animate: {
      y: [0, 100, 0], // Scroll in reverse direction
      transition: {
        y: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="scroll-container rounded-[12px]">
      {/* Left Images */}
      <motion.div
        className="scroll-wrapper"
        variants={marqueeVariants}
        animate="animate"
      >
        {leftImages.map((image, index) => (
          <div className="scroll-item" key={index}>
            <img src={image} alt={`Left ${index}`} className="rounded-[12px]" />
          </div>
        ))}
      </motion.div>

      {/* Right Images */}
      <motion.div
        className="scroll-wrapper -mt-[100px]"
        variants={reverseMarqueeVariants}
        animate="animate"
      >
        {rightImages.map((image, index) => (
          <div className="scroll-item" key={index}>
            <img
              src={image}
              alt={`Right ${index}`}
              className="rounded-[12px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalScroll;
