import { useState, useCallback, useMemo, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Car,
  Bath,
  Square,
  Layers,
  Eye,
  Maximize2,
  RulerDimensionLineIcon,
  Maximize,
} from "lucide-react";

import lirio from "../assets/lirio.png";
import lirioBaja from "../assets/Lirio-planta-baja.jpg";
import lirioAlta from "../assets/Lirio-planta-alta.jpg";

import rosa from "../assets/rosa.png";
import rosaBaja from "../assets/Rosa-planta-baja.jpg";
import rosaAlta from "../assets/Rosa-planta-alta.jpg";

import malva from "../assets/malva.png";
import malvaBaja from "../assets/Malva-planta-baja.jpg";
import malvaAlta from "../assets/Malva-planta-alta.jpg";

const ModelsSection = ({ modelsRef, visibleSections }) => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [images, setImages] = useState({
    lirio: [],
    malva: [],
    rosa: [],
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const closeModal = useCallback(() => {
    setSelectedModel(null);
    setModalImageIndex(0);
    // Restaurar scroll del body
    document.body.style.overflow = "unset";
  }, []);

  const handleModalBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );
  // Agregar estas funciones
  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  const handleFullscreenBackdrop = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeFullscreen();
      }
    },
    [closeFullscreen]
  );

  useEffect(() => {
    const loadImages = async () => {
      // Función para cargar imágenes de una carpeta
      const loadFolderImages = async (folderName) => {
        const imageModules = await Promise.all([
          // Lirio
          ...(folderName === "lirio"
            ? [
                import("../assets/lirio/Bano-principal.jpg"),
                import("../assets/lirio/Closet-principal.jpg"),
                import("../assets/lirio/Closet-Recamara-2.jpg"),
                import("../assets/lirio/Cocina.jpg"),
                import("../assets/lirio/Estudio.jpg"),
                import("../assets/lirio/Recamara-2.jpg"),
                import("../assets/lirio/Sala-comedor-min.jpg"),
                import("../assets/lirio/Sala-comedor.jpg"),
              ]
            : []),
          // Malva
          ...(folderName === "malva"
            ? [
                import("../assets/malva/Area-lavado.jpg"),
                import("../assets/malva/Bano-recamara-principal.jpg"),
                import("../assets/malva/Recamara-Closet.jpg"),
                import("../assets/malva/Recamara-Closet3.jpg"),
                import("../assets/malva/Recamara-gamer.jpg"),
                import("../assets/malva/Recamara-principal.jpg"),
                import("../assets/malva/Recamara3.jpg"),
                import("../assets/malva/Recibidor-y-Escaleras.jpg"),
                import("../assets/malva/Sala-Comedor-Cocina.jpg"),
                import("../assets/malva/Terraza.jpg"),
                import("../assets/malva/Vestidor-horizontal.jpg"),
              ]
            : []),
          // Rosa
          ...(folderName === "rosa"
            ? [
                import("../assets/rosa/Bano-planta-alta.jpg"),
                import("../assets/rosa/Closet-recamara2.jpg"),
                import("../assets/rosa/Comedor-Cocina.jpg"),
                import("../assets/rosa/Comedor-y-Escaleras.jpg"),
                import("../assets/rosa/Medio-bano.jpg"),
                import("../assets/rosa/Recamara-principal.jpg"),
                import("../assets/rosa/recamara.jpg"),
                import("../assets/rosa/recamara3.jpg"),
                import("../assets/rosa/Sala-TV.jpg"),
                import("../assets/rosa/Vestidor-principal.jpg"),
              ]
            : []),
        ]);

        return imageModules.map((module) => module.default);
      };

      const lirioImages = await loadFolderImages("lirio");
      const malvaImages = await loadFolderImages("malva");
      const rosaImages = await loadFolderImages("rosa");

      setImages({
        lirio: lirioImages,
        malva: malvaImages,
        rosa: rosaImages,
      });
    };

    loadImages();
  }, []);

  const models = useMemo(
    () => [
      {
        id: 1,
        name: "ROSA",
        area: "155 M2",
        bedrooms: "3",
        bathrooms: "2 1/2",
        dimensions: "6.70m x 17m",
        levels: "2",
        parking: "2 AUTOS",
        mainImage: rosa,
        images: [rosa, rosaBaja, rosaAlta, ...images.rosa],
        virtualTour:
          "https://www.theasys.io/viewer/NIQTizr51Ey9g4ulZuYFm3E4kJaYKX/",
        description:
          "Encuentra el equilibrio y la dulzura en cada rincón de tu hogar. Este modelo de dos niveles toma su nombre y su inspiración por su belleza y elegancia.",
        features: [
          "COMEDOR",
          "COCINA",
          "SALA",
          "BALCÓN EN FACHADA",
          "PASILLO LATERAL",
          "SALA DE TV",
          "WALK IN CLOSET Y BAÑO COMPLETO EN RECÁMARA PRINCIPAL",
        ],
      },
      {
        id: 2,
        name: "LIRIO",
        area: "169 M2",
        bedrooms: "3",
        bathrooms: "2 1/2",
        dimensions: "6.70m x 17m",
        levels: "2",
        parking: "2 AUTOS",
        mainImage: lirio,
        images: [lirio, lirioBaja, lirioAlta, ...images.lirio],
        virtualTour:
          "https://www.theasys.io/viewer/RsEYESXzzp13Giqkh7DaS66qDROsXK/",
        description:
          "Vive en un entorno donde la naturaleza y la tranquilidad se unen. Este modelo de 2 niveles toma inspiración en la elegante flor que simboliza la pureza y la renovación. Con un balcón en la fachada que adorna la recámara principal, este hogar te invita a experimentar la frescura de la vida en cada rincón.",
        features: [
          "COMEDOR",
          "COCINA",
          "SALA",
          "BALCÓN EN FACHADA",
          "PASILLO LATERAL",
          "SALA DE TV / ESTUDIO",
          "WALK IN CLOSET Y BAÑO COMPLETO EN RECÁMARA PRINCIPAL",
        ],
      },
      {
        id: 3,
        name: "MALVA",
        area: "185 M2",
        bedrooms: "3",
        bathrooms: "3 1/2",
        dimensions: "7.50m x 17.50m",
        levels: "2",
        parking: "2 AUTOS",
        mainImage: malva,
        images: [malva, malvaBaja, malvaAlta, ...images.malva],
        virtualTour:
          "https://www.theasys.io/viewer/Z815XhW4DBPy3FAwe7J3yQOWjLcyiv/",
        description:
          "Sumérgete en la armonía de este modelo de 2 niveles, inspirada en la flor que simboliza la tranquilidad y la creatividad, encontrarás un hogar donde tus ideas puedan florecer y tus momentos sean coloreados con la serenidad que buscas.",
        features: [
          "COMEDOR",
          "COCINA",
          "SALA",
          "BALCÓN EN FACHADA",
          "PASILLO LATERAL",
          "ÁREA DE LAVADO EN SEGUNDA PLANTA",
          "WALK IN CLOSET Y BAÑO COMPLETO EN RECÁMARA PRINCIPAL",
        ],
      },
    ],
    [images]
  );

  const openModal = useCallback((model) => {
    setSelectedModel(model);
    setModalImageIndex(0);
    // Prevenir scroll del body
    document.body.style.overflow = "hidden";
  }, []);

  const nextImage = useCallback(() => {
    if (selectedModel) {
      const totalSlides = selectedModel.images.length + 1;
      setModalImageIndex((prev) => (prev + 1) % totalSlides);
    }
  }, [selectedModel]);

  const prevImage = useCallback(() => {
    if (selectedModel) {
      const totalSlides = selectedModel.images.length + 1;
      setModalImageIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  }, [selectedModel]);

  const setImageIndex = useCallback((index) => {
    setModalImageIndex(index);
  }, []);

  const isVirtualTourSlide = useMemo(() => {
    return selectedModel && modalImageIndex === selectedModel.images.length;
  }, [selectedModel, modalImageIndex]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          closeFullscreen();
        } else if (selectedModel) {
          closeModal();
        }
      }
      if (isFullscreen || selectedModel) {
        if (e.key === "ArrowLeft") {
          prevImage();
        }
        if (e.key === "ArrowRight") {
          nextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isFullscreen,
    selectedModel,
    closeFullscreen,
    closeModal,
    prevImage,
    nextImage,
  ]);
  return (
    <>
      <section
        ref={modelsRef}
        className={`py-16 md:py-20 bg-[#f5f3f0] transition-opacity duration-1000 ${
          visibleSections.has("models") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
              visibleSections.has("models")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0A2259] uppercase tracking-wider leading-tight mb-6"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              NUESTROS MODELOS
            </h2>
            <div className="w-20 h-1 bg-[#0A2259] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-[#0A2259] opacity-80 max-w-3xl mx-auto leading-relaxed">
              Descubre la variedad de diseños arquitectónicos que tenemos para
              ti. Cada modelo está pensado para brindar el máximo confort y
              funcionalidad.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {models.map((model, index) => (
              <div
                key={model.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                  visibleSections.has("models")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  willChange: "transform, opacity",
                }}
              >
                {/* Model Header */}
                <div className="p-6 pb-4 text-center">
                  <span className="text-sm font-medium text-[#0A2259] opacity-70 uppercase tracking-wider">
                    MODELO
                  </span>
                  <h3
                    className="text-3xl md:text-4xl font-normal text-[#0A2259] uppercase tracking-wider mt-1"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {model.name}
                  </h3>
                </div>

                {/* Image */}
                <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={model.mainImage || "/placeholder.svg"}
                    alt={`Modelo ${model.name}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Virtual Tour Badge */}
                  <div className="absolute top-4 right-4 bg-[#0A2259]/90 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>TOUR 360°</span>
                  </div>
                </div>

                {/* Specifications */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Area */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Square className="w-5 h-5 text-[#0A2259]" />
                      </div>
                      <div className="text-lg font-bold text-[#0A2259]">
                        {model.area}
                      </div>
                    </div>
                    {/* Bedrooms */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Home className="w-5 h-5 text-[#0A2259]" />
                      </div>
                      <div className="text-lg font-bold text-[#0A2259]">
                        {model.bedrooms}
                      </div>
                    </div>
                    {/* Bathrooms */}
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 border-2 border-[#0A2259] rounded-full flex items-center justify-center">
                        <Bath className="w-5 h-5 text-[#0A2259]" />
                      </div>
                      <div className="text-lg font-bold text-[#0A2259]">
                        {model.bathrooms}
                      </div>
                    </div>
                  </div>
                  {/* Action Button */}
                  <button
                    onClick={() => openModal(model)}
                    className="w-full bg-[#0A2259] text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wide hover:bg-[#1a3668] transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Optimizado */}
      {selectedModel && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 modal-backdrop"
          onClick={handleModalBackdropClick}
          style={{ willChange: "opacity" }}
        >
          <div
            className="bg-white rounded-2xl md:rounded-3xl max-w-[98vw] md:max-w-[95vw] w-full max-h-[95vh] overflow-hidden shadow-2xl modal-content"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Modal Header - Simplificado */}
            <div className="relative bg-[#0A2259] text-white px-4 md:px-8 py-4 md:py-6">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">
                    MODELO
                  </span>
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase tracking-wider"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {selectedModel.name}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 md:p-3 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content - Layout optimizado */}
            <div className="p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-100px)] md:max-h-[calc(95vh-120px)] custom-scrollbar">
              <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {/* Left Column - Specifications */}
                <div className="lg:col-span-1 space-y-4 md:space-y-6">
                  {/* Main Specs */}
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-[#0A2259] mb-3 md:mb-4 uppercase tracking-wide">
                      Especificaciones
                    </h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <Square className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                          ÁREA TOTAL
                        </div>
                        <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                          {selectedModel.area}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <Home className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                          RECÁMARAS
                        </div>
                        <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                          {selectedModel.bedrooms}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <Bath className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                          BAÑOS
                        </div>
                        <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                          {selectedModel.bathrooms}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <Layers className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                          NIVELES
                        </div>
                        <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                          {selectedModel.levels}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <RulerDimensionLineIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                          Medidas
                        </div>
                        <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                          {selectedModel.dimensions}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 bg-[#0A2259] rounded-full flex items-center justify-center">
                          <Car className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-[#0A2259] opacity-70 uppercase tracking-wide text-center">
                            COCHERA
                          </div>
                          <div className="text-sm md:text-lg font-bold text-[#0A2259] text-center">
                            {selectedModel.parking}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-[#0A2259] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg">
                    <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wide">
                      Descripción
                    </h4>
                    <p className="text-xs md:text-sm leading-relaxed opacity-90">
                      {selectedModel.description}
                    </p>
                  </div>
                </div>

                {/* Right Section - Images and Virtual Tour */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                  {/* Main Display Area */}
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                    {isVirtualTourSlide ? (
                      // Virtual Tour iframe
                      <div className="relative">
                        <iframe
                          src={selectedModel.virtualTour}
                          className="w-full h-64 md:h-80 lg:h-96 border-0"
                          allow="vr;gyroscope;accelerometer"
                          title={`Tour Virtual - Modelo ${selectedModel.name}`}
                        />
                        <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-[#0A2259] text-white px-2 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg">
                          <div className="flex items-center space-x-1 md:space-x-2">
                            <Eye className="w-3 h-3 md:w-5 md:h-5" />
                            <span className="text-xs md:text-sm font-semibold">
                              Recorrido Virtual 360°
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular Image
                      <div className="relative">
                        <img
                          src={
                            selectedModel.images[modalImageIndex] ||
                            "/placeholder.svg"
                          }
                          alt={`${selectedModel.name} - Vista ${
                            modalImageIndex + 1
                          }`}
                          className="w-full h-64 md:h-80 lg:h-96 object-cover cursor-pointer"
                          loading="lazy"
                          decoding="async"
                          onClick={openFullscreen} // ✅ Click para pantalla completa
                        />

                        {/* ✅ Botón de pantalla completa */}
                        <button
                          onClick={openFullscreen}
                          className="absolute top-3 md:top-4 right-3 md:right-4 p-2 md:p-3 bg-black/70 hover:bg-black/90 rounded-lg md:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                          title="Ver en pantalla completa"
                        >
                          <Maximize className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    )}

                    {/* Image Navigation */}
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-white/95 rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
                      style={{ willChange: "transform" }}
                    >
                      <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#0A2259]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-white/95 rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
                      style={{ willChange: "transform" }}
                    >
                      <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-[#0A2259]" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-black/70 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                      {isVirtualTourSlide
                        ? "Tour 360°"
                        : `${modalImageIndex + 1} / ${
                            selectedModel.images.length
                          }`}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-4">
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
                      {/* Image Thumbnails */}
                      {selectedModel.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setImageIndex(index)}
                          className={`relative rounded-lg md:rounded-xl overflow-hidden transition-all duration-200 ${
                            index === modalImageIndex && !isVirtualTourSlide
                              ? "ring-2 md:ring-3 ring-[#0A2259] ring-offset-1 md:ring-offset-2 scale-105 shadow-lg"
                              : "opacity-70 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg"
                          }`}
                          style={{ willChange: "transform" }}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Vista ${index + 1}`}
                            className="w-full h-12 md:h-16 object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </button>
                      ))}
                      {/* Virtual Tour Thumbnail */}
                      <button
                        onClick={() =>
                          setImageIndex(selectedModel.images.length)
                        }
                        className={`relative rounded-lg md:rounded-xl overflow-hidden bg-[#0A2259] transition-all duration-200 ${
                          isVirtualTourSlide
                            ? "ring-2 md:ring-3 ring-[#0A2259] ring-offset-1 md:ring-offset-2 scale-105 shadow-lg"
                            : "opacity-70 hover:opacity-100 hover:scale-105 shadow-md hover:shadow-lg"
                        }`}
                        style={{ willChange: "transform" }}
                      >
                        <div className="w-full h-12 md:h-16 flex items-center justify-center">
                          <div className="text-center">
                            <Eye className="w-4 h-4 md:w-6 md:h-6 text-white mx-auto mb-0.5 md:mb-1" />
                            <span className="text-xs text-white font-semibold">
                              360°
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                    <h4 className="text-base md:text-lg font-semibold text-[#0A2259] mb-3 md:mb-4 uppercase tracking-wide flex items-center">
                      <Maximize2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Características
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {selectedModel.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-2 md:p-3 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0A2259] rounded-full flex-shrink-0"></div>
                          <span className="text-xs md:text-sm text-[#0A2259] uppercase tracking-wide font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Modal de Pantalla Completa */}
                  {isFullscreen && !isVirtualTourSlide && (
                    <div
                      className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
                      onClick={handleFullscreenBackdrop}
                    >
                      {/* Imagen en pantalla completa */}
                      <img
                        src={
                          selectedModel.images[modalImageIndex] ||
                          "/placeholder.svg"
                        }
                        alt={`${selectedModel.name} - Vista ${
                          modalImageIndex + 1
                        }`}
                        className="max-w-[95vw] max-h-[95vh] object-contain"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Botón cerrar */}
                      <button
                        onClick={closeFullscreen}
                        className="absolute top-4 right-4 p-3 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>

                      {/* Navegación en pantalla completa */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft className="w-8 h-8 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-200"
                      >
                        <ChevronRight className="w-8 h-8 text-white" />
                      </button>

                      {/* Info de la imagen */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                        <span className="text-sm font-medium">
                          {selectedModel.name} - {modalImageIndex + 1} de{" "}
                          {selectedModel.images.length}
                        </span>
                      </div>

                      {/* Hint para cerrar */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                        <span className="text-sm">
                          Presiona ESC o haz clic para cerrar
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS optimizados */}
      <style jsx>{`
        .modal-backdrop {
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          animation: slideIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0a2259;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1a3668;
        }
      `}</style>
    </>
  );
};

export default ModelsSection;
