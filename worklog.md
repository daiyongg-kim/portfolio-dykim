# Worklog — portfolio-dykim

## 2026-07-17 — Projects에 "App Review Digest"(appbot-digest) 카드 추가
- **요청**: appbot-digest 대시보드를 서브도메인(appbot.daiyongkim.com)으로 연결하고, 포트폴리오 Projects 섹션에 카드로 노출.
- **결과**:
  - `appbot.daiyongkim.com` 서브도메인 세팅 완료 (GoDaddy CNAME → daiyongg-kim.github.io, appbot-digest repo Pages custom domain, HTTPS 200 확인).
  - `src/data/portfolio.jsx` `projectsData`에 id 11 "App Review Digest" 추가. Live Demo 링크 = https://appbot.daiyongkim.com, Source = github.com/daiyongg-kim/appbot-digest. status: Published.
  - 로컬 `npm run build` 통과 확인. 배포는 GitHub Actions(deploy.yml)가 push 시 자동 빌드→Pages.
  - 참고: 이 repo는 node_modules/dist까지 git 추적 중이나 CI가 `npm ci` + `vite build`로 새로 빌드하므로, 소스(`portfolio.jsx`)만 커밋함.
