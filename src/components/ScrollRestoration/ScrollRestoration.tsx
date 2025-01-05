import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollPositions = {
  [key: string]: number;
};

const ScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions: ScrollPositions = {};

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions[location.pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (scrollPositions[location.pathname] !== undefined) {
      window.scrollTo(0, scrollPositions[location.pathname]);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
