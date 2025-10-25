import React, { useState } from "react";
import { sections } from "../constants";
import { Link as ScrollLink } from "react-scroll";

const NavigationMobileMenu = () => {
  const [active, setActive] = useState(0);

  // Handle automatic updating of active index when scrolling
  const handleSetActive = (to) => {
    const index = sections.findIndex((menu) => menu.slug === to);
    if (index !== -1) {
      setActive(index); // Update active index only if the section is in the menu
    }
  };

  return (
    <div className="nav-glass-container fixed bottom-8 max-h-[4.4rem] px-14 rounded-full left-1/2 -translate-x-1/2 border border-gray-300/30 max-sm:rounded-none max-sm:bottom-0">
      <ul className="flex relative">
        {/* Floating indicator */}
        {active !== -1 && (
          <span
            className={`bg-gradient-to-r from-slate-800 to-slate-700 duration-300 ${sections[active]?.dis} border-4 border-gray-300/30 h-16 w-16 absolute
              -top-5 pl-2 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
                rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
                rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
        )}

        {/* Menu items */}
        {sections.map((menu, i) => (
          <li key={menu.slug} className="w-16">
            <ScrollLink
              to={menu.slug} // Target slug for smooth scrolling
              smooth={false} // Disable smooth scrolling for immediate navigation
              spy={true}
              offset={-50} // Adjust for header height
              duration={0} // Ensure no delay in navigation
              onSetActive={handleSetActive} // Update active section when scrolling
              className="flex flex-col text-center pt-6 pb-2 cursor-pointer"
            >
              {/* Icon */}
              <span
                className={`text-xl duration-300 ${
                  i === active
                    ? "-mt-6 text-white mx-auto z-30"
                    : "text-gray-400 mx-auto"
                }`}
              >
                {menu.icon}
              </span>
              {/* Title */}
              <span
                className={`duration-700 ${
                  i === active
                    ? "translate-y-4 opacity-100 text-sm mt-2"
                    : "opacity-0 translate-y-10 text-transparent"
                }`}
              >
                {menu.title}
              </span>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMobileMenu;
