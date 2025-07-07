import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Home, Car, Bath, Square, Layers } from "lucide-react"

const ModelsSection = ({ modelsRef, visibleSections }) => {
  const [selectedModel, setSelectedModel] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const models = [
    {
      id: 1,
      name: "ROSA",
      area: "155 M2",
      bedrooms: "3",
      bathrooms: "2 1/2",
      dimensions: "6.70m x 17m",
      levels: "2",
      parking: "2 AUTOS",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Encuentra el equilibrio y la dulzura en cada rincón de tu hogar. Este modelo de dos niveles toma su nombre y su inspiración por su belleza y elegancia.",
      features: [
        "COMEDOR",
        "COCINA", 
        "SALA",
        "BALCÓN EN FACHADA",
        "PASILLO LATERAL",
        "SALA DE TV",
        "WALK IN CLOSET Y BAÑO COMPLETO EN RECÁMARA PRINCIPAL"
      ]
    },
    {
      id: 2,
      name: "LIRIO",
      area: "169 M2",
      bedrooms: "3",
      bathrooms: "2 1/2",
      dimensions: "7.50m x 17m",
      levels: "2",
      parking: "2 AUTOS",
      mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Elegancia y sofisticación en cada detalle. Un modelo que combina funcionalidad con un diseño contemporáneo excepcional.",
      features: [
        "COMEDOR AMPLIO",
        "COCINA INTEGRAL", 
        "SALA PRINCIPAL",
        "TERRAZA TECHADA",
        "JARDÍN FRONTAL",
        "ESTUDIO/OFICINA",
        "MASTER SUITE CON VESTIDOR"
      ]
    },
    {
      id: 3,
      name: "MALVA",
      area: "185 M2",
      bedrooms: "3",
      bathrooms: "3 1/2",
      dimensions: "8.00m x 17m",
      levels: "2",
      parking: "2 AUTOS",
      mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "El modelo más amplio y lujoso de nuestra colección. Diseñado para familias que buscan el máximo confort y espacios generosos.",
      features: [
        "COMEDOR DE LUJO",
        "COCINA GOURMET", 
        "DOBLE SALA",
        "BALCÓN PANORÁMICO",
        "PATIO TRASERO",
        "FAMILY ROOM",
        "SUITE PRINCIPAL CON JACUZZI"
      ]
    }
  ]

  const openModal = (model) => {
    setSelectedModel(model)
    setModalImageIndex(0)
  }

  const closeModal = () => {
    setSelectedModel(null)
    setModalImageIndex(0)
  }

  const nextImage = () => {
    if (selectedModel) {
      setModalImageIndex((prev) => (prev + 1) % selectedModel.images.length)
    }
  }

  const prevImage = () => {
    if (selectedModel) {
      setModalImageIndex((prev) => (prev - 1 + selectedModel.images.length) % selectedModel.images.length)
    }
  }

  return (
    <section 
      ref={modelsRef}
      className="py-16 md:py-20 bg-[#f5f3f0]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight mb-6"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            NUESTROS MODELOS
          </h2>
          
          <div className="w-20 h-1 bg-[#0A2259] mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-[#0A2259] opacity-80 max-w-3xl mx-auto leading-relaxed">
            Descubre la variedad de diseños arquitectónicos que tenemos para ti. Cada modelo está pensado para brindar el máximo confort y funcionalidad.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {models.map((model, index) => (
            <div
              key={model.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              {/* Model Header */}
              <div className="p-6 pb-4 text-center">
                <span className="text-sm font-medium text-[#0A2259] opacity-70 uppercase tracking-wider">
                  MODELO
                </span>
                <h3 
                  className="text-3xl md:text-4xl font-normal text-[#0A2259] uppercase tracking-wider mt-1"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  {model.name}
                </h3>
              </div>

              {/* Image */}
              <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={model.mainImage}
                  alt={`Modelo ${model.name}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Specifications */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Area */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                      <Square className="w-5 h-5 text-[#0A2259]" />
                    </div>
                    <div className="text-lg font-bold text-[#0A2259]">{model.area}</div>
                  </div>

                  {/* Bedrooms */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                      <Home className="w-5 h-5 text-[#0A2259]" />
                    </div>
                    <div className="text-lg font-bold text-[#0A2259]">{model.bedrooms}</div>
                  </div>

                  {/* Bathrooms */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                      <Bath className="w-5 h-5 text-[#0A2259]" />
                    </div>
                    <div className="text-lg font-bold text-[#0A2259]">{model.bathrooms}</div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openModal(model)}
                  className="w-full bg-[#0A2259] text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wide hover:bg-[#1a3668] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <span className="text-sm font-medium text-[#0A2259] opacity-70 uppercase tracking-wider">
                  MODELO
                </span>
                <h3 
                  className="text-3xl font-normal text-[#0A2259] uppercase tracking-wider"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  {selectedModel.name}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#0A2259]" />
              </button>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 88px)' }}>
              <div className="grid lg:grid-cols-2 gap-8 p-6">
                {/* Left Side - Specifications */}
                <div className="space-y-6">
                  {/* Main Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Square className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">ÁREA</div>
                      <div className="text-xl font-bold text-[#0A2259]">{selectedModel.area}</div>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Home className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">RECÁMARAS</div>
                      <div className="text-xl font-bold text-[#0A2259]">{selectedModel.bedrooms}</div>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Bath className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">BAÑOS</div>
                      <div className="text-xl font-bold text-[#0A2259]">{selectedModel.bathrooms}</div>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Layers className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">NIVELES</div>
                      <div className="text-xl font-bold text-[#0A2259]">{selectedModel.levels}</div>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Square className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">MEDIDAS</div>
                      <div className="text-sm font-bold text-[#0A2259]">{selectedModel.dimensions}</div>
                    </div>

                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Car className="w-6 h-6 text-[#0A2259]" />
                      </div>
                      <div className="text-sm text-[#0A2259] opacity-70 uppercase tracking-wide mb-1">COCHERA</div>
                      <div className="text-sm font-bold text-[#0A2259]">{selectedModel.parking}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-[#0A2259] mb-4 uppercase tracking-wide">
                      Características
                    </h4>
                    <div className="space-y-3">
                      {selectedModel.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-[#0A2259]">
                          <div className="w-2 h-2 bg-[#9CAFA2] rounded-full flex-shrink-0"></div>
                          <span className="text-sm uppercase tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Images */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={selectedModel.images[modalImageIndex]}
                      alt={`${selectedModel.name} - Vista ${modalImageIndex + 1}`}
                      className="w-full h-80 object-cover"
                    />
                    
                    {/* Image Navigation */}
                    {selectedModel.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#0A2259]" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                        >
                          <ChevronRight className="w-5 h-5 text-[#0A2259]" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedModel.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedModel.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setModalImageIndex(index)}
                          className={`relative rounded-lg overflow-hidden ${
                            index === modalImageIndex 
                              ? 'ring-2 ring-[#0A2259] ring-offset-2' 
                              : 'opacity-70 hover:opacity-100'
                          } transition-all duration-300`}
                        >
                          <img
                            src={image}
                            alt={`Vista ${index + 1}`}
                            className="w-full h-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <div className="p-6 bg-gradient-to-br from-[#0A2259] to-[#1a3668] rounded-2xl text-white">
                    <p className="leading-relaxed">
                      {selectedModel.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ModelsSection
               