import { useRef, useEffect } from "react";
import { useNavProvider } from "../contexts/NavProvider.jsx";
import { useInView } from "framer-motion";

export default function Section({ section }) {
  const ref = useRef(null);
  const { setActiveLink } = useNavProvider();

  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveLink(section.slug);
    }
  }, [isInView, setActiveLink, section.slug]);

  // Render Custom Component if it exists
  if (section.component) {
    const CustomComponent = section.component;
    return <CustomComponent section={section} />;
  }

  // Default Layout if no specific component
  return (
    <section
      id={section.slug}
      ref={ref}
      className="h-screen flex justify-center items-center bg-white p-8 border-b"
    >
      <h2 className="text-4xl font-bold text-slate-300">{section.title}</h2>
    </section>
  );
}
