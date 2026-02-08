export type Locale = 'ko' | 'en';

export const defaultLocale: Locale = 'ko';
export const locales: Locale[] = ['ko', 'en'];

export const translations = {
  ko: {
    site: {
      name: '센스냥',
    },
    nav: {
      home: '홈',
      about: '소개',
      contact: '연락',
      privacy: '개인정보처리방침',
      terms: '이용약관',
    },
    hero: {
      title: '센스냥',
      tagline: 'tiny products, fast experiments',
    },
    og: {
      imageAlt: '센스냥 — tiny products, fast experiments',
    },
    sections: {
      services: '서비스',
      whatWeBuild: 'What we build',
      updates: '업데이트',
    },
    buttons: {
      visit: '방문하기',
      learnMore: '더 알아보기',
      contact: '연락하기',
    },
    footer: {
      about: '소개',
      contact: '연락',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      copyright: '© 2026 센스냥. All rights reserved.',
    },
  },
  en: {
    site: {
      name: 'Senscat',
    },
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    hero: {
      title: 'Senscat',
      tagline: 'tiny products, fast experiments',
    },
    og: {
      imageAlt: 'Senscat — tiny products, fast experiments',
    },
    sections: {
      services: 'Services',
      whatWeBuild: 'What we build',
      updates: 'Updates',
    },
    buttons: {
      visit: 'Visit',
      learnMore: 'Learn More',
      contact: 'Contact',
    },
    footer: {
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Senscat. All rights reserved.',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
