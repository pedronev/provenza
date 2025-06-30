const PropertyDetailsSection = ({ detailsRef, visibleSections }) => {
  return (
    <section 
      ref={detailsRef}
      className={`py-16 md:py-20 bg-[#f5f3f0] relative overflow-hidden transition-all duration-1000 ${
        visibleSections.has('details') ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
            visibleSections.has('details') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm md:text-base font-normal tracking-[0.3em] text-[#0A2259] uppercase opacity-80">
              UN NUEVO ESPACIO PARA VIVIR
            </span>
          </div>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight mb-4"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            DESCUBRE TU LUGAR IDEAL
          </h2>
          <div>
            <span className="text-xs md:text-sm font-normal tracking-[0.2em] text-[#0A2259] uppercase opacity-70">
              TODO ESTÁ EN LOS DETALLES
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Property Details */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              visibleSections.has('details') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Land Area */}
            <div className="group">
              <div className="flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white/95 transition-all duration-500 hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#0A2259] flex items-center justify-center group-hover:bg-[#0A2259] transition-all duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0A2259] mb-3">
                    4166 m²
                  </h3>
                  <p className="text-sm md:text-base text-[#0A2259] opacity-80 tracking-wide">
                    Para convivir con la naturaleza.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction Area */}
            <div className="group">
              <div className="flex items-start space-x-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white/95 transition-all duration-500 hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#0A2259] flex items-center justify-center group-hover:bg-[#0A2259] transition-all duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0A2259] mb-3">
                    134 m²
                  </h3>
                  <p className="text-sm md:text-base text-[#0A2259] opacity-80 tracking-wide">
                    Para que lleves a cabo tus mejores planes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div 
            className={`lg:pl-8 transition-all duration-1000 delay-600 ${
              visibleSections.has('details') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0A2259] to-[#1a3668] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#9CAFA2] mb-6"></div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-wide leading-relaxed">
                  HOGARES DE GRAN TAMAÑO, HECHOS DE MATERIAL DE EXCELENTE CALIDAD, CON LA MEJOR DISTRIBUCIÓN DE ESPACIOS.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetailsSection