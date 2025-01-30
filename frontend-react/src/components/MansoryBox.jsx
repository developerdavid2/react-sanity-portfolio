import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../client";

const MasonryBox = ({ reviews, className }) => {
  // Define excluded indices for different breakpoints
  const excludedIndicesXtraSmall = [4, 5, 14, 15];
  const excludedIndicesSmall = [3, 9, 16];
  const excludedIndicesLarge = [7, 12];
  const excludedIndicesXtraLarge = [5, 6, 9, 10, 13, 14]; // Adjusted for XL screens

  return (
    <div className={`masonry-wrapper ${className}`}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`
            ${excludedIndicesXtraSmall.includes(index) ? "opacity-0 sm:opacity-100" : ""}
            ${
              excludedIndicesSmall.includes(index)
                ? "sm:opacity-0 lg:opacity-100"
                : ""
            }
            ${
              excludedIndicesLarge.includes(index)
                ? "lg:opacity-0 xl:opacity-100"
                : ""
            }
            ${
              excludedIndicesXtraLarge.includes(index)
                ? "xl:opacity-0 pointer-events-none"
                : "break-inside-avoid mb-4 overflow-hidden rounded-xl shadow-md transition-transform"
            }
          `}
        >
          <motion.div className="p-1.5 relative rounded-3xl border border-gray-400/20 overflow-hidden group opacity-30 hover:opacity-100">
            {/* Text content - hidden by default */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <span className="text-[5rem] md:text-[10rem] font-bold absolute top-[-10%] left-[35%] max-sm:top-[10%]">
                “
              </span>
              <h5 className="text-base sm:text-lg font-bold lg:h5 mb-2">
                {review.name || "Anonymous"}
              </h5>
              <span className="px-4 py-1 rounded-md work-tag text-[12px] sm:text-sm font-medium mb-4">
                {review.company || "No Company"}
              </span>
              <p className="text-[12px] sm:text-sm">
                {review.feedback || "No feedback provided."}
              </p>
            </div>

            {/* Image - scales and blurs on hover */}
            <img
              src={urlFor(review.imageUrl?.asset._ref)}
              alt={review.name || "Anonymous"}
              className="w-full h-auto object-cover rounded-2xl transition-all duration-300 group-hover:scale-95 group-hover:blur-[2rem]"
            />
            {/* {index && (
              <p className="text-center mt-2 text-gray-300">
                Client {index + 1}
              </p>
            )} */}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default MasonryBox;
