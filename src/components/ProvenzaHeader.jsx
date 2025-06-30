import { Facebook, Instagram, Sparkles } from "lucide-react"
import { useState, useEffect, useRef, lazy, Suspense } from "react"
import logoSvg from '../assets/logo.svg'

// Import components
import HeroSection from './HeroSection'
import PropertyDetailsSection from './PropertyDetailsSection'
import WhyProvenzaSection from './WhyProvenzaSection'
import LocationSection from './LocationSection'
import AmenitiesGallerySection from './AmenitiesGallerySection'
import InfoSection from './InfoSection'
import FooterSection from './FooterSection'

// Lazy load del componente de demos
const DiscountBannersShowcase = lazy(() => import('./DiscountBannersShowcase'))

const ProvenzaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [showDiscountDemo, setShowDiscountDemo] = useState(false)

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
    footer: useRef(null)
  }

  const scrollToSection = (sectionKey) => {
    const sectionRef = sectionRefs[sectionKey]
    if (sectionRef && sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop - 50 // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
          
          if (isVisible && !visibleSections.has(key)) {
            setVisibleSections(prev => new Set(prev).add(key))
          }
        }
      })
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSections])

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
            <div className={`flex items-center transition-all duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
              <img
                src={logoSvg}
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
                className={`w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-[#0A2259]'} transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-[#0A2259]'} transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 ${isScrolled ? 'bg-white' : 'bg-[#0A2259]'} transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {/* Desktop Navigation with hover effects */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {[
                { name: "UBICACIÓN", key: "location" },
                { name: "AMENIDADES", key: "gallery" },
                { name: "MODELOS", key: "details" },
                { name: "CONTACTO", key: "footer" }
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
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#9CAFA2]" : "bg-blue-700"
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Social Icons with hover animation */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="#"
                className="w-8 h-8 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Facebook className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-[#9CAFA2]" : "text-blue-950"
                }`} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-none flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? "text-white hover:text-[#9CAFA2]" : "text-blue-950"
                }`} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className={`pt-4 pb-2 space-y-3 ${
              mobileMenuOpen ? (isScrolled ? 'bg-[#0A2259]/95 backdrop-blur-md' : 'bg-white') : ''
            }`}>
              {[
                { name: "UBICACIÓN", key: "location" },
                { name: "AMENIDADES", key: "gallery" },
                { name: "MODELOS", key: "details" },
                { name: "CONTACTO", key: "footer" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left transition-colors font-normal text-sm tracking-wider uppercase py-2 ${
                    isScrolled ? 'text-white hover:text-[#9CAFA2]' : 'text-[#0A2259] hover:text-blue-700'
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
                      ? 'bg-white/20 hover:bg-white/30' 
                      : 'bg-[#0A2259] hover:bg-blue-800'
                  }`}
                >
                  <Facebook className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-white'}`} />
                </a>
                <a
                  href="#"
                  className={`w-8 h-8 rounded-none flex items-center justify-center transition-colors ${
                    isScrolled 
                      ? 'bg-white/20 hover:bg-white/30' 
                      : 'bg-[#0A2259] hover:bg-blue-800'
                  }`}
                >
                  <Instagram className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-white'}`} />
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



      {/* Footer Section */}
      <FooterSection 
        footerRef={sectionRefs.footer}
        visibleSections={visibleSections}
      />

      {/* Floating Demo Button */}
      <button
        onClick={() => setShowDiscountDemo(true)}
        className="fixed bottom-8 left-8 z-40 bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group animate-pulse-subtle"
      >
        <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-semibold">Ver Promociones</span>
      </button>

      {/* Discount Demo Modal */}
      {showDiscountDemo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-modal-in">
            <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white p-4 md:p-6 flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold">Opciones de Promociones - Provenza</h3>
              <button
                onClick={() => setShowDiscountDemo(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
              <Suspense fallback={
                <div className="flex items-center justify-center h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A2259]"></div>
                </div>
              }>
                <DiscountBannersShowcase />
              </Suspense>
            </div>
          </div>
        </div>
      )}

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
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        @keyframes pulseSlight {
          0%, 100% {
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
      `}</style>
    </div>
  )
}

export default ProvenzaHeader