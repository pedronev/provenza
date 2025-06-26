import { useState, useEffect } from "react"
import { X, Gift, Sparkles, Clock, ChevronRight, Tag, Bell, Percent, Star, Home, Phone } from "lucide-react"

const DiscountBannersShowcase = () => {
  const [floatingBanner, setFloatingBanner] = useState(false)
  const [sidePanel, setSidePanel] = useState(false)
  const [topBar, setTopBar] = useState(true)
  const [cornerBadge, setCornerBadge] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [notification, setNotification] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    // Auto-show notification after 2 seconds
    const timer = setTimeout(() => {
      setNotification(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Opciones de Avisos de Descuentos - Provenza Residencial</h1>
          <p className="text-gray-600">Haz clic en cada opción para ver una demostración</p>
        </div>
      </div>

      {/* Options Grid */}
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Option 1: Top Bar */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setTopBar(!topBar)}
        >
          <div className="flex items-center mb-4">
            <Tag className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Barra Superior Animada</h3>
          </div>
          <p className="text-gray-600 mb-4">Banner fijo en la parte superior con animación de texto deslizante</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para {topBar ? 'ocultar' : 'mostrar'}</div>
        </div>

        {/* Option 2: Floating Side Banner */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setFloatingBanner(!floatingBanner)}
        >
          <div className="flex items-center mb-4">
            <Gift className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Banner Lateral Flotante</h3>
          </div>
          <p className="text-gray-600 mb-4">Banner pegajoso en el lateral con efecto bounce</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para {floatingBanner ? 'ocultar' : 'mostrar'}</div>
        </div>

        {/* Option 3: Modal Popup */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setModalOpen(true)}
        >
          <div className="flex items-center mb-4">
            <Sparkles className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Modal Emergente Premium</h3>
          </div>
          <p className="text-gray-600 mb-4">Ventana modal con animación de entrada elegante</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para mostrar</div>
        </div>

        {/* Option 4: Side Panel */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setSidePanel(true)}
        >
          <div className="flex items-center mb-4">
            <ChevronRight className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Panel Lateral Deslizante</h3>
          </div>
          <p className="text-gray-600 mb-4">Panel que se desliza desde el lateral derecho</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para mostrar</div>
        </div>

        {/* Option 5: Corner Badge */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setCornerBadge(!cornerBadge)}
        >
          <div className="flex items-center mb-4">
            <Percent className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Insignia de Esquina</h3>
          </div>
          <p className="text-gray-600 mb-4">Badge minimalista con efecto de rotación</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para {cornerBadge ? 'ocultar' : 'mostrar'}</div>
        </div>

        {/* Option 6: Toast Notification */}
        <div 
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setNotification(true)}
        >
          <div className="flex items-center mb-4">
            <Bell className="w-8 h-8 text-[#0A2259] mr-3" />
            <h3 className="text-xl font-semibold">Notificación Toast</h3>
          </div>
          <p className="text-gray-600 mb-4">Notificación elegante que aparece desde abajo</p>
          <div className="text-sm text-[#9CAFA2] font-medium">Click para mostrar</div>
        </div>
      </div>

      {/* DEMOS */}

      {/* 1. Top Bar Demo */}
      {topBar && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white py-3 px-4 z-50 shadow-lg">
          <div className="flex items-center justify-center">
            <div className="flex items-center overflow-hidden">
              <div className="animate-slide-left flex items-center whitespace-nowrap">
                <Sparkles className="w-5 h-5 mr-2" />
                <span className="font-semibold mr-8">🏠 PREVENTA EXCLUSIVA - 20% DE DESCUENTO</span>
                <Clock className="w-5 h-5 mr-2" />
                <span className="mr-8">⏰ Oferta válida hasta el 31 de Diciembre</span>
                <Gift className="w-5 h-5 mr-2" />
                <span className="mr-8">🎁 Plus: Cocina equipada de REGALO en tu nueva casa</span>
                <span className="font-semibold mr-8">📞 Llama ahora: 667-123-4567</span>
              </div>
            </div>
            <button
              onClick={() => setTopBar(false)}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating Side Banner */}
      {floatingBanner && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 animate-bounce-slow">
          <div className="bg-gradient-to-b from-[#9CAFA2] to-[#7a9182] text-white rounded-2xl shadow-2xl p-6 w-64 relative transform hover:scale-105 transition-transform">
            <button
              onClick={() => setFloatingBanner(false)}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="text-center">
              <Home className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">¡ÚLTIMA ETAPA!</h3>
              <p className="text-lg mb-4">15% DESCUENTO</p>
              <div className="bg-white/20 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium">Código: PROVENZA15</p>
              </div>
              <p className="text-xs mb-4">*Aplica en modelos seleccionados</p>
              <button className="bg-white text-[#9CAFA2] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full">
                Ver Modelos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal Popup */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full animate-modal-in shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-br from-[#0A2259] to-[#1a3668] text-white p-8">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Star className="w-16 h-16 text-yellow-400 fill-yellow-400 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#0A2259] font-bold text-xl">20%</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">¡OFERTA ESPECIAL!</h2>
                <p className="text-xl mb-6">Primera Etapa PROVENZA</p>
                
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-6">
                  <p className="text-sm mb-2">TIEMPO LIMITADO</p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{String(countdown.hours).padStart(2, '0')}</div>
                      <div className="text-xs">HORAS</div>
                    </div>
                    <div className="text-2xl font-bold">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{String(countdown.minutes).padStart(2, '0')}</div>
                      <div className="text-xs">MIN</div>
                    </div>
                    <div className="text-2xl font-bold">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{String(countdown.seconds).padStart(2, '0')}</div>
                      <div className="text-xs">SEG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#9CAFA2] flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Ubicación privilegiada en corredor turístico</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#9CAFA2] flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Amenidades de primer nivel</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#9CAFA2] flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Financiamiento directo disponible</span>
                </li>
              </ul>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-[#0A2259] text-white py-3 rounded-full font-semibold hover:bg-[#1a3668] transition-colors">
                  Agenda tu Visita
                </button>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Side Panel */}
      {sidePanel && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setSidePanel(false)}
          />
          <div className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-50 w-80 transform transition-transform duration-300 ${
            sidePanel ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0A2259]">Oferta Exclusiva</h3>
                <button
                  onClick={() => setSidePanel(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-[#9CAFA2] to-[#7a9182] text-white rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-2">PREVENTA ESPECIAL</h4>
                <p className="text-3xl font-bold mb-2">25% OFF</p>
                <p className="text-sm">En pagos de contado</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Gift className="w-5 h-5 text-[#9CAFA2] mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold">Regalo de Inauguración</h5>
                    <p className="text-sm text-gray-600">Cocina integral equipada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-[#9CAFA2] mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold">3 Modelos Disponibles</h5>
                    <p className="text-sm text-gray-600">Desde 120m² hasta 180m²</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#9CAFA2] mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold">Atención Personalizada</h5>
                    <p className="text-sm text-gray-600">Asesores disponibles 24/7</p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9CAFA2]"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9CAFA2]"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#9CAFA2]"
                />
                <button className="w-full bg-[#0A2259] text-white py-3 rounded-lg font-semibold hover:bg-[#1a3668] transition-colors">
                  Solicitar Información
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* 5. Corner Badge */}
      {cornerBadge && (
        <div className="fixed bottom-4 left-4 z-40">
          <div className="relative animate-float">
            <div className="bg-gradient-to-r from-[#0A2259] to-[#1a3668] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <button
                onClick={() => setCornerBadge(false)}
                className="absolute top-1 right-1 p-1 hover:bg-white/20 rounded-full"
              >
                <X className="w-3 h-3" />
              </button>
              <Percent className="w-8 h-8 mb-1" />
              <span className="text-2xl font-bold">15%</span>
              <span className="text-xs">DESCUENTO</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#9CAFA2] text-white text-xs px-2 py-1 rounded-full animate-pulse">
              HOY
            </div>
          </div>
        </div>
      )}

      {/* 6. Toast Notification */}
      {notification && (
        <div className={`fixed bottom-4 right-4 z-50 transform transition-all duration-500 ${
          notification ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-l-4 border-[#9CAFA2]">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Bell className="w-6 h-6 text-[#9CAFA2]" />
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-lg font-semibold text-[#0A2259]">¡Nueva Promoción!</h4>
                <p className="text-gray-600 mt-1">Aprovecha 18 meses sin intereses en la primera etapa de Provenza</p>
                <div className="mt-3 flex space-x-2">
                  <button className="bg-[#0A2259] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a3668] transition-colors">
                    Ver detalles
                  </button>
                  <button 
                    onClick={() => setNotification(false)}
                    className="text-gray-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-slide-left {
          animation: slideLeft 20s linear infinite;
        }
        
        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// Check icon component
const Check = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
)

export default DiscountBannersShowcase