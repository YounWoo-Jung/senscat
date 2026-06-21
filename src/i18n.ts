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
      tagline: '디지털 서비스 기획·개발·운영',
    },
    og: {
      imageAlt: '센스냥 — 센스AI, 센스매스 디지털 서비스·외주개발 회사',
    },
    sections: {
      services: '사업 영역',
      whatWeBuild: '회사 소개',
      updates: '주요 내역',
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
      tagline: 'Digital service planning, development, and operation',
    },
    og: {
      imageAlt: 'Senscat — 센스AI, 센스매스 digital service & custom development company',
    },
    sections: {
      services: 'Services',
      whatWeBuild: 'Company',
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
