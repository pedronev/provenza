import { useState, useEffect } from "react";
import { fetchPromotions, urlFor } from "../lib/sanity";
import lirio from "../assets/lirio.png";
import rosa from "../assets/rosa.png";
import malva from "../assets/malva.png";

// Hook para detectar scroll (sin cambios)
export const useScrollDetection = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

// Hook para Intersection Observer (sin cambios)
export const useIntersectionObserver = (sectionRefs) => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    let ticking = false;

    const handleIntersection = (entries) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisibleSections((prevVisible) => {
            const newVisible = new Set(prevVisible);

            entries.forEach((entry) => {
              const sectionKey = entry.target.dataset.section;
              if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                newVisible.add(sectionKey);
              }
            });

            return newVisible;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.1],
      rootMargin: "20px",
    });

    const timeoutId = setTimeout(() => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          ref.current.dataset.section = key;
          observer.observe(ref.current);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return visibleSections;
};

// Hook para datos de modelos - ACTUALIZADO
export const useModelsData = () => {
  const [modelsData, setModelsData] = useState([
    {
      id: 1,
      name: "ROSA",
      area: "155 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: rosa, // Imagen por defecto
    },
    {
      id: 2,
      name: "LIRIO",
      area: "169 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: lirio, // Imagen por defecto
    },
    {
      id: 3,
      name: "MALVA",
      area: "185 M²",
      bedrooms: "3",
      bathrooms: "3 1/2",
      image: malva, // Imagen por defecto
    },
  ]);

  useEffect(() => {
    const loadPromotions = async () => {
      const promotions = await fetchPromotions();

      if (promotions) {
        setModelsData((prevData) =>
          prevData.map((model) => {
            let imageUrl = model.image; // Mantener imagen por defecto

            // Obtener imagen de Sanity si existe
            if (
              model.name === "ROSA" &&
              promotions.modeloRosa?.imagenPrincipal
            ) {
              imageUrl = urlFor(promotions.modeloRosa.imagenPrincipal).url();
            } else if (
              model.name === "LIRIO" &&
              promotions.modeloLirio?.imagenPrincipal
            ) {
              imageUrl = urlFor(promotions.modeloLirio.imagenPrincipal).url();
            } else if (
              model.name === "MALVA" &&
              promotions.modeloMalva?.imagenPrincipal
            ) {
              imageUrl = urlFor(promotions.modeloMalva.imagenPrincipal).url();
            }

            return {
              ...model,
              image: imageUrl,
            };
          })
        );
      }
    };

    loadPromotions();
  }, []);

  return modelsData;
};
