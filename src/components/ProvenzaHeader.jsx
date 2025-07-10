"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";

// Import components
import HeroSection from "./HeroSection";
import PropertyDetailsSection from "./PropertyDetailsSection";
import WhyProvenzaSection from "./WhyProvenzaSection";
import LocationSection from "./LocationSection";
import AmenitiesGallerySection from "./AmenitiesGallerySection";
import InfoSection from "./InfoSection";
import FooterSection from "./FooterSection";
import ModelsSection from "./ModelsSection";

// Import new components
import Header from "./Header";
import ModelsPanel from "./ModelsPanel";
import WhatsAppButton from "./WhatsAppButton";
import AnimationStyles from "./AnimationStyles";
import {
  useIntersectionObserver,
  useModelsData,
  useScrollDetection,
} from "./customHooks";

// Lazy load del componente de demos
const DiscountBannersShowcase = lazy(() => import("./DiscountBannersShowcase"));

// Custom hooks

const ProvenzaHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDiscountDemo, setShowDiscountDemo] = useState(false);
  const [showModelsPanel, setShowModelsPanel] = useState(false);

  // Custom hooks
  const isScrolled = useScrollDetection(50);
  const modelsData = useModelsData();

  // Refs para las secciones
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

  // Intersection Observer
  const visibleSections = useIntersectionObserver(sectionRefs);

  // Función para scroll a sección
  const scrollToSection = (sectionKey) => {
    const sectionRef = sectionRefs[sectionKey];
    if (sectionRef && sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  // Auto-show del panel después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModelsPanel(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        setShowModelsPanel={setShowModelsPanel}
      />

      {/* Main Sections */}
      <HeroSection
        heroRef={sectionRefs.hero}
        visibleSections={visibleSections}
      />

      <InfoSection
        infoRef={sectionRefs.info}
        titleRef={sectionRefs.title}
        subtitleRef={sectionRefs.subtitle}
        arrowRef={sectionRefs.arrow}
        visibleSections={visibleSections}
      />

      <PropertyDetailsSection
        detailsRef={sectionRefs.details}
        visibleSections={visibleSections}
      />

      <WhyProvenzaSection
        whyRef={sectionRefs.why}
        visibleSections={visibleSections}
      />

      <LocationSection
        locationRef={sectionRefs.location}
        visibleSections={visibleSections}
      />

      <AmenitiesGallerySection
        galleryRef={sectionRefs.gallery}
        visibleSections={visibleSections}
      />

      <ModelsSection
        modelsRef={sectionRefs.models}
        visibleSections={visibleSections}
      />

      <FooterSection
        footerRef={sectionRefs.footer}
        visibleSections={visibleSections}
      />

      {/* Models Panel */}
      <ModelsPanel
        showModelsPanel={showModelsPanel}
        setShowModelsPanel={setShowModelsPanel}
        modelsData={modelsData}
        scrollToSection={scrollToSection}
      />

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
      <WhatsAppButton />

      {/* Animation Styles */}
      <AnimationStyles />
    </div>
  );
};

export default ProvenzaHeader;
