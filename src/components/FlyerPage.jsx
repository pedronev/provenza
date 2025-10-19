import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Download, Loader2, CheckCircle2 } from "lucide-react";
import { client, urlFor } from "../lib/sanity";
import logoSvg from "../assets/logo.svg";

const FlyerPage = () => {
  const navigate = useNavigate();
  const [flyerData, setFlyerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  // Cargar datos del flyer desde Sanity
  useEffect(() => {
    const fetchFlyerData = async () => {
      try {
        const data = await client.fetch('*[_type == "flyer"][0]');
        setFlyerData(data);

        // Obtener URL del PDF
        if (data?.pdfDescarga?.asset?._ref) {
          const pdfAssetId = data.pdfDescarga.asset._ref;
          const pdfAsset = await client.fetch(
            `*[_id == "${pdfAssetId}"][0]{url}`
          );
          setPdfUrl(pdfAsset?.url);
        }
      } catch (error) {
        console.error("Error fetching flyer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlyerData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Enviar a Google Sheets
      const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (googleScriptUrl) {
        const formDataToSend = new FormData();
        formDataToSend.append("nombre", formData.nombre);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("telefono", formData.telefono);
        formDataToSend.append("mensaje", formData.mensaje);
        formDataToSend.append("fecha", new Date().toLocaleString("es-MX"));

        await fetch(googleScriptUrl, {
          method: "POST",
          body: formDataToSend,
        });
      }

      setSuccess(true);

      // Resetear formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor intenta de nuevo."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A2259] flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2259] to-[#1a3668] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <header className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img
              src={logoSvg}
              alt="Provenza Logo"
              className="h-8 md:h-12 brightness-0 invert"
            />
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              {flyerData?.imagenFlyer && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={urlFor(flyerData.imagenFlyer).width(800).url()}
                    alt="Flyer Provenza"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>

            {/* Right - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
                {!success ? (
                  <>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0A2259] mb-4">
                      {flyerData?.tituloFlyer ||
                        "Descarga el Proyecto Completo"}
                    </h1>
                    <p className="text-gray-600 mb-8">
                      {flyerData?.descripcionFlyer ||
                        "Completa el formulario y obtén acceso al PDF con todos los detalles de Provenza Residencial"}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2259] focus:border-transparent transition-all"
                          placeholder="Ej. Juan Pérez"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2259] focus:border-transparent transition-all"
                          placeholder="correo@ejemplo.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2259] focus:border-transparent transition-all"
                          placeholder="(667) 123 4567"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Mensaje (Opcional)
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows="4"
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2259] focus:border-transparent transition-all resize-none"
                          placeholder="¿Tienes alguna pregunta o comentario?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#0A2259] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#1a3668] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            <span>Obtener PDF del Proyecto</span>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        Al enviar este formulario, aceptas que tus datos sean
                        utilizados para contactarte sobre Provenza Residencial.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#0A2259] mb-4">
                      ¡Gracias por tu interés!
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Tu información ha sido registrada exitosamente. Ahora
                      puedes descargar el PDF del proyecto.
                    </p>

                    <div className="space-y-4">
                      <button
                        onClick={handleDownload}
                        className="w-full bg-[#0A2259] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#1a3668] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Descargar PDF</span>
                      </button>

                      <button
                        onClick={() => navigate("/")}
                        className="w-full border-2 border-[#0A2259] text-[#0A2259] py-4 px-6 rounded-xl font-semibold hover:bg-[#0A2259] hover:text-white transition-all duration-300"
                      >
                        Volver al Inicio
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerPage;
