import logoProvenza from "../assets/logo_provenza_footer.svg";
import logoEterna from "../assets/logo_eterna_footer.svg";

const FooterSection = ({ footerRef, visibleSections }) => {
  return (
    <footer
      ref={footerRef}
      className={`bg-[#e8e4df] py-12 md:py-14 transition-all duration-1000 ${
        visibleSections.has("footer") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            visibleSections.has("footer")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Top Section - Logos and Company Info */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 mb-4 items-center md:items-start">
            {/* Left - Logos, centering, more space */}
            <div className="flex-1 flex flex-col items-center md:items-center">
              <img
                src={logoProvenza}
                alt="Provenza Logo"
                className="h-16 md:h-24 mx-auto mb-3"
                style={{ minHeight: 56 }}
              />
              {/* Línea divisora y texto */}
              <div className="flex items-center w-full justify-center mb-6">
                <span className="border-t border-[#0A2259] flex-1 mx-3" />
                <span className="text-[#0A2259] font-medium text-base md:text-lg px-2">
                  ES UN PROYECTO DE:
                </span>
                <span className="border-t border-[#0A2259] flex-1 mx-3" />
              </div>
              {/* Logo Eterna */}
              <img
                src={logoEterna}
                alt="Eterna Desarrollos Logo"
                className="h-14 md:h-20 mx-auto"
                style={{ minHeight: 52 }}
              />
            </div>
            {/* Right - Company Description */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <span className="text-[#0A2259] text-lg md:text-2xl tracking-wide font-semibold">
                  EN{" "}
                  <span className="text-[#2D9B8C] font-bold">
                    ETERNA DESARROLLOS
                  </span>
                  <span className="text-xs align-super">®</span>
                </span>
              </div>
              <div className="text-[#0A2259] text-base md:text-xl leading-relaxed tracking-wide mb-4 font-normal">
                LA EXPERIENCIA RESPALDA NUESTROS PROYECTOS, CONTAMOS CON MÁS DE
                30 AÑOS EN EL GIRO INMOBILIARIO.
              </div>
              <div className="text-sm text-[#0A2259] underline cursor-pointer hover:text-[#2D9B8C] transition-colors">
                AVISO DE PRIVACIDAD
              </div>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div
            className={`grid md:grid-cols-3 gap-6 md:gap-8 border-t border-[#0A2259]/20 pt-8 transition-all duration-1000 delay-400 ${
              visibleSections.has("footer")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Address */}
            <div>
              <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                DIRECCIÓN
              </h4>
              <p className="text-[#0A2259] text-sm leading-relaxed mb-3">
                ESTADO DE VERACRUZ 1440, LAS QUINTAS, 80060
                <br />
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
              visibleSections.has("footer") ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-xs text-[#0A2259] opacity-70 tracking-wide">
              ROK DISTRIBUCIONES SA DE CV, TODOS LOS DERECHOS RESERVADOS. 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
