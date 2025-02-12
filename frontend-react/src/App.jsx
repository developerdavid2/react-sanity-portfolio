import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import { Outlet } from "react-router";
import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

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
      currentX.current += (targetX.current - currentX.current) * 0.5;
      currentY.current += (targetY.current - currentY.current) * 0.5;

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor max-md:hidden" />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main className="min-h-[calc(100vh-100px)] relative overflow-x-hidden">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
