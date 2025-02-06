import { Element } from "react-scroll";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import MasonryBox from "../components/MansoryBox";
import { client } from "../client";

const Reviews = () => {
  // Placeholder for fetched reviews data
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulating async data fetch
    const fetchData = async () => {
      const query = '*[_type == "reviews"]';
      const data = await client.fetch(query);
      console.log(data);
      setReviews(data);
    };

    fetchData();
  }, []);
  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  return (
    <section className="relative flex items-center justify-center py-56 flex-col text-center w-full">
      <Element name="reviews">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mask-radial mask-shape-circle mix-blend-lighten"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/testimonials-bg.png')",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <div className="blur-[10rem] h-40 w-40 bg-primary-300 absolute top-[25%] left-1/2 -translate-x-1/2 rounded-full -z-40" />
          <div className="blur-[10rem] h-40 w-40 bg-primary-300 absolute top-[25%] left-1/2 -translate-x-1/2 rounded-full -z-40" />

          <div className="flex flex-col relative z-2 max-sm:px-0 mask-left-right gradient-mask-t-20 overflow-auto">
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center text-center absolute top-[45%] sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 max-w-full px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.gray.300)_90%,_theme(colors.gray.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium bg-dark-400/30 backdrop-blur-[5rem] px-2 py-1 w-fit text-center"
              >
                Reviews
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                className="text-2xl text-light-700 md:text-5xl font-bold bg-clip-text mt-4"
              >
                Walls of Love
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                className="text-base mt-4 text-gray-400 sm:text-lg max-w-full sm:max-w-lg lg:max-w-2xl px-2 mx-auto md:text-lg  md:max-w-xl  text-center"
              >
                See how brands, agencies, and production teams worldwide trust
                our work.
              </motion.p>
            </div>

            {/* Masonry Grid */}
            <div className="mask-linear mask-top-bottom">
              <MasonryBox
                reviews={reviews}
                className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5  gap-2 lg:gap-4"
              />
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Reviews;
