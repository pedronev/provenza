import React, { useState } from "react";

const DiscountBanner = () => {
  const [activeVariant, setActiveVariant] = useState(0);

  const bannerVariants = [
    {
      title: "CASAS DESDE",
      oldPrice: "3.3 MDP",
      newPrice: "2.8 MDP",
      savings: "$500,000 MXN",
      bgGradient: "from-[#0A2259] to-[#1a3668]",
      accentColor: "[#9CAFA2]",
    },
    {
      title: "APARTAMENTOS DESDE",
      oldPrice: "2.5 MDP",
      newPrice: "2.1 MDP",
      savings: "$400,000 MXN",
      bgGradient: "from-purple-800 to-purple-900",
      accentColor: "purple-300",
    },
    {
      title: "TOWNHOUSES DESDE",
      oldPrice: "4.2 MDP",
      newPrice: "3.6 MDP",
      savings: "$600,000 MXN",
      bgGradient: "from-emerald-800 to-emerald-900",
      accentColor: "emerald-300",
    },
  ];

  const currentVariant = bannerVariants[activeVariant];

  return (
    <div className="space-y-8">
      {/* Selector de variantes */}
      <div className="flex justify-center space-x-4 mb-8">
        {bannerVariants.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveVariant(index)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeVariant === index
                ? "bg-[#0A2259] text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Variante {index + 1}
          </button>
        ))}
      </div>

      {/* Banner principal */}
      <div
        className={`relative w-full max-w-4xl mx-auto bg-gradient-to-br ${currentVariant.bgGradient} rounded-3xl overflow-hidden shadow-2xl transition-all duration-500`}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div
          className={`absolute bottom-0 left-0 w-48 h-48 bg-${currentVariant.accentColor}/20 rounded-full translate-y-1/2 -translate-x-1/2`}
        ></div>

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              ¡OFERTA ESPECIAL!
            </div>

            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              PROVENZA
            </h1>
            <p className="text-white/90 text-lg mb-2">RESIDENCIAL</p>
          </div>

          {/* Main content */}
          <div className="text-center mb-8">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
              {currentVariant.title}
            </h2>

            {/* Price section with strikethrough */}
            <div className="mb-6">
              {/* Old price - strikethrough con efecto más visible */}
              <div className="relative inline-block mb-4">
                <span className="text-white/70 text-3xl md:text-5xl font-bold relative">
                  {currentVariant.oldPrice}
                  {/* Líneas tachadas más prominentes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-2 bg-red-500 transform rotate-12 opacity-90"></div>
                    <div className="w-full h-2 bg-red-600 transform -rotate-12 absolute opacity-90"></div>
                  </div>
                  {/* Efecto de "ANTES" */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      ANTES
                    </span>
                  </div>
                </span>
              </div>

              {/* New price con efecto "AHORA" */}
              <div className="relative">
                <div
                  className={`text-${currentVariant.accentColor} text-4xl md:text-6xl font-bold animate-pulse`}
                >
                  {currentVariant.newPrice}
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-bounce">
                    AHORA
                  </span>
                </div>
              </div>
            </div>

            {/* Discount badge más llamativo */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-xl font-bold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              AHORRA {currentVariant.savings}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center text-white">
              <div className="text-lg font-semibold">VIVE CERCA</div>
              <div className="text-sm text-white/80">DE TODO</div>
            </div>
            <div className="text-center text-white border-l border-r border-white/30 md:border-l md:border-r md:border-white/30">
              <div className="text-lg font-semibold">POR LA CARRETERA</div>
              <div className="text-sm text-white/80">A IMALA</div>
            </div>
            <div className="text-center text-white">
              <div className="text-lg font-semibold">A 2 MINUTOS DEL</div>
              <div className="text-sm text-white/80">NUEVO MALECÓN</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`bg-${currentVariant.accentColor} text-[#0A2259] px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              VER MODELOS
            </button>
            <button className="bg-white text-[#0A2259] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              AGENDAR VISITA
            </button>
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              * APLICAN RESTRICCIONES * IMAGEN ILUSTRATIVA
            </p>
            <p className="text-white/60 text-xs mt-2">
              Oferta válida hasta agotar existencias. Consulta términos y
              condiciones.
            </p>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-4 right-4">
          <div
            className={`w-3 h-3 bg-${currentVariant.accentColor} rounded-full animate-ping`}
          ></div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Banner compacto alternativo */}
      <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">CASAS DESDE</h3>
            <div className="flex items-center space-x-4">
              <span className="relative text-xl text-white/70">
                3.3 MDP
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-1 bg-red-500 transform rotate-12"></div>
                </div>
              </span>
              <span className="text-3xl font-bold text-[#9CAFA2]">2.8 MDP</span>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold mb-2">
              AHORRA $500K
            </div>
            <button className="bg-[#9CAFA2] text-[#0A2259] px-6 py-2 rounded-lg font-semibold hover:bg-[#8a9d8f] transition-colors">
              ¡APROVECHA!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
