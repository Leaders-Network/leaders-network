"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Hide widget on certain paths
  const isHidden = SITE_CONFIG.hiddenWidgetPaths.some((p) =>
    pathname.startsWith(p)
  );

  useEffect(() => {
    if (isHidden || tooltipDismissed) return;

    // Show tooltip after 3 seconds on page load
    const showTimer = setTimeout(() => {
      if (!tooltipDismissed) {
        setShowTooltip(true);
      }
    }, 3000);

    // Hide tooltip after 10 seconds if not interacted with
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isHidden, tooltipDismissed, pathname]);

  const handleDismissTooltip = () => {
    setTooltipDismissed(true);
    setShowTooltip(false);
  };

  const handleWhatsAppClick = () => {
    setShowTooltip(false);
    window.open(SITE_CONFIG.whatsappUrl, '_blank');
  };

  if (isHidden) return null;

  return (
    <div className="fixed bottom-5 right-6 z-40">
      {/* Tooltip/Chat Popup */}
      <AnimatePresence>
        {showTooltip && !tooltipDismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4
            }}
            className="absolute right-0 bottom-20 mb-2"
          >
            {/* Chat Card with Speech Bubble Tail */}
            <div className="bg-white rounded-2xl shadow-xl w-72 p-5 relative">
              {/* Speech bubble tail pointing to WhatsApp button */}
              <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45 shadow-sm" />
              
              {/* Close button */}
              <button
                onClick={handleDismissTooltip}
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Message Content */}
              <div className="mb-4 pr-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Hi there!</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Need some help?</p>
              </div>

              {/* Chat Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:from-blue-500 hover:via-blue-400 hover:to-orange-400 text-white font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                Let's chat now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Leaders Network on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 relative"
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.851L.063 23.75l6.093-1.437A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.617.853.895-3.508-.233-.37A9.793 9.793 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
        </svg>

        {/* Subtle pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
