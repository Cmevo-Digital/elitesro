"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export default function CtaTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-gtm-id]");
      if (!el) return;
      trackEvent("cta_click", {
        cta_id: el.dataset.gtmId,
        cta_location: el.dataset.gtmLocation,
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
