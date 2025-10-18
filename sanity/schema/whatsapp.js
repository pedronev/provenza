export default {
  name: "whatsapp",
  title: "Configuración WhatsApp",
  type: "document",
  fields: [
    {
      name: "numeroTelefono",
      title: "Número de Teléfono",
      type: "string",
      description: "Formato: 526677976941 (con código de país, sin +)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mensajeBotonFlotante",
      title: "Mensaje - Botón Flotante",
      type: "text",
      description: "Mensaje que se enviará desde el botón flotante",
      initialValue:
        "¡Hola! 👋 Vengo desde su sitio web y me gustaría más información sobre Provenza Residencial 🏠✨",
    },
    {
      name: "mensajeLotes",
      title: "Mensaje - Lotes",
      type: "text",
      description: "Mensaje para consultas sobre lotes",
      initialValue:
        "¡Hola! 👋 Me interesa información sobre los LOTES en Provenza Residencial. ¿Podrían proporcionarme más detalles? 🏗️",
    },
    {
      name: "tooltipTexto",
      title: "Texto del Tooltip",
      type: "string",
      description: "Texto que aparece al pasar el mouse sobre el botón",
      initialValue: "¡Contáctanos ahora!",
    },
  ],
};
