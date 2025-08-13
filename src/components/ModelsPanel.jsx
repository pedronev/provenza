import Lotes from "../assets/Lotes.png";
import Infonavit from "../assets/Infonavit.png";

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

              <div className="group bg-gradient-to-br from-white/95 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/50 relative overflow-hidden">
                {/* Lotes Header */}
                <div className="text-center pb-2 mb-4">
                  <h4
                    className="text-3xl md:text-4xl font-normal text-[#0A2259] uppercase tracking-wider mt-1"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    LOTES
                  </h4>
                </div>

                {/* Image */}
                <div className="relative mx-0 mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={Lotes}
                    alt="Lotes Provenza"
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Dimensiones */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[#0A2259]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                          />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-[#0A2259]">
                        7.5m × 17.5m
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        Dimensiones
                      </div>
                    </div>

                    {/* Precio */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[#0A2259]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-[#0A2259]">
                        $7,500
                      </div>
                      <div className="text-xs text-gray-600 uppercase">
                        mx por m²
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-around px-1 mb-6"
                  aria-label="Crédito Infonavit disponible"
                >
                  {/* bolita con el logo */}
                  <div className="shrink-0 w-9 h-9 rounded-full   flex items-center justify-center">
                    <img
                      src={Infonavit}
                      alt="Infonavit"
                      className="w-14 h-14 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* texto */}
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-[#E30613]">
                    Utiliza tu crédito Infonavit
                  </span>
                </div>

                {/* Nota */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
                  <p className="text-gray-600 text-xs leading-relaxed text-center">
                    <span className="text-gray-500">*</span>Algunas ubicaciones
                    pueden tener variaciones en sus medidas.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      scrollToSection("models");
                      setShowModelsPanel(false);
                    }}
                    className="flex-1 bg-[#0A2259] text-white py-3 px-4 rounded-full font-semibold uppercase tracking-wide hover:bg-[#1a3668] transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:cursor-pointer"
                  >
                    Ver Más
                  </button>
                  <button
                    onClick={() => {
                      const phoneNumber = "526677976941";
                      const message = encodeURIComponent(
                        `¡Hola! 👋 Me interesa información sobre los LOTES en Provenza Residencial. ¿Podrían proporcionarme más detalles? 🏗️`
                      );
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                    }}
                    className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-all duration-200 hover:scale-[1.05] shadow-lg hover:shadow-xl hover:cursor-pointer"
                    title="WhatsApp"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Título para las casas */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#0A2259] uppercase tracking-wide">
                Modelos de Casas
              </h4>
              <div className="w-16 h-0.5 bg-[#0A2259] mx-auto mt-2"></div>
            </div>

            {/* Models List (existente) */}
            {modelsData.map((model, index) => (
              <div
                key={model.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 animate-slide-in-right relative overflow-hidden"
                style={{ animationDelay: `${index * 150 + 150}ms` }}
              >
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
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                Descubre todos los detalles de nuestros modelos en promoción
              </p>
              <button
                onClick={() => {
                  scrollToSection("models");
                  setShowModelsPanel(false);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:cursor-pointer"
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
