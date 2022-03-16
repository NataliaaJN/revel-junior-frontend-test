import { useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScroll({ x: window.scrollX, y: window.scrollY })
    );
  }, []);
  return scroll;
};

export default useScroll;