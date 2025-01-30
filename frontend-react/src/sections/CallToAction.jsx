import React, { useEffect, useState } from "react";
import MiniContactMe from "../components/MiniContactMe";
import { SanityClient } from "@sanity/client";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const CallToAction = () => {
  const [resumeUrl, setResumeUrl] = useState(null);

  // useEffect(() => {
  //   SanityClient.fetch(`*[_type == "settings"][0]{resumeFile}`).then((data) =>
  //     setResumeUrl(data.resumeFile.asset.url)
  //   );
  // }, []);

  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  return (
    <section className="relative z-0 ">
      <Element name="cta">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={transition}
          initial="hidden"
        >
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-48 max-sm:py-24 flex flex-col">
            <div className="text-center">
              <a
                className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 hover:before:bg-dark-gradient-0 before:-z-10 before:transition-colors before:duration-500 group"
                href="#"
              >
                <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-slate-800 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 group-hover:before:opacity-100 before:absolute before:w-1/2 before:pb-[100%] before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
                  <span className="relative whitespace-nowrap">
                    <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out max-sm:text-2xl">
                      Build the App you need
                    </span>

                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['Create_beautiful_user_interfaces'] after:content-['Create_beautiful_user_interfaces'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll max-sm:text-2xl"
                      aria-hidden="true"
                    ></span>
                  </span>
                </span>

                <span className=" text-light-400 group-hover:text-slate-300 transition-colors duration-500 ease-in-out max-sm:text-2xl">
                  with David
                </span>
              </a>
            </div>

            <div>
              <MiniContactMe
                email="jacobsdavid.dr@gmail.com"
                resumeUrl={resumeUrl}
              />
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default CallToAction;
