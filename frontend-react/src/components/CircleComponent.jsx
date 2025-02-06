import React, { useEffect, useState } from "react";

// Utility to generate random values
const randomValue = (min, max) => Math.random() * (max - min) + min;

const CircleComponent = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const circlesArray = Array.from({ length: 50 }, (_, i) => {
      const size = randomValue(5, 20); // Random size between 5px and 20px
      const startPositionX = randomValue(0, 100); // Random X position
      const startPositionY = randomValue(0, 100); // Random Y position
      const moveDuration = randomValue(5000, 15000); // Random move duration
      const animationDelay = randomValue(0, 5000); // Random delay

      return {
        id: i,
        size,
        startPositionX,
        startPositionY,
        moveDuration,
        animationDelay,
      };
    });

    setCircles(circlesArray);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full bg-gradient-radial from-primary-300 to-primary-500 mix-blend-screen"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.startPositionY}vh`,
            left: `${circle.startPositionX}vw`,
            animation: `move-up ${circle.moveDuration}ms linear ${circle.animationDelay}ms infinite, fade-in 1s ease-in-out, scale-up 2s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default CircleComponent;
