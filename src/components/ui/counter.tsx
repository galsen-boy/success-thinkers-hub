import { useEffect, useState, useRef } from "react";

export function Counter({ value, duration = 1.5 }: { value: string | number; duration?: number }) {
  const strVal = String(value).trim();

  // Extract number (integer or decimal)
  const cleanedVal = strVal.replace(/\s+/g, "").replace(",", ".");
  const numericMatch = cleanedVal.match(/(\d+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;

  const hasComma = strVal.includes(",");
  const decimalIndex = cleanedVal.indexOf(".");
  const decimalPlaces = decimalIndex !== -1 ? cleanedVal.length - decimalIndex - 1 : 0;

  // Get prefix/suffix by splitting around the number
  const parts = numericMatch ? cleanedVal.split(numericMatch[0]) : ["", ""];
  const prefix = parts[0];
  const suffix = parts[1];

  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(numericValue);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);
          const end = numericValue;
          if (end === 0) return;

          const fps = 60;
          const totalFrames = Math.min(Math.floor(duration * fps), fps * 2);
          const increment = end / totalFrames;
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const currentCount = increment * frame;
            if (frame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(currentCount);
            }
          }, 1000 / fps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, triggered]);

  if (isNaN(numericValue) || numericValue === 0) {
    return <span>{strVal}</span>;
  }

  // Format count with original decimals and custom punctuation
  const decimalPart = count.toFixed(decimalPlaces);
  let formattedCount = hasComma ? decimalPart.replace(".", ",") : decimalPart;

  // Add space separator for large integers (e.g. 32 900)
  if (numericValue >= 1000 && !decimalPlaces) {
    const parts = String(Math.floor(count)).split(/(?=(?:...)*$)/);
    formattedCount = parts.join(" ");
  }

  const displayValue = `${prefix}${formattedCount}${suffix}`;

  return <span ref={elementRef}>{triggered ? displayValue : "0"}</span>;
}
