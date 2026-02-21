import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
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
          "flex min-h-14 w-full items-stretch justify-between gap-3 p-2 bg-white/[0.03] border border-white/[0.06] backdrop-blur-[4px] md:p-3 lg:rounded-full lg:relative sm:fixed sm:top-0 sm:z-50",
          hasScrolled && "shadow-sm",
        )}
      >
        <div className="flex items-center">
          <RouterLink
            to="/"
            data-cursor="hover"
            className="ml-3 inline-flex text-light-400 hover:text-light-500"
          >
            <img
              src="/assets/images/portfolio-logo.png"
              alt="logo"
              className="w-6 h-6 sm:w-10 sm:h-10"
              width={40}
              height={40}
              decoding="async"
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
                  data-cursor="hover"
                  className={clsx(
                    "inline-flex rounded-full px-3 py-1.5 text-[#aaa] hover:text-white cursor-pointer transition-colors",
                    {
                      "text-white": activeLink === link.slug,
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
            data-cursor="hover"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] sm:text-[12px] font-medium text-white transition-all hover:bg-white/15 cursor-pointer"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
