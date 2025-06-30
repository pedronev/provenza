import { Check } from "lucide-react"

const WhyProvenzaSection = ({ whyRef, visibleSections }) => {
  return (
    <section 
      ref={whyRef}
      className={`py-12 md:py-16 bg-[#9CAFA2] transition-all duration-1000 ${
        visibleSections.has('why') ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Disclaimer Text */}
        <div 
          className={`text-center mb-8 md:mb-10 transition-all duration-1000 delay-200 ${
            visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xs text-[#0A2259] opacity-70 max-w-5xl mx-auto leading-relaxed tracking-wide">
            Lo aquí reflejado no debe considerarse como definitivo, su propósito es meramente ilustrativo. El desarrollador se reserva el derecho a realizar cambios en los materiales, especificaciones y diseño sin previo aviso.
          </p>
        </div>

        {/* Main Title */}
        <div 
          className={`text-center mb-12 md:mb-14 transition-all duration-1000 delay-400 ${
            visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            ¿POR QUÉ PROVENZA<span className="text-2xl md:text-4xl lg:text-5xl align-super">®</span>?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">
          {/* Gran Experiencia de Compra */}
          <div 
            className={`flex items-start space-x-6 transition-all duration-1000 delay-600 ${
              visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#0A2259] rounded-full flex items-center justify-center group hover:bg-[#0A2259] transition-all duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 pt-2">
              <h3 
                className="text-xl md:text-2xl font-normal text-[#0A2259] uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                GRAN EXPERIENCIA<br />DE COMPRA
              </h3>
              
              <p className="text-sm text-[#0A2259] leading-relaxed tracking-wide">
                ESTAMOS CONTIGO DE PRINCIPIO A FIN EN TU PROCESO DE COMPRA.
              </p>
            </div>
          </div>

          {/* Excelente Ubicación */}
          <div 
            className={`flex items-start space-x-6 transition-all duration-1000 delay-700 ${
              visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#0A2259] rounded-full flex items-center justify-center group hover:bg-[#0A2259] transition-all duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 pt-2">
              <h3 
                className="text-xl md:text-2xl font-normal text-[#0A2259] uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                EXCELENTE<br />UBICACIÓN
              </h3>
              
              <p className="text-sm text-[#0A2259] leading-relaxed tracking-wide">
                DESARROLLO UBICADO AL INICIO DEL CORREDOR TURÍSTICO A IMALA.
              </p>
            </div>
          </div>

          {/* Inversión Protegida */}
          <div 
            className={`flex items-start space-x-6 transition-all duration-1000 delay-800 ${
              visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#0A2259] rounded-full flex items-center justify-center group hover:bg-[#0A2259] transition-all duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 pt-2">
              <h3 
                className="text-xl md:text-2xl font-normal text-[#0A2259] uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                INVERSIÓN PROTEGIDA
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#0A2259] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#0A2259] leading-relaxed">
                    Excelente calidad de construcción.
                  </span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-[#0A2259] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#0A2259] leading-relaxed">
                    Precios competitivos.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusividad */}
          <div 
            className={`flex items-start space-x-6 transition-all duration-1000 delay-900 ${
              visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#0A2259] rounded-full flex items-center justify-center group hover:bg-[#0A2259] transition-all duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 pt-2">
              <h3 
                className="text-xl md:text-2xl font-normal text-[#0A2259] uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                EXCLUSIVIDAD
              </h3>
              
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-[#0A2259] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#0A2259] leading-relaxed">
                  Privacidad, seguridad y exclusividad en tu nuevo hogar.
                </span>
              </div>
            </div>
          </div>

          {/* Amenidades - Centered in the grid */}
          <div 
            className={`flex items-start space-x-6 md:col-span-2 md:justify-center transition-all duration-1000 delay-1000 ${
              visibleSections.has('why') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#0A2259] rounded-full flex items-center justify-center group hover:bg-[#0A2259] transition-all duration-500">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0A2259] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            
            <div className=" pt-2 max-w-md">
              <h3 
                className="text-xl md:text-2xl font-normal text-[#0A2259] uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                AMENIDADES
              </h3>
              
              <p className="text-sm text-[#0A2259] leading-relaxed tracking-wide">
                QUE ELEVAN TU CALIDAD DE VIDA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyProvenzaSection