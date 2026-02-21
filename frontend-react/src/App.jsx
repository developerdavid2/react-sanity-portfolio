import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="app">
            <Header />
            <main className="min-h-[calc(100vh-100px)] relative overflow-x-hidden">
              <Outlet />
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
