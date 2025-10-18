import { Facebook, Instagram } from "lucide-react";
import logoSvg from "../assets/logo.svg";
import TikTokIcon from "../assets/icons/TikTokIcon";
import { useState, useEffect } from "react";
import { fetchPromotions } from "../lib/sanity";

const Header = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  setShowModelsPanel,
}) => {
  const navigationItems = [
    { name: "UBICACIÓN", key: "location" },
    { name: "AMENIDADES", key: "gallery" },
    { name: "MODELOS", key: "models" },
    { name: "¿POR QUÉ PROVENZA?", key: "why" },
  ];
  const [promotions, setPromotions] = useState(null);
  useEffect(() => {
    fetchPromotions().then(setPromotions);
  }, []);

  const textoBoton = promotions?.textoBotonHeader || "PROMOCIONES";

  const socialLinks = [
    {
      href: "https://www.facebook.com/provenzaculiacan",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/provenzaculiacan/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@provenzaculiacan",
      icon: TikTokIcon,
      label: "TikTok",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A2259]/95 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-white py-3 md:py-4"
      }`}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={`w-6 h-0.5 ${
                  isScrolled ? "bg-white" : "bg-[#0A2259]"
                } transition-all duration-300 ${
                  mobileMenuOpen && index === 0
                    ? "rotate-45 translate-y-1.5"
                    : mobileMenuOpen && index === 1
                    ? "opacity-0"
                    : mobileMenuOpen && index === 2
                    ? "-rotate-45 -translate-y-1.5"
                    : ""
                }`}
              />
            ))}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.key)}
                className={`relative transition-all duration-300 font-normal text-sm lg:text-base tracking-wider uppercase group ${
                  isScrolled
                    ? "text-white hover:text-[#9CAFA2] py-2"
                    : "text-[#0A2259] hover:text-blue-700 py-3"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#9CAFA2]" : "bg-blue-700"
                  }`}
                />
              </button>
            ))}

            {/* Botón de Promociones - Desktop */}
            <button
              onClick={() => setShowModelsPanel(true)}
              className={`relative overflow-hidden px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 group ${
                isScrolled
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:shadow-xl"
                  : "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center space-x-2">
                <span className="animate-pulse">🔥</span>
                <span>{textoBoton}</span>
                <span className="animate-bounce">⚡</span>
              </div>
              {/* Efecto de brillo */}
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:left-full transition-all duration-700" />
            </button>
          </nav>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((socialLink) => {
              const IconComponent = socialLink.icon;
              return (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  className="w-8 h-8 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                  aria-label={socialLink.label}
                >
                  <IconComponent
                    className={`w-8 h-8 transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-[#9CAFA2]"
                        : "text-blue-950"
                    }`}
                  />
                </a>
              );
            })}
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
            {navigationItems.map((item) => (
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

            {/* Social Icons Mobile */}
            <div className="flex items-center space-x-3 pt-4">
              {socialLinks.map((socialLink) => {
                const IconComponent = socialLink.icon;
                return (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    className={`w-8 h-8 rounded-none flex items-center justify-center transition-colors ${
                      isScrolled
                        ? "bg-white/20 hover:bg-white/30"
                        : "bg-[#0A2259] hover:bg-blue-800"
                    }`}
                    aria-label={socialLink.label}
                  >
                    <IconComponent
                      className={`w-4 h-4 ${
                        isScrolled ? "text-white" : "text-white"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Botón de Promociones - Mobile */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setShowModelsPanel(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  <span className="animate-pulse">🔥</span>
                  <span>VER PROMOCIONES</span>
                  <span className="animate-bounce">⚡</span>
                </div>
                {/* Efecto de brillo móvil */}
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:left-full transition-all duration-700" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
