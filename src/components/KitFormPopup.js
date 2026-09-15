'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'kit_form_dismissed_998bd02e5b';

export default function KitFormPopup() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Check if user already dismissed/closed or submitted the popup
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      return;
    }

    // 2. Inject the Kit Script if not already present
    let script = document.querySelector('script[data-uid="998bd02e5b"]');
    if (!script) {
      script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', '998bd02e5b');
      script.src = 'https://fantastic-motivator-3431.kit.com/998bd02e5b/index.js';
      document.body.appendChild(script);
    }

    // 3. Mark form as dismissed whenever the user clicks close button ('X') or overlay
    const handleDocumentClick = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or parent is a close button, SVG inside close button, or close element in Kit modal
      const isCloseBtn = 
        target.closest('.formkit-close') ||
        target.closest('[data-g-selector="close-button"]') ||
        target.closest('.formkit-close-button') ||
        target.closest('[aria-label="Close"]') ||
        (target.innerText && target.innerText.trim() === '×' && target.closest('.formkit-modal, .formkit-form, [data-uid="998bd02e5b"]'));

      if (isCloseBtn) {
        localStorage.setItem(STORAGE_KEY, 'true');
      }
    };

    // 4. Mark form as dismissed whenever user submits the form
    const handleDocumentSubmit = (e) => {
      if (e.target && e.target.closest && e.target.closest('.formkit-form, [data-uid="998bd02e5b"]')) {
        localStorage.setItem(STORAGE_KEY, 'true');
      }
    };

    // 5. Observer to catch dynamically created close buttons in ConvertKit modal
    const observer = new MutationObserver(() => {
      const closeButtons = document.querySelectorAll('.formkit-close, [data-g-selector="close-button"], .formkit-close-button');
      closeButtons.forEach((btn) => {
        if (!btn.dataset.dismissListenerAdded) {
          btn.dataset.dismissListenerAdded = 'true';
          btn.addEventListener('click', () => {
            localStorage.setItem(STORAGE_KEY, 'true');
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('submit', handleDocumentSubmit, true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleDocumentClick, true);
      document.removeEventListener('submit', handleDocumentSubmit, true);
    };
  }, []);

  return null;
}

