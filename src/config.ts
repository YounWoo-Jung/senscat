export const config = {
  site: {
    name: 'Senscat',
    tagline: 'tiny products, fast experiments',
    domain: 'senscat.com',
    email: 'contact@senscat.com',
  },
  services: [
    {
      id: 'picktube',
      name: 'PickTube',
      description: '유튜브 추천 커뮤니티',
      descriptionEn: 'YouTube recommendation community',
      url: 'https://picktube.senscat.com',
      icon: '📺',
    },
    {
      id: 'signal',
      name: 'Signal',
      description: '찌라시 뉴스',
      descriptionEn: 'News signal',
      url: 'https://signal.senscat.com',
      icon: '📡',
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      description: '포트폴리오',
      descriptionEn: 'Portfolio',
      url: 'https://oneless.senscat.com',
      icon: '💼',
    },
  ],
  updates: [
    {
      date: '2025-02-01',
      title: 'Senscat 런칭',
      titleEn: 'Senscat Launch',
      content: 'Senscat 플랫폼을 공식적으로 런칭했습니다.',
      contentEn: 'Senscat platform officially launched.',
    },
    {
      date: '2025-01-15',
      title: 'PickTube 베타 오픈',
      titleEn: 'PickTube Beta Open',
      content: '유튜브 추천 커뮤니티 PickTube의 베타 서비스를 시작했습니다.',
      contentEn: 'Started beta service for PickTube, a YouTube recommendation community.',
    },
    {
      date: '2024-12-20',
      title: 'Signal 프로토타입 완성',
      titleEn: 'Signal Prototype Complete',
      content: '뉴스 시그널 서비스의 프로토타입을 완성했습니다.',
      contentEn: 'Completed prototype for Signal news service.',
    },
  ],
} as const;
