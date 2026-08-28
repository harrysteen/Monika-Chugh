'use client';

import { useEffect } from 'react';

export default function KitFormPopup() {
  useEffect(() => {
    // 1. Clear any ConvertKit / Kit suppression cookies and storage entries on every page load/refresh
    const clearKitStorageAndCookies = () => {
      try {
        if (typeof window !== 'undefined') {
          // Clear localStorage keys
          Object.keys(localStorage).forEach((key) => {
            if (
              key.startsWith('ck_') || 
              key.startsWith('_ck') || 
              key.startsWith('kit_') || 
              key.startsWith('formkit') ||
              key.includes('998bd02e5b') ||
              key.includes('9844295')
            ) {
              localStorage.removeItem(key);
            }
          });

          // Clear sessionStorage keys
          Object.keys(sessionStorage).forEach((key) => {
            if (
              key.startsWith('ck_') || 
              key.startsWith('_ck') || 
              key.startsWith('kit_') || 
              key.startsWith('formkit') ||
              key.includes('998bd02e5b') ||
              key.includes('9844295')
            ) {
              sessionStorage.removeItem(key);
            }
          });

          // Clear document cookies
          document.cookie.split(';').forEach((cookie) => {
            const name = cookie.split('=')[0].trim();
            if (
              name.startsWith('ck_') || 
              name.startsWith('_ck') || 
              name.startsWith('kit_') ||
              name.includes('998bd02e5b') ||
              name.includes('9844295')
            ) {
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
              document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
            }
          });
        }
      } catch (e) {
        console.error('Error clearing Kit cookies/storage:', e);
      }
    };

    clearKitStorageAndCookies();

    // 2. Remove any previously existing Kit scripts or injected forms to allow fresh execution
    const existingScript = document.querySelector('script[data-uid="998bd02e5b"]');
    if (existingScript) {
      existingScript.remove();
    }

    // 3. Inject the Kit Script fresh
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '998bd02e5b');
    script.src = `https://fantastic-motivator-3431.kit.com/998bd02e5b/index.js?t=${Date.now()}`;
    document.body.appendChild(script);

    // 4. Also add a 5-second guarantee timer to ensure the modal opens even if ConvertKit delays
    const timer = setTimeout(() => {
      clearKitStorageAndCookies();
      
      // Check if modal exists in DOM and trigger open if hidden
      const modal = document.querySelector('.formkit-modal, [data-uid="998bd02e5b"][data-format="modal"]');
      if (modal) {
        const form = modal.closest('.formkit-form') || modal;
        if (form) {
          form.style.display = 'block';
        }
      }

      // Trigger ConvertKit window hook if available
      if (window.__sv_forms && window.__sv_forms.length > 0) {
        window.__sv_forms.forEach((f) => {
          if (f.element) {
            f.element.style.display = 'block';
          }
        });
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}
