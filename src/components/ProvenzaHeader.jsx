import { Facebook, Instagram, ChevronDown, Sparkles } from "lucide-react"
import { useState, useEffect, useRef, lazy, Suspense } from "react"
import logoSvg from '../assets/logo.svg'

// Lazy load del componente de demos
const DiscountBannersShowcase = lazy(() => import('./DiscountBannersShowcase'))

const ProvenzaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [showDiscountDemo, setShowDiscountDemo] = useState(false)

  const rotatingWords = ["FELICIDAD", "HOGAR", "CAMINO"]
  const sectionRefs = {
    hero: useRef(null),
    info: useRef(null),
    title: useRef(null),
    subtitle: useRef(null),
    arrow: useRef(null)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [rotatingWords.length])

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
              {["UBICACIÓN", "AMENIDADES", "MODELOS", "CONTACTO"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative transition-all duration-300 font-normal text-sm lg:text-base tracking-wider uppercase group ${
                    isScrolled 
                      ? "text-white hover:text-[#9CAFA2] py-2" 
                      : "text-[#0A2259] hover:text-blue-700 py-3"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#9CAFA2]" : "bg-blue-700"
                  }`}></span>
                </a>
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
            <nav className="pt-4 pb-2 space-y-3">
              {["UBICACIÓN", "AMENIDADES", "MODELOS", "CONTACTO"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#0A2259] hover:text-blue-700 transition-colors font-normal text-sm tracking-wider uppercase py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex items-center space-x-3 pt-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-[#0A2259] rounded-none flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#0A2259] rounded-none flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with fade-in animation */}
      <div 
        ref={sectionRefs.hero}
        className={`pt-16 md:pt-20 flex justify-center transition-all duration-1000 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-[95%] rounded-3xl overflow-hidden bg-[#4B75C3] relative">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Provenza Residencial Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12 min-h-[80vh]">
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

            <div className="flex-1 flex flex-col justify-end mb-20">
              <div className="text-left">
                <div
                  className="text-7xl sm:text-8xl md:text-9xl font-normal text-white uppercase tracking-wider animate-fade-in-up animation-delay-400"
                  style={{
                    fontFamily: "'Times New Roman', serif",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  CERCA DE
                </div>

                <div className="relative h-24 sm:h-28 md:h-36 mt-0 overflow-hidden">
                  <div className="absolute inset-0 flex items-start justify-start">
                    <div
                      key={currentWordIndex}
                      className="font-normal text-7xl sm:text-8xl md:text-9xl tracking-wider uppercase animate-word-bounce"
                      style={{
                        fontFamily: "'Times New Roman', serif",
                        color: "#b8c0b1",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                      }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 max-w-md animate-fade-in-up animation-delay-600">
              <div className="text-white">
                <div className="mb-3">
                  <div
                    className="text-base tracking-wide uppercase"
                    style={{ color: "#ccc", fontFamily: "Arial, sans-serif" }}
                  >
                    CONOCE NUESTRA{" "}
                    <span className="font-bold text-white" style={{ letterSpacing: "0.05em" }}>
                      PRIMERA ETAPA
                    </span>
                  </div>
                </div>

                <p
                  className="text-xs leading-relaxed text-white/90 font-light"
                  style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.02em" }}
                >
                  Lo aquí reflejado no debe considerarse como definitivo, su propósito es meramente ilustrativo. El
                  desarrollador se reserva el derecho a realizar cambios en los materiales, especificaciones y diseño
                  sin previo aviso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Info Section */}
      <section 
        ref={sectionRefs.info}
        className={`mt-16 md:mt-8 py-20 md:py-32 bg-[#9CAFA2] transition-all duration-1000 ${
          visibleSections.has('info') ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Logo Animation */}
          <div 
            className={`flex justify-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
              visibleSections.has('info') ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
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
                        className={`animate-fade-in-scale animation-delay-${index * 200}`}
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
            ref={sectionRefs.title}
            className={`text-center mb-8 md:mb-12 transition-all duration-1000 delay-400 ${
              visibleSections.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#0A2259] uppercase tracking-wider leading-tight">
              UN DESARROLLO DE 5 ETAPAS HECHO
            </h2>
          </div>

          {/* Subtitle */}
          <div 
            ref={sectionRefs.subtitle}
            className={`text-center mb-16 md:mb-20 transition-all duration-1000 delay-600 ${
              visibleSections.has('subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-light text-[#0A2259] uppercase tracking-wide leading-relaxed max-w-5xl mx-auto">
              ESPECIALMENTE PARA TI, EN DONDE LA ARMONÍA Y SERENIDAD HACEN UN AMBIENTE ÚNICO.
            </p>
          </div>

          {/* Arrow Animation */}
          <div 
            ref={sectionRefs.arrow}
            className={`flex justify-center transition-all duration-1000 delay-800 ${
              visibleSections.has('arrow') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#0A2259] flex items-center justify-center hover:bg-[#0A2259] hover:text-white transition-all duration-300 cursor-pointer group">
              <ChevronDown className="w-8 h-8 md:w-10 md:h-10 animate-bounce-slow group-hover:animate-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Demo Button */}
      <button
        onClick={() => setShowDiscountDemo(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group animate-pulse-subtle"
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