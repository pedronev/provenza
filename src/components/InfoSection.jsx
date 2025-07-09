import { ChevronDown } from "lucide-react";

const InfoSection = ({
  infoRef,
  titleRef,
  subtitleRef,
  // arrowRef,
  visibleSections,
}) => {
  return (
    <section
      ref={infoRef}
      className={`py-20 md:py-16 bg-[#9CAFA2] transition-all duration-1000 ${
        visibleSections.has("info") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Logo Animation */}
        <div
          className={`flex justify-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has("info")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="animate-float"
            >
              <g transform="translate(60, 60)">
                {/* Decorative pattern */}
                {[0, 90, 180, 270].map((rotation, index) => (
                  <g key={index} transform={`rotate(${rotation})`}>
                    <path
                      d="M 0,-40 Q 20,-20 0,0 Q -20,-20 0,-40"
                      fill="#0A2259"
                      opacity="0.8"
                      className={`animate-fade-in-scale animation-delay-${
                        index * 200
                      }`}
                    />
                  </g>
                ))}

                {/* Center circle */}
                <circle r="8" fill="#0A2259" className="animate-pulse-subtle" />
              </g>

              {/* Text around logo */}
              <text className="fill-[#0A2259] text-xs tracking-widest uppercase">
                <textPath href="#circle" startOffset="0%">
                  DISFRUTA CADA DIA • DISFRUTA CADA DIA •
                </textPath>
              </text>

              {/* Define circular path for text */}
              <defs>
                <path
                  id="circle"
                  d="M 60,20 A 40,40 0 1,1 59.9,20"
                  fill="none"
                />
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <div
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 delay-400 ${
            visibleSections.has("title")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            UN DESARROLLO DE 5 ETAPAS HECHO
          </h2>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 delay-600 ${
            visibleSections.has("subtitle")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="text-xl md:text-3xl lg:text-4xl font-normal text-[#0A2259] uppercase tracking-wide leading-relaxed max-w-5xl mx-auto"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            ESPECIALMENTE PARA TI, EN DONDE LA ARMONÍA Y SERENIDAD HACEN UN
            AMBIENTE ÚNICO.
          </p>
        </div>

        {/* Arrow Animation
        <div 
          ref={arrowRef}
          className={`flex justify-center transition-all duration-1000 delay-800 ${
            visibleSections.has('arrow') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#0A2259] flex items-center justify-center hover:bg-[#0A2259] hover:text-white transition-all duration-300 cursor-pointer group">
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 animate-bounce-slow group-hover:animate-none" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default InfoSection;
