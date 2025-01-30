import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FooterBg from "../components/FooterBg.jsx";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-transparent max-sm:pb-10">
      <div className="relative z-10">
        <FooterBg />
        <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
          <div className="inline-flex items-center">
            <div className="flex flex-1 items-center">
              <RouterLink
                to="/"
                className="ml-3 inline-flex text-light-400 hover:text-light-500"
              >
                <img
                  src="/assets/images/full-logo.png"
                  width={112}
                  height={32}
                  alt="logo"
                />
              </RouterLink>
            </div>

            <div className="border-s border-neutral-700 ps-5 ms-5">
              <p className="text-sm text-neutral-400">© 2025 Jacobs David.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
