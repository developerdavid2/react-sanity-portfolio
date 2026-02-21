import React, { useState } from "react";
import { sections } from "../constants";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

const NavigationMobileMenu = () => {
  const [active, setActive] = useState(0);

  const handleSetActive = (to) => {
    const index = sections.findIndex((menu) => menu.slug === to);
    if (index !== -1) setActive(index);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:translate-x-0 z-50">
      <div className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[10px] rounded-full max-sm:rounded-none max-sm:border-x-0 max-sm:border-b-0 shadow-sm px-14 max-sm:px-0">
        <ul className="flex relative max-sm:justify-around max-sm:w-full">
          {/* Floating indicator circle */}
          {active !== -1 && (
            <span
              className={clsx(
                "absolute -top-5 w-16 h-16 rounded-full border border-white/[0.08] bg-[#111] transition-transform duration-300 max-sm:hidden",
                sections[active]?.dis,
              )}
            />
          )}

          {/* Active indicator for mobile — simple underline/dot, no jolt */}
          <span
            className={clsx(
              "absolute bottom-0 h-[2px] w-16 bg-white/20 rounded-full transition-transform duration-300 sm:hidden",
              sections[active]?.dis,
            )}
          />

          {sections.map((menu, i) => (
            <li
              key={menu.slug}
              className="w-16 max-sm:flex-1 max-h-[4.4rem] h-[4.4rem] relative"
            >
              <ScrollLink
                to={menu.slug}
                smooth={false}
                spy={true}
                offset={-50}
                duration={0}
                onSetActive={handleSetActive}
                data-cursor="hover"
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
              >
                {/* Icon — lifts into circle on desktop, stays centered on mobile */}
                <span
                  className={clsx(
                    "text-xl transition-all duration-300 z-30",
                    i === active
                      ? "sm:-mt-10 text-white mx-auto"
                      : "text-[#888] mx-auto",
                  )}
                >
                  {menu.icon}
                </span>

                {/* Label — absolutely positioned so it NEVER shifts layout */}
                <span
                  className={clsx(
                    "absolute bottom-2 left-0 right-0 text-center text-[11px] transition-all duration-300",
                    i === active
                      ? "opacity-100 text-white translate-y-0"
                      : "opacity-0 translate-y-1 text-transparent pointer-events-none",
                  )}
                >
                  {menu.title}
                </span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationMobileMenu;
