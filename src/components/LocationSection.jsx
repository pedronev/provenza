import { MapPin, Clock, Phone } from "lucide-react";
import image from "../assets/aerea.jpg";

const LocationSection = ({ locationRef, visibleSections }) => {
  return (
    <section
      ref={locationRef}
      className={`py-16 md:py-20 bg-white transition-all duration-1000 ${
        visibleSections.has("location") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Title - Centered */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 delay-200 ${
            visibleSections.has("location")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight mb-6"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            DESCUBRE TU CAMINO
          </h2>

          <div className="w-20 h-1 bg-[#0A2259] mx-auto mb-6"></div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#0A2259] uppercase tracking-wide">
            LA UBICACIÓN QUE NECESITAS
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left Side - Description */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-400 ${
              visibleSections.has("location")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-br from-[#0A2259] to-[#1a3668] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#9CAFA2] mb-6"></div>

                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  Una zona privilegiada que cuenta con vías rápidas de conexión.
                  Muy cerca de los puntos de interés y zonas comerciales
                  principales de la ciudad.
                </p>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Office Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 opacity-90">
                        HORARIOS DE ATENCIÓN
                      </h4>
                      <p className="text-white text-lg font-medium">
                        LUN - DOM 9:00 AM A 7:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 opacity-90">
                        TELÉFONO DE VENTAS
                      </h4>
                      <p className="text-white text-xl font-medium">
                        (667) 797 69 41
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-600 ${
              visibleSections.has("location")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 h-full flex flex-col">
              {/* Aerial View Image */}
              <div className="relative flex-1">
                <div className="aspect-[5/2] rounded-2xl overflow-hidden shadow-xl h-full">
                  <img
                    src={image}
                    alt="Vista aérea del desarrollo Provenza"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Image Label */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                    <p className="text-sm font-semibold text-[#0A2259]">
                      Vista Aérea del Desarrollo
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div className="relative flex-1">
                <div className="aspect-[5/2] rounded-2xl overflow-hidden shadow-xl h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8414229734485!2d-107.36675888736215!3d24.835096077853777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd98d36c2c355%3A0x5e3f72bbad49bced!2sProvenza%20Residencial!5e0!3m2!1sen!2smx!4v1752042198502!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Provenza Residencial"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
