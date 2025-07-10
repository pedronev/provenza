const ModelsPanel = ({
  showModelsPanel,
  setShowModelsPanel,
  modelsData,
  scrollToSection,
}) => {
  if (!showModelsPanel) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 animate-fade-in"
        onClick={() => setShowModelsPanel(false)}
      />
      <div className="fixed right-0 top-0 h-full bg-white shadow-2xl z-50 w-96 max-w-[90vw] transform transition-all duration-500 ease-out animate-slide-in-from-right">
        <div className="h-full overflow-y-auto">
          {/* Panel Header */}
          <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Nuestros Modelos</h3>
                  <p className="text-white/90 text-sm">
                    Encuentra tu hogar ideal
                  </p>
                </div>
                <button
                  onClick={() => setShowModelsPanel(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Promoción Banner */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-4 mb-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-center">
                    <div className="text-xs font-semibold text-red-100 uppercase tracking-wide mb-1">
                      🏠 CASAS DESDE
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-300">
                        2.8 MDP
                      </span>
                      <span className="text-xl text-red-200 line-through decoration-2">
                        3.3 MDP
                      </span>
                    </div>
                    <div className="bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs font-bold inline-block animate-pulse">
                      ¡PROMOCIÓN LIMITADA!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Models List */}
          <div className="p-6 space-y-6">
            {modelsData.map((model, index) => (
              <div
                key={model.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 animate-slide-in-right relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Promoción Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                    ¡OFERTA!
                  </div>
                </div>

                {/* Model Image */}
                <div className="relative rounded-xl overflow-hidden mb-4 group">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={`Modelo ${model.name}`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-white text-xs font-semibold bg-[#0A2259]/80 px-2 py-1 rounded-full">
                        Tour Virtual Disponible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Model Info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-[#0A2259] uppercase tracking-wide">
                        {model.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#0A2259]">
                        {model.area}
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">
                        Área Total
                      </div>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0A2259]">
                        {model.bedrooms}
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        Recámaras
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-300" />
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0A2259]">
                        {model.bathrooms}
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        Baños
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-300" />
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0A2259]">2</div>
                      <div className="text-xs text-gray-600 uppercase">
                        Niveles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="p-6 bg-gradient-to-r from-red-50 to-red-100 border-t border-red-200">
            {/* Información promocional adicional */}

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Descubre todos los detalles de nuestros modelos en promoción
              </p>
              <button
                onClick={() => {
                  scrollToSection("models");
                  setShowModelsPanel(false);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>Ver Todos los Modelos</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelsPanel;
