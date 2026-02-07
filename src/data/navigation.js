export const externalLinks = {
  donate: 'https://www.scenicsantaritas.org/donate',
  subscribe: 'https://www.scenicsantaritas.org/email-membership-sign-up',
  mineTruth: 'https://www.rosemontminetruth.com',
  shop: 'https://tinyurl.com/ShopSSSR',
  volunteerSignup: 'https://secure.lglforms.com/form_engine/s/8Hpkfr8EvL8k0S8pOUt-Ow',
};

export const mainNavigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Act Now!',
    path: '/act-now',
    children: [
      { label: 'Write Letters', path: '/letters' },
      { label: 'Volunteer', path: '/volunteer' },
      { label: 'Sign the Petition', path: '/petition' },
      { label: 'Subscribe', path: '/subscribe' },
      { label: 'Shop', path: externalLinks.shop, external: true },
    ],
  },
  {
    label: 'Events',
    path: '/events',
  },
  {
    label: 'Copper World Updates',
    path: '/updates',
    children: [
      { label: 'Copper World News', path: '/news' },
      { label: 'Fact Sheets and Videos', path: '/updates' },
      { label: 'Rosemont Mine Truth', path: '/rosemont' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  {
    label: 'Maps',
    path: '/maps',
  },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Mine Truth', path: '/rosemont' },
    { label: 'Events', path: '/events' },
    { label: 'Newsletter', path: '/subscribe' },
    { label: 'Newsroom', path: '/news' },
    { label: 'Library', path: '/maps' },
  ],
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/ScenicSantaRitas/', icon: 'facebook' },
    { label: 'YouTube', url: 'https://www.youtube.com/@scenicsantaritas', icon: 'youtube' },
  ],
};

export const contactInfo = {
  address: '8987 E Tanque Verde #309-157',
  city: 'Tucson, AZ 85749',
  phone: '520 261-5014',
  email: 'info@scenicsantaritas.org',
};
