export default {
  name: "promotions",
  title: "Promociones",
  type: "document",
  fields: [
    {
      name: "modeloRosa",
      title: "Modelo Rosa",
      type: "object",
      fields: [
        {
          name: "precioActual",
          title: "Precio Actual",
          type: "string",
          description: "Ejemplo: $3.04 MDP",
        },
        {
          name: "precioAnterior",
          title: "Precio Anterior (tachado)",
          type: "string",
          description: "Ejemplo: $3.38 MDP",
        },
      ],
    },
    {
      name: "modeloLirio",
      title: "Modelo Lirio",
      type: "object",
      fields: [
        {
          name: "precioActual",
          title: "Precio Actual",
          type: "string",
          description: "Ejemplo: $3.30 MDP",
        },
        {
          name: "precioAnterior",
          title: "Precio Anterior (tachado)",
          type: "string",
          description: "Ejemplo: $3.89 MDP",
        },
      ],
    },
    {
      name: "modeloMalva",
      title: "Modelo Malva",
      type: "object",
      fields: [
        {
          name: "precioActual",
          title: "Precio Actual",
          type: "string",
          description: "Ejemplo: $3.78 MDP",
        },
        {
          name: "precioAnterior",
          title: "Precio Anterior (tachado)",
          type: "string",
          description: "Ejemplo: $4.45 MDP",
        },
      ],
    },
    {
      name: "textoBotonHeader",
      title: "Texto del Botón en Header",
      type: "string",
      description: "Texto que aparece en el botón de promociones",
      initialValue: "PROMOCIONES",
    },
    {
      name: "textoRestriccion",
      title: "Texto de Restricciones",
      type: "text",
      description: "Texto que aparece debajo de las promociones",
      initialValue:
        "*Precio con descuento aplicado *Aplican restricciones *Ubicaciones seleccionadas",
    },
  ],
};
