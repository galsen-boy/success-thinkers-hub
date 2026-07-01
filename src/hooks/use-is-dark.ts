import { useEffect, useState } from "react";

/**
 * Reactively tracks whether the <html> element carries the `.dark` class.
 * Used by chart components that need explicit color values (Recharts, etc.)
 * because CSS custom properties cannot be passed into SVG stroke/fill props.
 */
export function useIsDark(): boolean {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const update = () => setIsDark(html.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return isDark;
}
