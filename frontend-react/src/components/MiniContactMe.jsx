import React, { useState } from "react";
import { FiCopy, FiDownload } from "react-icons/fi";
import { Loader } from "lucide-react"; // Import spinner icon
import { useNavigate } from "react-router-dom";

const MiniContactMe = ({ email, resumeUrl }) => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const handleDownload = async () => {
    if (!resumeUrl) return;

    setIsDownloading(true);

    // Simulate a short delay for the download process
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col justify-center items-center pt-6">
      <div className="text-center mb-4 flex max-sm:flex-col gap-4 max-sm:gap-2">
        {/* Email Copy Section */}
        <div className="flex justify-center items-center gap-2 work-tag p-4 rounded-xl">
          <span>{email}</span>
          <button onClick={handleCopyEmail} className="btn-secondary">
            <FiCopy />
          </button>
        </div>

        {/* Resume Download Section */}
        {resumeUrl && (
          <a
            href={resumeUrl}
            download="David_Resume.pdf"
            onClick={handleDownload}
          >
            <div className="relative group">
              <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10 cursor-pointer">
                <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12" />
                <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-black gap-2 px-6 py-3">
                  <button className="input font-semibold text-lg h-full opacity-90 w-full bg-black">
                    {isDownloading ? "Downloading..." : "Download Resume"}
                  </button>

                  {isDownloading ? (
                    <Loader className="animate-spin text-lg" />
                  ) : (
                    <FiDownload className="text-lg" />
                  )}
                </div>
                <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-accent-800 to-slate-500 blur-[30px]" />
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Contact Info Button */}
      <div className="button-wrapper" onClick={() => navigate("/contact")}>
        <button className="hover-button">More Contact Info</button>
      </div>
    </section>
  );
};

export default MiniContactMe;
