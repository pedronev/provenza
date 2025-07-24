import logoProvenza from "../assets/icon.svg";

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
          <img
            src={logoProvenza}
            alt="Provenza Logo"
            className="h-16 md:h-24 mx-auto mb-3"
            style={{ minHeight: 56 }}
          />
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
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
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
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
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
