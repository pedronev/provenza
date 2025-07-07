import logoSvg from '../assets/logo.svg'

const FooterSection = ({ footerRef, visibleSections }) => {
  return (
    <footer 
      ref={footerRef}
      className={`bg-[#e8e4df] py-12 md:py-14 transition-all duration-1000 ${
        visibleSections.has('footer') ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div 
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Top Section - Logos and Company Info */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-4">
            {/* Left - Provenza Logo and Eternia Info */}
            <div className="text-center md:text-left">
              {/* Provenza Logo */}
              <div className="mb-6">
                <img
                  src={logoSvg}
                  alt="Provenza Logo"
                  className="h-10 md:h-12 mx-auto md:mx-0 mb-3"
                />
                <div className="text-xs tracking-[0.2em] text-[#0A2259] uppercase opacity-70">
                  RESIDENCIAL
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-6">
                <div className="text-sm text-[#0A2259] font-medium mb-3 tracking-wide">
                  ES UN PROYECTO DE:
                </div>
                
                {/* Eternia Logo */}
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-7 h-7 bg-[#2D9B8C] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-[#2D9B8C] tracking-wide">
                      ETERNIA
                    </div>
                    <div className="text-xs tracking-[0.15em] text-[#2D9B8C] uppercase">
                      DESARROLLOS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Company Description */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <span className="text-[#0A2259] text-base md:text-lg tracking-wide">
                  EN{" "}
                  <span className="text-[#2D9B8C] font-semibold">
                    ETERNIA DESARROLLOS
                  </span>
                  <span className="text-xs align-super">®</span>{" "}
                  LA
                </span>
              </div>
              <div className="text-[#0A2259] text-base md:text-lg leading-relaxed tracking-wide mb-4">
                EXPERIENCIA RESPALDA NUESTROS PROYECTOS, CONTAMOS CON MÁS DE 30 AÑOS EN EL GIRO INMOBILIARIO.
              </div>
              <div className="text-sm text-[#0A2259] underline cursor-pointer hover:text-[#2D9B8C] transition-colors">
                AVISO DE PRIVACIDAD
              </div>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div 
            className={`grid md:grid-cols-3 gap-6 md:gap-8 border-t border-[#0A2259]/20 pt-8 transition-all duration-1000 delay-400 ${
              visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Address */}
            <div>
              <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                DIRECCIÓN
              </h4>
              <p className="text-[#0A2259] text-sm leading-relaxed mb-3">
                ESTADO DE VERACRUZ 1440, LAS QUINTAS, 80060<br />
                CULIACÁN ROSALES, SIN.
              </p>
              <div className="text-[#0A2259] text-sm underline cursor-pointer hover:text-[#2D9B8C] transition-colors">
                VER CÓMO LLEGAR
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                TELÉFONO
              </h4>
              <p className="text-[#0A2259] text-lg font-medium mb-4">
                (667) 172 1458
              </p>
              <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                HORARIOS DE ATENCIÓN
              </h4>
              <p className="text-[#0A2259] text-sm">
                LUN - VIE 8:30 AM A 6:00 PM
              </p>
            </div>

            {/* Website */}
            <div>
              <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                SITIO WEB
              </h4>
              <p className="text-[#0A2259] text-sm underline cursor-pointer hover:text-[#2D9B8C] transition-colors">
                ETERNADESARROLLOS.MX
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div 
            className={`border-t border-[#0A2259]/20 pt-6 mt-8 text-center transition-all duration-1000 delay-600 ${
              visibleSections.has('footer') ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xs text-[#0A2259] opacity-70 tracking-wide">
              ROK DISTRIBUCIONES SA DE CV, TODOS LOS DERECHOS RESERVADOS. 2024.
            </p>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default FooterSection