# Worklog — portfolio-dykim

## 2026-07-17 — Projects에 "App Review Digest"(appbot-digest) 카드 추가
- **요청**: appbot-digest 대시보드를 서브도메인(appbot.daiyongkim.com)으로 연결하고, 포트폴리오 Projects 섹션에 카드로 노출.
- **결과**:
  - `appbot.daiyongkim.com` 서브도메인 세팅 완료 (GoDaddy CNAME → daiyongg-kim.github.io, appbot-digest repo Pages custom domain, HTTPS 200 확인).
  - `src/data/portfolio.jsx` `projectsData`에 id 11 "App Review Digest" 추가. Live Demo 링크 = https://appbot.daiyongkim.com, Source = github.com/daiyongg-kim/appbot-digest. status: Published.
  - 로컬 `npm run build` 통과 확인. 배포는 GitHub Actions(deploy.yml)가 push 시 자동 빌드→Pages.
  - 참고: 이 repo는 node_modules/dist까지 git 추적 중이나 CI가 `npm ci` + `vite build`로 새로 빌드하므로, 소스(`portfolio.jsx`)만 커밋함.

## 2026-08-09 — leetcode.daiyongkim.com 신규 + Projects에 "LeetCode Daily Jump" 카드 추가
- **요청**: 접속하면 바로 그날의 LeetCode Daily 문제로 들어가는 페이지.
- **결과**:
  - 새 repo `daiyongg-kim/leetcode-daily` 생성 (로컬 `~/Public/WebProject/leetcode-daily`).
  - LeetCode는 데일리 문제를 GraphQL(`activeDailyCodingChallengeQuestion`)로만 노출하고 CORS가 막혀 브라우저 직접 호출 불가 → GitHub Actions 크론(매시 :05 UTC)이 서버사이드로 조회해 `dist/index.html`(meta refresh + `location.replace`)을 생성·배포하는 방식 채택. 요청 시점 연산 0.
  - 크론 지연으로 페이지가 이전 UTC 날짜로 빌드돼 있으면 어제 문제 대신 `leetcode.com/problemset/`로 폴백.
  - GoDaddy CNAME `leetcode` → daiyongg-kim.github.io. Pages 커스텀 도메인 최초 설정 시 인증서 발급이 20분 넘게 정체 → 도메인 해제 후 재설정하니 즉시 approved. HTTPS 강제 활성화, HTTP→HTTPS 301 확인.
  - `src/data/portfolio.jsx`에 id 12 "LeetCode Daily Jump" 추가. Live Demo = https://leetcode.daiyongkim.com, Source = github.com/daiyongg-kim/leetcode-daily.
