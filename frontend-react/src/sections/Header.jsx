import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavigationMenu from "../components/NavigationMenu";
import NavigationMobile from "../components/NavigationMobile";
import NavProvider from "../contexts/NavProvider";
import { sections } from "../constants";

export default function Header() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Handle visibility of Hero section
    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < 100);
    };

    // Handle screen size
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // max-sm breakpoint
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <NavProvider>
        {/* Conditionally render based on screen size */}
        {isSmallScreen ? (
          <div className="w-full fixed top-0 z-50">
            {/* Fixed NavigationMenu for max-sm */}
            <NavigationMenu links={sections} />
          </div>
        ) : (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHeroVisible ? 0 : -100 }} // Translate up when not visible
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute w-full"
          >
            {/* Animated NavigationMenu for md and above */}
            <NavigationMenu links={sections} />
          </motion.div>
        )}
        {/* NavigationMobile: Visible when scrolled beyond Hero Section */}
        {isSmallScreen ? (
          <div className="w-full fixed top-0 z-50">
            {/* Fixed NavigationMenu for max-sm */}
            <NavigationMobile />
          </div>
        ) : (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: isHeroVisible ? -100 : 0 }} // Translate down when visible
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute w-full"
          >
            <NavigationMobile />
          </motion.div>
        )}
      </NavProvider>
    </header>
  );
}
