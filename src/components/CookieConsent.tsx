import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type ConsentStatus = 'pending' | 'necessary' | 'all' | 'dismissed';

export default function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  useEffect(() => {
    // Check if consent status exists in localStorage
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      if (savedConsent === 'dismissed') {
        // If it was dismissed, check the timestamp
        const dismissedTime = localStorage.getItem('cookieConsentDismissedAt');
        if (dismissedTime) {
          const dismissedDate = new Date(parseInt(dismissedTime));
          const now = new Date();
          
          // If it's been less than 1 day since dismissal, keep it dismissed
          if ((now.getTime() - dismissedDate.getTime()) < 86400000) { // 24 hours in milliseconds
            setConsentStatus('dismissed');
            return;
          }
        }
        // If more than a day has passed or no timestamp, show again
        setConsentStatus('pending');
      } else {
        // For 'necessary' or 'all', respect the saved preference
        setConsentStatus(savedConsent as ConsentStatus);
      }
    }
  }, []);

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setConsentStatus('necessary');
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setConsentStatus('all');
  };

  const handleDismiss = () => {
    localStorage.setItem('cookieConsent', 'dismissed');
    localStorage.setItem('cookieConsentDismissedAt', Date.now().toString());
    setConsentStatus('dismissed');
  };

  // Only show banner if the status is pending
  const shouldShow = consentStatus === 'pending';

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] px-4 py-4 md:py-6 bg-white dark:bg-slate-800 shadow-lg border-t border-slate-200 dark:border-slate-700"
        >
          {/* Close button positioned at top right */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Dismiss cookie consent banner"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
          
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pr-8">
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base flex-1 text-center md:text-left">
              We use cookies to enable the proper functioning and security of our website, and to offer you the best possible user experience.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAcceptNecessary}
                className="bg-white hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-sm px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 transition-colors"
              >
                Accept only necessary
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-accent hover:bg-accent-light text-white text-sm px-4 py-2 rounded-md transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 