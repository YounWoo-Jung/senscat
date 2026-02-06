# Senscat Landing Page

Senscat의 메인 랜딩 페이지입니다. Astro와 Tailwind CSS를 사용하여 구축되었습니다.

## 기술 스택

- **Astro** - 정적 사이트 생성 프레임워크
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **TypeScript** - 타입 안정성
- **다국어 지원** - 한국어(기본) / 영어

## 프로젝트 구조

```
senscat/
├── public/           # 정적 파일 (favicon, ads.txt, robots.txt)
├── src/
│   ├── components/   # 재사용 가능한 컴포넌트
│   ├── layouts/      # 레이아웃 템플릿
│   ├── pages/        # 페이지 라우트
│   │   ├── en/       # 영어 페이지
│   │   └── *.astro   # 한국어 페이지
│   ├── config.ts     # 사이트 설정
│   └── i18n.ts       # 다국어 번역
├── astro.config.mjs  # Astro 설정
├── tailwind.config.mjs # Tailwind 설정
└── package.json
```

## 로컬 개발

### 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 기본적으로 `http://localhost:4321`에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드 결과는 `dist/` 디렉토리에 생성됩니다.

### 미리보기

빌드된 사이트를 로컬에서 미리보려면:

```bash
npm run preview
```

## 배포

### GitHub Pages로 배포

1. **GitHub 저장소 생성 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/senscat.git
   git push -u origin main
   ```

2. **GitHub Actions 워크플로우 설정**
   
   `.github/workflows/deploy.yml` 파일이 자동으로 생성되도록 설정하거나, 수동으로 생성:

   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: actions/configure-pages@v4
         - uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v4
   ```

3. **GitHub 저장소 설정**
   - Settings → Pages → Source: "GitHub Actions" 선택
   - 저장소 이름이 `senscat`인 경우, 사이트 URL은 `https://yourusername.github.io/senscat`가 됩니다.

4. **도메인 연결 (선택사항)**
   - GitHub Pages 설정에서 Custom domain에 `senscat.com` 입력
   - DNS 설정에서 CNAME 레코드 추가:
     ```
     senscat.com → yourusername.github.io
     www.senscat.com → yourusername.github.io
     ```

### Cloudflare Pages로 배포

1. **Cloudflare 계정에 로그인**

2. **프로젝트 생성**
   - Workers & Pages → Create application → Pages → Connect to Git
   - GitHub 저장소 선택

3. **빌드 설정**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (기본값)

4. **환경 변수 (필요시)**
   - 환경 변수가 필요한 경우 Pages 설정에서 추가

5. **도메인 연결**
   - Pages 프로젝트 → Custom domains → Add custom domain
   - `senscat.com` 및 `www.senscat.com` 추가
   - DNS 설정은 Cloudflare가 자동으로 처리하거나, 기존 DNS에서 CNAME 레코드 설정:
     ```
     senscat.com → your-project.pages.dev
     www.senscat.com → your-project.pages.dev
     ```

6. **배포**
   - Git에 푸시하면 자동으로 배포됩니다.

## 설정 변경

### 서비스 URL 변경

`src/config.ts` 파일에서 서비스 URL을 수정할 수 있습니다:

```typescript
export const config = {
  services: [
    {
      id: 'picktube',
      url: 'https://picktube.senscat.com', // 여기 수정
      // ...
    },
    // ...
  ],
};
```

### 사이트 정보 변경

`src/config.ts`의 `site` 객체에서 사이트 이름, 도메인, 이메일 등을 변경할 수 있습니다.

### 업데이트 내용 추가

`src/config.ts`의 `updates` 배열에 새로운 업데이트를 추가할 수 있습니다.

## 다국어 지원

- 기본 언어: 한국어 (`/`)
- 영어: `/en/*` 경로
- 언어 전환은 헤더의 언어 토글 버튼을 통해 가능합니다.

## 다크모드

사이트는 다크모드를 지원합니다. 헤더의 다크모드 토글 버튼을 클릭하여 전환할 수 있으며, 사용자의 시스템 설정을 기본값으로 사용합니다.

## SEO

- `robots.txt`: 검색 엔진 크롤러 설정
- `sitemap.xml`: Astro sitemap 플러그인으로 자동 생성
- 메타 태그: 각 페이지에 적절한 title과 description 설정
- 구조화된 데이터: 시맨틱 HTML 사용

## AdSense 준비

- `public/ads.txt`: AdSense 승인 후 실제 publisher ID로 업데이트 필요
- 개인정보처리방침 페이지에 쿠키 및 광고 관련 고지 포함
- 충분한 콘텐츠 제공 (빈 페이지 방지)

## 라이선스

이 프로젝트는 개인 사용 목적으로 제작되었습니다.
