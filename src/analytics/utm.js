const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

export function persistUtmParams() {
  if (typeof window === 'undefined') {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const stored = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      sessionStorage.setItem(key, value);
      stored[key] = value;
    }
  });

  return stored;
}

export function getStoredUtmParams() {
  if (typeof window === 'undefined') {
    return {};
  }

  return UTM_KEYS.reduce((acc, key) => {
    const value = sessionStorage.getItem(key);
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
