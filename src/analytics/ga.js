import { getStoredUtmParams } from './utm';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  if (window.gtag) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
}

export function trackPageview(path) {
  if (!window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    ...getStoredUtmParams(),
  });
}

export function trackEvent(action, params = {}) {
  if (!window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', action, {
    ...getStoredUtmParams(),
    ...params,
  });
}
