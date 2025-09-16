import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import { client, urlFor } from "../client";
import { BackgroundBeams } from "../components/ui/background-beams.jsx";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageLoadingStates, setImageLoadingStates] = useState({}); // Track loading state for each image

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "works"]';
      const data = await client.fetch(query);
      setWorks(data);
      setFilteredWorks(data);

      // Initialize loading states for all images
      const initialLoadingStates = {};
      data.forEach((_, index) => {
        initialLoadingStates[index] = true;
      });
      setImageLoadingStates(initialLoadingStates);
    };
    fetchData();
  }, []);

  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

  // Handle image load completion
  const handleImageLoad = (index) => {
    setImageLoadingStates((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  // Filter works by tag
  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilteredWorks(works);
      } else {
        setFilteredWorks(works.filter((work) => work.tags.includes(item)));
      }

      // Reset loading states for filtered works
      const newLoadingStates = {};
      const filtered =
        item === "All"
          ? works
          : works.filter((work) => work.tags.includes(item));
      filtered.forEach((_, index) => {
        newLoadingStates[index] = true;
      });
      setImageLoadingStates(newLoadingStates);
    }, 500);
  };

  // Skeleton component
  const ImageSkeleton = () => (
    <div className="w-[90%] md:w-[80%] h-auto aspect-[4/3] overflow-hidden object-cover mx-auto rounded-xl relative z-10 bg-gray-800 animate-pulse">
      <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer">
        <div className="flex items-center justify-center h-full">
          <div className="w-12 h-12 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 max-sm:pt-10 relative">
      <div className="absolute inset-0 bg-grid-white/[0.03] w-full h-[40%] z-0 mask-radial mask-reach-closest-corner" />
      <div className="blur-[10rem] h-40 w-40 bg-primary-300/50 absolute top-[10%] left-1/2 -translate-x-1/2 rounded-full -z-40" />
      <Element name="works">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={transition}
          initial="hidden"
        >
          <div className="container mx-auto px-4 md:px-8 max-md:max-w-3xl">
            <div className="flex flex-col justify-center items-center text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.gray.300)_90%,_theme(colors.gray.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium bg-dark-400/30 backdrop-blur-[5rem] px-2 py-1 w-fit text-center"
              >
                Selected Works
              </motion.div>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                className="text-2xl text-light-700 md:text-5xl font-bold bg-clip-text mt-4"
              >
                Crafted Creations
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                className="text-base md:text-lg mt-4 text-gray-400 md:max-w-xl mx-auto text-center"
              >
                A curated collection of projects built with precision, passion,
                and purpose.
              </motion.p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 max-sm:gap-2 mb-12 pt-16">
              {["All", "Web App", "Landing Page"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleFilter(item)}
                  className={`px-4 py-2  text-[10px] sm:text-sm rounded-full font-bold transition-all ${
                    activeFilter === item
                      ? "btn-filter"
                      : "btn-glass hover:text-accent-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Work Portfolio */}
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="grid grid-cols-1  lg:grid-cols-2 justify-center gap-8"
            >
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="md:p-4 rounded-3xl cursor-pointer transition-all relative group"
                >
                  {/* Work Image */}
                  <div className="relative w-full h-[400px] mb-4 rounded-xl overflow-hidden group ">
                    <div className="h-[80%] overflow-hidden rounded-xl">
                      {/* Skeleton placeholder */}
                      {imageLoadingStates[index] && <ImageSkeleton />}

                      {/* Actual image */}
                      <motion.img
                        src={urlFor(work.imgUrl)}
                        alt={work.title}
                        className={`w-[90%] md:w-[80%] h-auto overflow-hidden object-cover mx-auto rounded-xl relative z-10 transition-opacity duration-300 ${
                          imageLoadingStates[index]
                            ? "opacity-0 absolute"
                            : "opacity-100"
                        }`}
                        animate={
                          hoveredIndex === index && !imageLoadingStates[index]
                            ? { y: ["0%", "-10%"] }
                            : { y: "0%" }
                        }
                        transition={{ duration: 3 }}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageLoad(index)} // Also hide skeleton on error
                      />
                    </div>

                    {/*Hover Overlay*/}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity:
                          hoveredIndex === index && !imageLoadingStates[index]
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-[90%] md:w-[80%] h-[80%] mx-auto absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl transition-all z-20 overflow-hidden  ${
                        hoveredIndex === index && !imageLoadingStates[index]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <a
                        href={work.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-black/30 text-light-700 flex items-center justify-center hover:bg-secondary transition-all mx-2"
                      >
                        <FaEye size={20} />
                      </a>
                      <a
                        href={work.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-black/30 text-light-700 flex items-center justify-center hover:bg-secondary transition-all mx-2"
                      >
                        <FaGithub size={20} />
                      </a>
                    </motion.div>

                    {/* Work Content */}
                    <div className="flex flex-col text-start items-start work-container-glass rounded-xl p-4 gap-2 text-stone-300 absolute bottom-1 left-0 right-0 z-30">
                      <span className="px-4 py-1 rounded-md work-tag  text-[10px] sm:text-sm font-medium">
                        {work.tags[0]}
                      </span>
                      <h5 className="text-[20px] md:text-[30px] font-bold">
                        {work.title}
                      </h5>
                      <p className="text-[12px] sm:text-sm">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Works;
