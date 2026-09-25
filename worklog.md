# Worklog — portfolio-dykim

## 2026-09-24 — 메타 경력 정합·OG 이미지·파비콘·제품 링크 (마케팅 진단 B06)

- **요청**: 마케팅 인계 계획 P1 진행("다른것 부터 할수 있으면 하자")
- **결과**:
  - `index.html` title/meta/OG/Twitter/JSON-LD의 "10+ years" → **15+** (본문·`portfolio.jsx` 경력 Mar 2010~ 기준과 일치). Contact 섹션 "10+ years of Android" → 15+. "10+ Team Members Led"는 별개 지표라 유지
  - `public/og-image.jpg`(1200×630) 신규 — 기존 메타가 가리키던 파일이 404였음
  - `public/favicon.svg`(DK, primary #0284c7) 신규, `vite.svg` 참조 교체
  - 앱 카드 App Store 링크 5개에 `ct=portfolio-<앱>` 부여, FitnessLog iOS 15+ → 17+
  - Footer Quick Links에 SoSo Family(UTM `utm_source=daiyongkim&utm_medium=referral`)·Blog 링크 추가
  - `vite build` 임시 폴더 출력으로 검증. 기존 미커밋 `dist/`·`.agents/`·`skills-lock.json`은 건드리지 않음
- **남은 일**: 390px에서 398px 가로 넘침 원인 미조사

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
