import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import juegos from "../assets/juegosbebes.png";
import asadores from "../assets/asadores.jpg";
import infantiles from "../assets/juegos.jpg";
import canchas from "../assets/canchas.jpg";

const AmenitiesGallerySection = ({ galleryRef, visibleSections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Amenidades de Provenza
  const amenities = [
    {
      id: 1,
      url: juegos,
      title: "JUEGOS ESPECIALES PARA BEBÉS",
      subtitle: "Juegos especiales para los más pequeños",
      position: "70%",
      description:
        "Área dedicada especialmente para el entretenimiento y desarrollo de los bebés y niños pequeños.",
    },
    {
      id: 2,
      url: asadores,
      title: "TERRAZA CON ASADORES",
      position: "90%",
      subtitle: "Para tu carnita asada los fines de semana",
      description:
        "Disfruta de una terraza con asadores y parrillas para disfrutar de la comida asada en la tarde.",
    },
    {
      id: 3,
      url: infantiles,
      position: "40%",
      title: "JUEGOS INFANTILES",
      subtitle:
        "Espacios seguros, donde tus hijos explorarán y crearán recuerdos para toda la vida.					",
      description:
        "Area con juegos infantiles para que los pequeños disfruten de una experiencia divertida y segura.",
    },
    {
      id: 4,
      url: canchas,
      position: "60%",
      title: "CANCHAS DEPORTIVAS",
      subtitle: "Reunirte con tus amigos para pasar tardes de diversión.",
      description:
        "Canchas deportivas para ejercitarte al aire libre en un ambiente natural y saludable.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % amenities.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, amenities.length]);

  return (
    <section
      ref={galleryRef}
      className={`py-16 md:py-20 bg-[#0A2259] transition-all duration-1000 ${
        visibleSections.has("gallery") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 delay-200 ${
            visibleSections.has("gallery")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-normal text-white uppercase tracking-wider leading-tight mb-5"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            DESCUBRE TU FELICIDAD
          </h2>

          <div className="w-20 h-1 bg-[#9CAFA2] mx-auto mb-5"></div>

          <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wide opacity-90">
            LA UBICACIÓN QUE NECESITAS
          </h3>
        </div>

        {/* Subtitle */}
        <div
          className={`text-center mb-10 transition-all duration-1000 delay-400 ${
            visibleSections.has("gallery")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            PROVENZA<sup className="text-sm">®</sup> CUENTA CON AMENIDADES QUE
            MEJORARÁN TU CALIDAD DE VIDA.
          </p>
        </div>

        {/* Hero Slider */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            visibleSections.has("gallery")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Controls Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {amenities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#9CAFA2]"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-play Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">
                {isAutoPlaying ? "Pausar" : "Reproducir"}
              </span>
            </button>
          </div>

          {/* Main Slider */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={amenity.url}
                  alt={amenity.title}
                  style={{ objectPosition: "center " + amenity.position }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div
                  className={`absolute inset-0 flex items-end transition-all duration-700 delay-300 ${
                    index === currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="w-full p-8 md:p-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div className="w-16 h-0.5 bg-[#9CAFA2]"></div>
                      </div>

                      <h3
                        className="text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase tracking-wider leading-tight mb-4"
                        style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                      >
                        {amenity.title}
                      </h3>

                      <p className="text-lg md:text-xl text-[#9CAFA2] font-medium mb-4 uppercase tracking-wide">
                        {amenity.subtitle}
                      </p>

                      <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows - Bottom Right Position */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-30">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setCurrentIndex(
                      (prev) => (prev - 1 + amenities.length) % amenities.length
                    );
                    setIsAutoPlaying(false);
                  }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    setCurrentIndex((prev) => (prev + 1) % amenities.length);
                    setIsAutoPlaying(false);
                  }}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full bg-[#9CAFA2] transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / amenities.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {amenities.map((amenity, index) => (
              <button
                key={amenity.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`relative rounded-2xl overflow-hidden aspect-video group transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-[#9CAFA2] ring-offset-2 ring-offset-[#0A2259] scale-105"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img
                  src={amenity.url}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-white text-xs md:text-sm font-semibold uppercase tracking-wide truncate">
                      {amenity.title}
                    </h4>
                  </div>
                </div>

                {/* Active Indicator */}
                {index === currentIndex && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#9CAFA2] rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* <iframe src="https://www.theasys.io/viewer/Z815XhW4DBPy3FAwe7J3yQOWjLcyiv"  frameborder="0" scrolling="no" allow="vr;gyroscope;accelerometer" width="1280" height="450" ></iframe> */}
    </section>
  );
};

export default AmenitiesGallerySection;
