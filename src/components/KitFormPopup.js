'use client';

import { useEffect } from 'react';

// When someone closes or submits the popup we remember the time, and show it again after
// 15 days (the same "show once every 15 days" set on the form in Kit). A new key name, so
// browsers that closed the old popup (which then hid it forever) see it again.
const STORAGE_KEY = 'kit_form_dismissed_at_998bd02e5b';
const HIDE_FOR_MS = 15 * 24 * 60 * 60 * 1000;

const rememberDismissed = () => {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch (e) {}
};

const recentlyDismissed = () => {
  try {
    const at = Number(localStorage.getItem(STORAGE_KEY));
    return at > 0 && Date.now() - at < HIDE_FOR_MS;
  } catch (e) {
    return false;
  }
};

export default function KitFormPopup() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Never show the newsletter popup inside the blog editor
    if (window.location.pathname.startsWith('/studio')) return;

    // 1. Check if user already dismissed/closed or submitted the popup
    if (recentlyDismissed()) {
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
        rememberDismissed();
      }
    };

    // 4. Mark form as dismissed whenever user submits the form
    const handleDocumentSubmit = (e) => {
      if (e.target && e.target.closest && e.target.closest('.formkit-form, [data-uid="998bd02e5b"]')) {
        rememberDismissed();
      }
    };

    // 5. Observer to catch dynamically created close buttons in ConvertKit modal
    const observer = new MutationObserver(() => {
      const closeButtons = document.querySelectorAll('.formkit-close, [data-g-selector="close-button"], .formkit-close-button');
      closeButtons.forEach((btn) => {
        if (!btn.dataset.dismissListenerAdded) {
          btn.dataset.dismissListenerAdded = 'true';
          btn.addEventListener('click', () => {
            rememberDismissed();
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

