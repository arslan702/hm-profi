import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        // const element = document.querySelector(location.hash);

        const retryScroll = setInterval(() => {
          const targetElement = document.querySelector(location.hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            clearInterval(retryScroll);
          }
        }, 50);
      } else {
        const contentReady = setInterval(() => {
          if (document.readyState === "complete") {
            window.scrollTo(0, 0);
            clearInterval(contentReady);
          }
        }, 50);
      }
    };

    handleScroll();
  }, [location]);

  return null; // Component kuch render nahi karega
};

export default ScrollHandler;
