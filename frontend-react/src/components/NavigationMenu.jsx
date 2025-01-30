import { useRef, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavProvider } from "../contexts/NavProvider.jsx";
import clsx from "clsx";

export default function NavigationMenu({ links }) {
  const { activeLink, setActiveLink } = useNavProvider();
  const activeLinkRef = useRef(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto lg:mt-4 md:px-6">
      <div
        className={clsx(
          "flex min-h-14 w-full items-stretch justify-between gap-3 p-2  border-transparent nav-glass-container md:shadow-sm md:p-3 lg:border lg:border-gray-300/30 lg:rounded-full lg:relative sm:fixed sm:top-0 sm:z-50 backdrop-blur-sm",
          hasScrolled && "shadow-sm",
        )}
      >
        <div className="flex items-center">
          <RouterLink
            to="/"
            className="ml-3 inline-flex text-light-400 hover:text-light-500"
          >
            <img
              src="/assets/images/portfolio-logo.png"
              alt="logo"
              className="w-6 h-6 sm:w-10 sm:h-10"
            />
          </RouterLink>
        </div>
        <nav className="relative hidden lg:flex justify-center">
          <ul className="relative flex flex-wrap items-center gap-3 text-sm font-medium">
            {links.map((link) => (
              <li key={link.slug}>
                <ScrollLink
                  to={link.slug}
                  smooth={false} // Disable smooth scrolling for immediate navigation
                  spy={true}
                  offset={-50} // Adjust for header height
                  duration={0} // Ensure no delay in navigation
                  ref={activeLink === link.slug ? activeLinkRef : null}
                  onClick={() => setActiveLink(link.slug)}
                  className={clsx(
                    "inline-flex rounded-full px-3 py-1.5 text-light-700/70 hover:text-light-500 cursor-pointer",
                    {
                      "text-light-600": activeLink === link.slug,
                    },
                  )}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end">
          <ScrollLink
            to="cta"
            smooth={false} // Disable smooth scrolling for immediate navigation
            spy={true}
            offset={-50} // Adjust for header height
            duration={0}
            className="btn-primary cursor-pointer text-[10px] sm:text-[12px]"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
