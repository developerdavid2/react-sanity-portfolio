import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavigationMenu from "../components/NavigationMenu";
import NavigationMobile from "../components/NavigationMobile";
import NavProvider from "../contexts/NavProvider";
import { sections } from "../constants";

const Header = React.memo(function Header() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < 100);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <NavProvider>
        {isSmallScreen ? (
          <div className="w-full fixed top-0 z-50">
            {/* Fixed NavigationMenu for max-sm */}
            <NavigationMenu links={sections} />
          </div>
        ) : (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHeroVisible ? 0 : -100 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute w-full"
          >
            <NavigationMenu links={sections} />
          </motion.div>
        )}
        {isSmallScreen ? (
          <div className="w-full fixed top-0 z-50">
            <NavigationMobile />
          </div>
        ) : (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: isHeroVisible ? -100 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute w-full"
          >
            <NavigationMobile />
          </motion.div>
        )}
      </NavProvider>
    </header>
  );
});

export default Header;
