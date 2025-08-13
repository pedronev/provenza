import React, { useState } from 'react';
import logoProvenza from "../assets/logo_provenza_footer.svg";
import logoEterna from "../assets/logo_eterna_footer.svg";

const FooterSection = ({ footerRef, visibleSections }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Función para abrir Google Maps con la dirección
  const handleDirections = () => {
    const address = "Estado de Veracruz 1440, Las Quintas, 80060 Culiacán Rosales, Sinaloa, México";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Función para llamar al teléfono
  const handlePhoneCall = () => {
    window.location.href = 'tel:+526671721458';
  };

  // Función para abrir el sitio web
  const handleWebsiteClick = () => {
    window.open('https://eternadesarrollos.mx', '_blank');
  };

  // Función para mostrar modal de aviso de privacidad
  const handlePrivacyNotice = () => {
    window.open('https://eternadesarrollos.mx/aviso-de-privacidad/', '_blank');
  };

  // Modal de Aviso de Privacidad
  const PrivacyModal = () => {
    if (!showPrivacyModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
          {/* Header del Modal */}
          <div className="bg-[#0A2259] text-white px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">AVISO DE PRIVACIDAD</h2>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Contenido del Modal */}
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <div className="space-y-6 text-sm">
              
              {/* Identidad y Domicilio */}
              <section>
                <h3 className="text-lg font-semibold text-[#0A2259] mb-3 border-b border-[#2D9B8C] pb-1">
                  IDENTIDAD Y DOMICILIO DEL RESPONSABLE
                </h3>
                <div className="bg-gray-50 p-4 rounded space-y-1">
                  <p><strong>Razón Social:</strong> ROK DISTRIBUCIONES S.A. DE C.V.</p>
                  <p><strong>Nombre Comercial:</strong> Eterna Desarrollos</p>
                  <p><strong>Domicilio:</strong> Estado de Veracruz 1440, Las Quintas, C.P. 80060, Culiacán Rosales, Sinaloa</p>
                  <p><strong>Teléfono:</strong> (667) 172 1458</p>
                  <p><strong>Web:</strong> eternadesarrollos.mx</p>
                </div>
              </section>

              {/* Finalidades */}
              <section>
                <h3 className="text-lg font-semibold text-[#0A2259] mb-3 border-b border-[#2D9B8C] pb-1">
                  FINALIDADES DEL TRATAMIENTO
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-[#0A2259] mb-2">Finalidades Primarias:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Identificación y contacto con clientes e inversionistas</li>
                      <li>Elaboración y seguimiento de contratos de compraventa</li>
                      <li>Gestión de pagos y facturación</li>
                      <li>Cumplimiento de obligaciones fiscales y legales</li>
                      <li>Entrega de inmuebles y trámites notariales</li>
                      <li>Servicio al cliente y atención post-venta</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-semibold text-[#0A2259] mb-2">Finalidades Secundarias (opcionales):</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Envío de información promocional sobre nuevos proyectos</li>
                      <li>Invitaciones a eventos y presentaciones</li>
                      <li>Estudios de mercado y encuestas</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Datos Recabados */}
              <section>
                <h3 className="text-lg font-semibold text-[#0A2259] mb-3 border-b border-[#2D9B8C] pb-1">
                  DATOS PERSONALES RECABADOS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#0A2259] mb-1">Identificación:</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Nombre completo, RFC, CURP</li>
                      <li>Fecha de nacimiento, nacionalidad</li>
                      <li>Estado civil, identificación oficial</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2259] mb-1">Contacto:</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Domicilio particular</li>
                      <li>Teléfonos, correo electrónico</li>
                      <li>Redes sociales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2259] mb-1">Laborales:</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Ocupación, empresa</li>
                      <li>Ingresos, referencias</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2259] mb-1">Financieros:</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Información bancaria</li>
                      <li>Historial crediticio</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Derechos ARCO */}
              <section>
                <h3 className="text-lg font-semibold text-[#0A2259] mb-3 border-b border-[#2D9B8C] pb-1">
                  SUS DERECHOS (ARCO)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#2D9B8C] bg-opacity-10 p-3 rounded text-center">
                    <h4 className="font-semibold text-[#0A2259] text-sm">🔍 ACCEDER</h4>
                    <p className="text-xs">Conocer sus datos</p>
                  </div>
                  <div className="bg-[#2D9B8C] bg-opacity-10 p-3 rounded text-center">
                    <h4 className="font-semibold text-[#0A2259] text-sm">✏️ RECTIFICAR</h4>
                    <p className="text-xs">Corregir datos</p>
                  </div>
                  <div className="bg-[#2D9B8C] bg-opacity-10 p-3 rounded text-center">
                    <h4 className="font-semibold text-[#0A2259] text-sm">🗑️ CANCELAR</h4>
                    <p className="text-xs">Eliminar datos</p>
                  </div>
                  <div className="bg-[#2D9B8C] bg-opacity-10 p-3 rounded text-center">
                    <h4 className="font-semibold text-[#0A2259] text-sm">🚫 OPONERSE</h4>
                    <p className="text-xs">Limitar uso</p>
                  </div>
                </div>
                <div className="mt-3 bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-[#0A2259] mb-1">Contacto para ejercer derechos:</h4>
                  <p className="text-xs">📧 privacidad@eternadesarrollos.mx</p>
                  <p className="text-xs">📞 (667) 172 1458</p>
                  <p className="text-xs">📍 Estado de Veracruz 1440, Las Quintas, Culiacán</p>
                </div>
              </section>

              {/* Transferencias */}
              <section>
                <h3 className="text-lg font-semibold text-[#0A2259] mb-3 border-b border-[#2D9B8C] pb-1">
                  TRANSFERENCIAS DE DATOS
                </h3>
                <p className="text-xs mb-2">Sus datos pueden ser compartidos con:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Notarios públicos para formalización de operaciones</li>
                  <li>Instituciones financieras para créditos</li>
                  <li>Autoridades fiscales por obligaciones legales</li>
                  <li>Proveedores de servicios necesarios</li>
                </ul>
              </section>

              {/* Fecha */}
              <div className="text-center text-xs text-gray-500 pt-4 border-t">
                <p><strong>Última actualización:</strong> Enero 2025</p>
                <p>Cumple con la Ley Federal de Protección de Datos Personales</p>
              </div>
            </div>
          </div>

          {/* Footer del Modal */}
          <div className="bg-gray-100 px-6 py-3 flex justify-center">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="bg-[#0A2259] text-white px-6 py-2 rounded hover:bg-[#2D9B8C] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
                <button
                  onClick={handlePrivacyNotice}
                  className="text-sm text-[#0A2259] underline cursor-pointer hover:text-[#2D9B8C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D9B8C] focus:ring-opacity-50 rounded"
                >
                  AVISO DE PRIVACIDAD
                </button>
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
                <button
                  onClick={handleDirections}
                  className="text-[#0A2259] text-sm underline cursor-pointer hover:text-[#2D9B8C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D9B8C] focus:ring-opacity-50 rounded"
                >
                  VER CÓMO LLEGAR
                </button>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-[#0A2259] font-semibold text-sm uppercase tracking-wider mb-3">
                  TELÉFONO
                </h4>
                <button
                  onClick={handlePhoneCall}
                  className="text-[#0A2259] text-lg font-medium mb-4 hover:text-[#2D9B8C] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D9B8C] focus:ring-opacity-50 rounded block"
                >
                  (667) 172 1458
                </button>
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
                <button
                  onClick={handleWebsiteClick}
                  className="text-[#0A2259] text-sm underline cursor-pointer hover:text-[#2D9B8C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D9B8C] focus:ring-opacity-50 rounded"
                >
                  ETERNADESARROLLOS.MX
                </button>
              </div>
            </div>

            {/* Bottom Line */}
            <div
              className={`border-t border-[#0A2259]/20 pt-6 mt-8 text-center transition-all duration-1000 delay-600 ${
                visibleSections.has("footer") ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xs text-[#0A2259] opacity-70 tracking-wide">
                ROK DISTRIBUCIONES SA DE CV, TODOS LOS DERECHOS RESERVADOS. 2025.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Aviso de Privacidad */}
      <PrivacyModal />
    </>
  );
};

export default FooterSection;