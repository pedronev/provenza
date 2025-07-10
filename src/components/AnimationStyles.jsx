const AnimationStyles = () => {
  return (
    <style jsx>{`
      @keyframes wordBounce {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        70% {
          opacity: 1;
          transform: translateY(5px);
        }
        85% {
          transform: translateY(-2px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes bounceSlow {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(5px);
        }
      }

      @keyframes pulseSlight {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.1);
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

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInFromRight {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .animate-word-bounce {
        animation: wordBounce 0.8s ease-out;
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fade-in-scale {
        animation: fadeInScale 0.8s ease-out forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-bounce-slow {
        animation: bounceSlow 2s ease-in-out infinite;
      }

      .animate-pulse-subtle {
        animation: pulseSlight 2s ease-in-out infinite;
      }

      .animate-modal-in {
        animation: modalIn 0.3s ease-out;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.6s ease-out backwards;
      }

      .animate-slide-in-from-right {
        animation: slideInFromRight 0.5s ease-out;
      }

      .animate-fade-in {
        animation: fadeIn 0.3s ease-out;
      }

      .animation-delay-200 {
        animation-delay: 200ms;
      }

      .animation-delay-400 {
        animation-delay: 400ms;
      }

      .animation-delay-600 {
        animation-delay: 600ms;
      }

      .animation-delay-800 {
        animation-delay: 800ms;
      }

      .delay-200 {
        transition-delay: 200ms;
      }

      .delay-400 {
        transition-delay: 400ms;
      }

      .delay-600 {
        transition-delay: 600ms;
      }

      .delay-800 {
        transition-delay: 800ms;
      }
    `}</style>
  );
};

export default AnimationStyles;
