import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid, Layers, Images, Play, Pause, Maximize2 } from "lucide-react"

const GalleryTemplatesShowcase = () => {
  const [activeGallery, setActiveGallery] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  // Sample images for demo
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      thumb: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
      title: "Vista Principal",
      category: "exterior"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
      title: "Sala de Estar",
      category: "interior"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      thumb: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
      title: "Cocina Moderna",
      category: "interior"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
      thumb: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400",
      title: "Habitación Principal",
      category: "interior"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      thumb: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400",
      title: "Jardín",
      category: "exterior"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800",
      thumb: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400",
      title: "Piscina",
      category: "amenidades"
    }
  ]

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter)

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && activeGallery === 3) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, activeGallery, images.length])

  const galleryOptions = [
    {
      id: 1,
      title: "Grid Masonry",
      description: "Diseño tipo Pinterest con diferentes tamaños",
      icon: <Grid className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Carrusel 3D",
      description: "Slider con efecto de profundidad",
      icon: <Layers className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Hero Slider",
      description: "Presentación a pantalla completa",
      icon: <Images className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Grid con Filtros",
      description: "Categorías interactivas",
      icon: <Maximize2 className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Collage Moderno",
      description: "Diseño asimétrico elegante",
      icon: <Grid className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[#0A2259]">Opciones de Galería - Provenza Residencial</h1>
          <p className="text-gray-600 mt-2">Selecciona el estilo que mejor se adapte a tu proyecto</p>
        </div>
      </div>

      {/* Gallery Options */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {galleryOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setActiveGallery(option.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeGallery === option.id
                  ? 'border-[#0A2259] bg-[#0A2259] text-white shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-[#9CAFA2] hover:shadow-md'
              }`}
            >
              <div className="flex justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
              <p className={`text-sm ${activeGallery === option.id ? 'text-gray-200' : 'text-gray-600'}`}>
                {option.description}
              </p>
            </button>
          ))}
        </div>

        {/* Gallery Demos */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* Gallery 1: Masonry Grid */}
          {activeGallery === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-[#0A2259] mb-6">Grid Masonry</h2>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                      index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-64' : 'h-72'
                    } break-inside-avoid`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.thumb}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-white/80 text-sm capitalize">{image.category}</span>
                          <ZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery 2: 3D Carousel */}
          {activeGallery === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-[#0A2259] mb-6">Carrusel 3D</h2>
              <div className="relative h-96 flex items-center justify-center perspective-1000">
                <div className="relative w-full max-w-4xl h-80">
                  {images.map((image, index) => {
                    const isActive = index === currentIndex
                    const isPrev = index === (currentIndex - 1 + images.length) % images.length
                    const isNext = index === (currentIndex + 1) % images.length
                    
                    return (
                      <div
                        key={image.id}
                        className={`absolute top-0 left-1/2 w-96 h-80 transition-all duration-500 cursor-pointer ${
                          isActive ? 'z-30' : isPrev || isNext ? 'z-20' : 'z-10'
                        }`}
                        style={{
                          transform: `
                            translateX(-50%) 
                            translateZ(${isActive ? '0px' : isPrev ? '-200px' : isNext ? '-200px' : '-400px'}) 
                            translateX(${isActive ? '0' : isPrev ? '-60%' : isNext ? '60%' : '0'})
                            rotateY(${isActive ? '0deg' : isPrev ? '25deg' : isNext ? '-25deg' : '0deg'})
                            scale(${isActive ? '1' : '0.8'})
                          `,
                          opacity: isActive ? 1 : isPrev || isNext ? 0.7 : 0,
                          pointerEvents: isActive || isPrev || isNext ? 'auto' : 'none'
                        }}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                            <p className="text-white/80 capitalize">{image.category}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 z-40 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-[#0A2259]" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 z-40 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-[#0A2259]" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-[#0A2259]' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Gallery 3: Hero Slider */}
          {activeGallery === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-[#0A2259] mb-6 flex items-center justify-between">
                <span>Hero Slider</span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#9CAFA2] text-white rounded-full hover:bg-[#8a9d91] transition-colors"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {isAutoPlaying ? 'Pausar' : 'Reproducir'}
                  </span>
                </button>
              </h2>
              
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 transform transition-all duration-700 delay-300 ${
                      index === currentIndex 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {image.title}
                      </h3>
                      <p className="text-xl text-white/90 capitalize mb-6">{image.category}</p>
                      <button className="px-6 py-3 bg-white text-[#0A2259] rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
                
                {/* Side Navigation */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8">
                  <button
                    onClick={() => {
                      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
                      setIsAutoPlaying(false)
                    }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={() => {
                      setCurrentIndex((prev) => (prev + 1) % images.length)
                      setIsAutoPlaying(false)
                    }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div 
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2 mt-4">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`relative rounded-lg overflow-hidden aspect-video ${
                      index === currentIndex 
                        ? 'ring-2 ring-[#0A2259] ring-offset-2' 
                        : 'opacity-60 hover:opacity-100'
                    } transition-all duration-300`}
                  >
                    <img
                      src={image.thumb}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Gallery 4: Filtered Grid */}
          {activeGallery === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-[#0A2259] mb-6">Grid con Filtros</h2>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['all', 'exterior', 'interior', 'amenidades'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-[#0A2259] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter === 'all' ? 'Todas' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Animated Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.thumb}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2259]/90 via-[#0A2259]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-[#9CAFA2] font-medium capitalize">{image.category}</span>
                          <div className="flex items-center space-x-2 text-white">
                            <ZoomIn className="w-5 h-5" />
                            <span className="text-sm">Ver más</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0A2259] capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery 5: Modern Collage */}
          {activeGallery === 5 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-[#0A2259] mb-6">Collage Moderno</h2>
              
              <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
                {/* Large Featured Image - Top Left */}
                <div 
                  className="col-span-6 row-span-3 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[0])}
                >
                  <img
                    src={images[0].url}
                    alt={images[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2259]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{images[0].title}</h3>
                      <p className="text-white/80 text-lg">{images[0].category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#9CAFA2] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Medium Image - Top Right */}
                <div 
                  className="col-span-3 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[1])}
                >
                  <img
                    src={images[1].thumb}
                    alt={images[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A2259]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="font-semibold text-lg mb-1">{images[1].title}</h4>
                      <p className="text-sm">{images[1].category}</p>
                    </div>
                  </div>
                </div>

                {/* Small Square - Top Right Corner */}
                <div 
                  className="col-span-3 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[2])}
                >
                  <img
                    src={images[2].thumb}
                    alt={images[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9CAFA2]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold">{images[2].title}</h4>
                    </div>
                  </div>
                </div>

                {/* Horizontal Rectangle - Middle Right */}
                <div 
                  className="col-span-6 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[3])}
                >
                  <img
                    src={images[3].url}
                    alt={images[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2259]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
                    <div className="p-6 text-white">
                      <h4 className="font-bold text-xl">{images[3].title}</h4>
                      <p className="text-white/80">{images[3].category}</p>
                    </div>
                  </div>
                </div>

                {/* Large Square - Bottom Left */}
                <div 
                  className="col-span-4 row-span-3 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[4])}
                >
                  <img
                    src={images[4].url}
                    alt={images[4].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="font-bold text-2xl mb-2">{images[4].title}</h4>
                      <p className="text-white/80">{images[4].category}</p>
                    </div>
                  </div>
                </div>

                {/* Vertical Rectangle - Bottom Middle */}
                <div 
                  className="col-span-2 row-span-3 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(images[5])}
                >
                  <img
                    src={images[5].url}
                    alt={images[5].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#9CAFA2]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white transform rotate-90">
                      <h4 className="font-bold text-xl whitespace-nowrap">{images[5].title}</h4>
                    </div>
                  </div>
                </div>

                {/* Feature Box - Bottom Right */}
                <div className="col-span-6 row-span-3 bg-gradient-to-br from-[#0A2259] to-[#1a3668] rounded-2xl shadow-lg p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Provenza Residencial</h3>
                  <p className="text-white/90 text-lg mb-6">
                    Un desarrollo exclusivo donde la elegancia y el confort se encuentran en perfecta armonía.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-[#9CAFA2]">5</div>
                      <div className="text-white/80 text-sm">Etapas</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="text-3xl font-bold text-[#9CAFA2]">120+</div>
                      <div className="text-white/80 text-sm">Residencias</div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-[#0A2259] py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Ver Galería Completa
                  </button>
                </div>
              </div>

              {/* Mobile Version - Stack for smaller screens */}
              <div className="md:hidden space-y-4 mt-8">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.thumb}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="text-white font-semibold">{image.title}</h4>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
            <p className="text-white/80 capitalize">{selectedImage.category}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out backwards;
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}

export default GalleryTemplatesShowcase