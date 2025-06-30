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

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-pulse-subtle">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default FooterSection