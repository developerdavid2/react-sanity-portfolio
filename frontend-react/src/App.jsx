import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import { Outlet } from "react-router";
import { useEffect, useRef } from "react";

export default function App() {
  const cursorRef = useRef(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    const animate = () => {
      // Linear interpolation for smooth movement
      currentX.current += (targetX.current - currentX.current) * 0.2;
      currentY.current += (targetY.current - currentY.current) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <Header />
      <main className="min-h-[calc(100vh-100px)] relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
