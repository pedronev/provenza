"use client";

import { Facebook, Instagram } from "lucide-react";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import logoSvg from "../assets/logo.svg";

// Import components
import HeroSection from "./HeroSection";
import PropertyDetailsSection from "./PropertyDetailsSection";
import WhyProvenzaSection from "./WhyProvenzaSection";
import LocationSection from "./LocationSection";
import AmenitiesGallerySection from "./AmenitiesGallerySection";
import InfoSection from "./InfoSection";
import FooterSection from "./FooterSection";
import ModelsSection from "./ModelsSection";
import lirio from "../assets/lirio.png";
import rosa from "../assets/rosa.png";
import malva from "../assets/malva.png";
// Lazy load del componente de demos
const DiscountBannersShowcase = lazy(() => import("./DiscountBannersShowcase"));

const ProvenzaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [showDiscountDemo, setShowDiscountDemo] = useState(false);
  const [showModelsPanel, setShowModelsPanel] = useState(false);

  const sectionRefs = {
    hero: useRef(null),
    details: useRef(null),
    why: useRef(null),
    location: useRef(null),
    gallery: useRef(null),
    info: useRef(null),
    title: useRef(null),
    subtitle: useRef(null),
    arrow: useRef(null),
    footer: useRef(null),
    models: useRef(null),
  };

  // Datos de los modelos para el panel lateral con características reales
  const modelsData = [
    {
      id: 1,
      name: "ROSA",
      area: "155 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: rosa,
    },
    {
      id: 2,
      name: "LIRIO",
      area: "169 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: lirio,
    },
    {
      id: 3,
      name: "MALVA",
      area: "185 M²",
      bedrooms: "3",
      bathrooms: "3 1/2",
      image: malva,
    },
  ];

  const scrollToSection = (sectionKey) => {
    const sectionRef = sectionRefs[sectionKey];
    if (sectionRef && sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop - 50; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // ✅ PRIMER useEffect: Para el header scroll (NECESARIO)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar inmediatamente para el estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Auto-show del panel después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModelsPanel(true);
    }, 3000); // Aparece después de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  // ✅ SEGUNDO useEffect: Para las animaciones de las secciones (OPTIMIZADO)
  useEffect(() => {
    let ticking = false;

    const handleIntersection = (entries) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisibleSections((prevVisible) => {
            const newVisible = new Set(prevVisible);

            entries.forEach((entry) => {
              const sectionKey = entry.target.dataset.section;
              if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                newVisible.add(sectionKey);
              }
            });

            return newVisible;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.1],
      rootMargin: "20px", // Reducido para mejor detección
    });

    // Pequeño delay para asegurar que los refs estén listos
    const timeoutId = setTimeout(() => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          ref.current.dataset.section = key;
          observer.observe(ref.current);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sin dependencias para evitar re-renders

  return (
    <div className="min-h-screen bg-white">
      {/* Header with dynamic styling */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A2259]/95 backdrop-blur-md shadow-lg py-2 md:py-3"
            : "bg-white py-3 md:py-4"
        }`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with scale animation on scroll */}
            <div
              className={`flex items-center transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <img
                src={logoSvg || "/placeholder.svg"}
                alt="Provenza Logo"
                className={`h-8 md:h-10 mr-2 md:mr-3 transition-all duration-300 ${
                  isScrolled ? "brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 ${
                  isScrolled ? "bg-white" : "bg-[#0A2259]"
                } transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 ${
                  isScrolled ? "bg-white" : "bg-[#0A2259]"
                } transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 ${
                  isScrolled ? "bg-white" : "bg-[#0A2259]"
                } transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* Desktop Navigation with hover effects */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {[
                { name: "UBICACIÓN", key: "location" },
                { name: "AMENIDADES", key: "gallery" },
                { name: "MODELOS", key: "models" },
                { name: "¿POR QUÉ PROVENZA?", key: "why" },
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.key)}
                  className={`relative transition-all duration-300 font-normal text-sm lg:text-base tracking-wider uppercase group ${
                    isScrolled
                      ? "text-white hover:text-[#9CAFA2] py-2"
                      : "text-[#0A2259] hover:text-blue-700 py-3"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#9CAFA2]" : "bg-blue-700"
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            {/* Social Icons with hover animation */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://www.facebook.com/provenzaculiacan"
                target="_blank"
                className="w-8 h-8 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Facebook
                  className={`w-8 h-8 transition-colors duration-300 ${
                    isScrolled
                      ? "text-white hover:text-[#9CAFA2]"
                      : "text-blue-950"
                  }`}
                />
              </a>
              <a
                href="https://www.instagram.com/provenzaculiacan/"
                target="_blank"
                className="w-8 h-8 rounded-none flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram
                  className={`w-8 h-8 transition-colors duration-300 ${
                    isScrolled
                      ? "text-white hover:text-[#9CAFA2]"
                      : "text-blue-950"
                  }`}
                />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav
              className={`pt-4 pb-2 space-y-3 ${
                mobileMenuOpen
                  ? isScrolled
                    ? "bg-[#0A2259]/95 backdrop-blur-md"
                    : "bg-white"
                  : ""
              }`}
            >
              {[
                { name: "UBICACIÓN", key: "location" },
                { name: "AMENIDADES", key: "gallery" },
                { name: "MODELOS", key: "models" },
                { name: "¿POR QUÉ PROVENZA?", key: "why" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left transition-colors font-normal text-sm tracking-wider uppercase py-2 ${
                    isScrolled
                      ? "text-white hover:text-[#9CAFA2]"
                      : "text-[#0A2259] hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex items-center space-x-3 pt-4">
                <a
                  href="#"
                  className={`w-8 h-8 rounded-none flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-[#0A2259] hover:bg-blue-800"
                  }`}
                >
                  <Facebook
                    className={`w-4 h-4 ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                  />
                </a>
                <a
                  href="#"
                  className={`w-8 h-8 rounded-none flex items-center justify-center transition-colors ${
                    isScrolled
                      ? "bg-white/20 hover:bg-white/30"
                      : "bg-[#0A2259] hover:bg-blue-800"
                  }`}
                >
                  <Instagram
                    className={`w-4 h-4 ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection
        heroRef={sectionRefs.hero}
        visibleSections={visibleSections}
      />

      {/* Info Section */}
      <InfoSection
        infoRef={sectionRefs.info}
        titleRef={sectionRefs.title}
        subtitleRef={sectionRefs.subtitle}
        arrowRef={sectionRefs.arrow}
        visibleSections={visibleSections}
      />

      {/* Property Details Section */}
      <PropertyDetailsSection
        detailsRef={sectionRefs.details}
        visibleSections={visibleSections}
      />

      {/* Why Provenza Section */}
      <WhyProvenzaSection
        whyRef={sectionRefs.why}
        visibleSections={visibleSections}
      />

      {/* Location Section */}
      <LocationSection
        locationRef={sectionRefs.location}
        visibleSections={visibleSections}
      />

      {/* Amenities Gallery Section */}
      <AmenitiesGallerySection
        galleryRef={sectionRefs.gallery}
        visibleSections={visibleSections}
      />

      {/* Models Section */}
      <ModelsSection
        modelsRef={sectionRefs.models}
        visibleSections={visibleSections}
      />

      {/* Footer Section */}
      <FooterSection
        footerRef={sectionRefs.footer}
        visibleSections={visibleSections}
      />

      {/* Models Side Panel - Auto-show */}
      {showModelsPanel && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40 animate-fade-in"
            onClick={() => setShowModelsPanel(false)}
          />
          <div
            className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-50 w-96 max-w-[90vw] transform transition-all duration-500 ease-out animate-slide-in-from-right`}
          >
            <div className="h-full overflow-y-auto">
              {/* Panel Header */}
              <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Nuestros Modelos
                      </h3>
                      <p className="text-white/90 text-sm">
                        Encuentra tu hogar ideal
                      </p>
                    </div>
                    <button
                      onClick={() => setShowModelsPanel(false)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Models List */}
              <div className="p-6 space-y-6">
                {modelsData.map((model, index) => (
                  <div
                    key={model.id}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 animate-slide-in-right"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Model Image */}
                    <div className="relative rounded-xl overflow-hidden mb-4 group">
                      <img
                        src={model.image || "/placeholder.svg"}
                        alt={`Modelo ${model.name}`}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="text-white text-xs font-semibold bg-[#0A2259]/80 px-2 py-1 rounded-full">
                            Tour Virtual Disponible
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Model Info */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold text-[#0A2259] uppercase tracking-wide">
                            {model.name}
                          </h4>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#0A2259]">
                            {model.area}
                          </div>
                          <div className="text-xs text-gray-600 uppercase tracking-wide">
                            Área Total
                          </div>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border">
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#0A2259]">
                            {model.bedrooms}
                          </div>
                          <div className="text-xs text-gray-600 uppercase">
                            Recámaras
                          </div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#0A2259]">
                            {model.bathrooms}
                          </div>
                          <div className="text-xs text-gray-600 uppercase">
                            Baños
                          </div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-[#0A2259]">
                            2
                          </div>
                          <div className="text-xs text-gray-600 uppercase">
                            Niveles
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="p-6 bg-gray-50 border-t">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Descubre todos los detalles de nuestros modelos
                  </p>
                  <button
                    onClick={() => {
                      scrollToSection("models");
                      setShowModelsPanel(false);
                    }}
                    className="w-full bg-[#0A2259] text-white py-4 rounded-xl font-semibold hover:bg-[#1a3668] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Ver Todos los Modelos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Discount Demo Modal */}
      {showDiscountDemo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-modal-in">
            <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white p-4 md:p-6 flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold">
                Opciones de Promociones - Provenza
              </h3>
              <button
                onClick={() => setShowDiscountDemo(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(90vh - 80px)" }}
            >
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-96">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A2259]"></div>
                  </div>
                }
              >
                <DiscountBannersShowcase />
              </Suspense>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-pulse-subtle">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes wordBounce {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          70% {
            opacity: 1;
            transform: translateY(5px);
          }
          85% {
            transform: translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        @keyframes pulseSlight {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-word-bounce {
          animation: wordBounce 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSlight 2s ease-in-out infinite;
        }

        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }

        .delay-600 {
          transition-delay: 600ms;
        }

        .delay-800 {
          transition-delay: 800ms;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out backwards;
        }

        .animate-slide-in-from-right {
          animation: slideInFromRight 0.5s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProvenzaHeader;
