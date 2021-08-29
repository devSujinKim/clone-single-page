# clone-single-page

:house: [Homepage](https://mystifying-davinci-f4a7f7.netlify.app)

## 실행방법

```sh
npm install
npm run dev
```

## 배포방법

```
npm run build
```

## 기술 스택

- 웹 프레임워크 : React, Next.js
- UI 프레임워크 : [Emotion](https://emotion.sh/docs/introduction)

## 폴더 구조

```bash
│
│
├── src/                      - 클라이언트 사이드 폴더
│   ├── components/           - 전역 사용 컴포넌트
│   ├── containers/           - 페이지 내부 구현
│   ├── mocks/                - 목업 파일
│   └── pages/                - 페이지 기본 설정, URL path 설정
│ 
├── .babelrc                  - babel 설정
├── .eslintrc.json            - eslint 설정
├── .gitignore                - git 설정
├── .prettierrc               - prettier 설정
├── jsconfig.json             - 파일 절대 경로 설정
├── package.json              - npm 설정
└── README.md                 - 리드미 파일
```
