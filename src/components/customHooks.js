import { useState, useEffect } from "react";
import lirio from "../assets/lirio.png";
import rosa from "../assets/rosa.png";
import malva from "../assets/malva.png";

// Hook para detectar scroll
export const useScrollDetection = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar inmediatamente para el estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

// Hook para Intersection Observer
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

    // Pequeño delay para asegurar que los refs estén listos
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sin dependencias para evitar re-renders

  return visibleSections;
};

// Hook para datos de modelos
export const useModelsData = () => {
  const modelsData = [
    {
      id: 1,
      name: "ROSA",
      area: "155 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: rosa,
    },
    {
      id: 2,
      name: "LIRIO",
      area: "169 M²",
      bedrooms: "3",
      bathrooms: "2 1/2",
      image: lirio,
    },
    {
      id: 3,
      name: "MALVA",
      area: "185 M²",
      bedrooms: "3",
      bathrooms: "3 1/2",
      image: malva,
    },
  ];

  return modelsData;
};
