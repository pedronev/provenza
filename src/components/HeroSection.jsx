import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import casas from "../assets/casas.png";
const HeroSection = ({ heroRef, visibleSections }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["TU FELICIDAD", "TU HOGAR", "TU CAMINO", "TODO"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <div
      ref={heroRef}
      className={`pt-16 md:pt-20 mb-6 flex justify-center transition-all duration-1000 ${
        visibleSections.has("hero")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-[95%] rounded-3xl overflow-hidden bg-[#4B75C3] relative">
        <div className="absolute inset-0 z-0">
          <img
            src={casas}
            alt="Provenza Residencial Development"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 80%" }}
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12 min-h-[60vh]">
          <div className="w-full text-center mt-4">
            <div className="inline-block">
              <div className="text-sm md:text-base font-normal tracking-wider text-white uppercase animate-fade-in-up">
                UBICADO AL INICIO
              </div>
              <h1 className="text-lg md:text-2xl font-normal tracking-wider text-white uppercase animate-fade-in-up animation-delay-200">
                DEL CORREDOR TURÍSTICO A IMALA
              </h1>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center mb-14 md:mb-24">
            <div className="text-left">
              <div
                className="text-5xl sm:text-7xl md:text-9xl font-normal text-white uppercase tracking-wider animate-fade-in-up animation-delay-400"
                style={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                CERCA DE
              </div>

              <div className="relative h-20 sm:h-24 md:h-36 mt-0 overflow-hidden">
                <div className="absolute inset-0 flex items-start justify-start">
                  <div
                    key={currentWordIndex}
                    className="font-bold text-5xl sm:text-7xl md:text-9xl tracking-wider uppercase animate-word-bounce text-white"
                    style={{
                      fontFamily: "Montserrat, Arial, sans-serif",
                      textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    {rotatingWords[currentWordIndex]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 animate-fade-in-up animation-delay-600">
            <div className="text-white">
              <div
                className="text-xl md:text-2xl tracking-wide uppercase text-white"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                CONOCE NUESTRA{" "}
                <span
                  className="font-bold text-white"
                  style={{ letterSpacing: "0.05em" }}
                >
                  PRIMERA ETAPA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer text centered at the bottom as a single line */}
        <div className="absolute bottom-0 left-0 right-0 z-30 text-center px-8 pb-4">
          <p
            className="text-xs md:text-sm leading-relaxed text-white/90 font-light mx-auto max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Lo aquí reflejado no debe considerarse como definitivo, su propósito
            es meramente ilustrativo. El desarrollador se reserva el derecho a
            realizar cambios en los materiales, especificaciones y diseño sin
            previo aviso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
