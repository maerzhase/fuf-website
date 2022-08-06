import React, { useCallback, useEffect, useState } from "react";
import ScrollArrow from "./ScrollArrow";

const SIZE = 70;

function ScrollIndicator() {

  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState("down");

  const handleScroll = useCallback(() => {
    const isDown = window.scrollY === 0;
    const isUp =
      window.scrollY >= document.body.scrollHeight - window.innerHeight;
    if (isDown || isUp) {
      if (isDown) {
        setIsVisible(true);
        setDirection("down");
      }
      if (isUp) {
        setIsVisible(true);
        setDirection("up");
      }
    } else {
      setIsVisible(false);
    }
  }, [setIsVisible, setDirection]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClick = useCallback(() => {
    window.scroll({
      top: direction === "down" ? window.innerHeight : 0,
      behavior: "smooth",
    });
  }, [direction]);

  return (
    <div
      style={{
        zIndex: 999,
        width: SIZE,
        height: SIZE,
        position: "fixed",
        bottom: 10,
        left: `calc(50% - ${SIZE / 2}px)`,
      }}
    >
      <ScrollArrow
        onClick={handleClick}
        direction={direction}
        isVisible={isVisible}
      />
    </div>
  );
}

export default ScrollIndicator;
