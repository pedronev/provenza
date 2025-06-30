import { MapPin, Clock, Phone } from "lucide-react"

const LocationSection = ({ locationRef, visibleSections }) => {
  return (
    <section 
      ref={locationRef}
      className={`py-16 md:py-20 bg-white transition-all duration-1000 ${
        visibleSections.has('location') ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Title - Centered */}
        <div 
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 delay-200 ${
            visibleSections.has('location') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight mb-6"
            style={{ fontFamily: "'Times New Roman', serif" }}
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
              visibleSections.has('location') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0A2259] to-[#1a3668] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#9CAFA2] mb-6"></div>
                
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  Una zona privilegiada que cuenta con vías rápidas de conexión. Muy cerca de los puntos de interés y zonas comerciales principales de la ciudad.
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
                        LUN - DOM 8:00 AM A 8:00 PM
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
                        (667) 411 55 57
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
              visibleSections.has('location') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6 h-full flex flex-col">
              {/* Aerial View Image */}
              <div className="relative flex-1">
                <div className="aspect-[5/2] rounded-2xl overflow-hidden shadow-xl h-full">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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

              {/* Map Placeholder */}
              <div className="relative flex-1">
                <div className="aspect-[5/2] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-50 to-blue-50 h-full">
                  {/* Grid Pattern for Map Look */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-10 grid-rows-4 h-full w-full">
                      {[...Array(40)].map((_, i) => (
                        <div key={i} className="border border-[#0A2259]/10"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Streets Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 right-0 h-1 bg-[#0A2259]/20"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-1 bg-[#0A2259]/20"></div>
                    <div className="absolute left-1/5 top-0 bottom-0 w-1 bg-[#0A2259]/20"></div>
                    <div className="absolute left-2/5 top-0 bottom-0 w-1 bg-[#0A2259]/20"></div>
                    <div className="absolute left-3/5 top-0 bottom-0 w-1 bg-[#0A2259]/20"></div>
                    <div className="absolute left-4/5 top-0 bottom-0 w-1 bg-[#0A2259]/20"></div>
                  </div>
                  
                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Location Label */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg">
                      <p className="text-xs font-semibold text-[#0A2259] whitespace-nowrap">
                        PROVENZA RESIDENCIAL
                      </p>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Coordinates Display */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                    <p className="text-xs text-[#0A2259] font-mono">
                      24°50'05.3"N 107°21'47.6"W
                    </p>
                  </div>
                  
                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
                    <button className="block w-8 h-8 bg-white hover:bg-gray-50 border-b border-gray-100 items-center justify-center text-[#0A2259] font-bold text-sm transition-colors">
                      +
                    </button>
                    <button className="block w-8 h-8 bg-white hover:bg-gray-50 items-center justify-center text-[#0A2259] font-bold text-sm transition-colors">
                      −
                    </button>
                  </div>
                </div>
                
                {/* Map Footer */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <p className="text-xs text-[#0A2259] opacity-70 bg-white px-3 py-1 rounded-full shadow-sm">
                    Mapa interactivo próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection