import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get hash from the URL if present
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      const retryScroll = setInterval(() => {
        const targetElement = document.querySelector(hash);
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
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
