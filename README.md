# 젬 체인 (Gem Chain)
단일 파일 HTML5 낙하형 퍼즐 게임. 빌드 없이 `index.html`을 브라우저로 열면 실행됩니다. (폰트는 Google Fonts를 사용하며 오프라인이면 시스템 글꼴로 대체됩니다.)

- `index.html` : 독립 실행용 전체 소스 (HTML + CSS + JS)
- `gemchain.artifact.html` : claude.ai 아티팩트로 게시한 원본(문서 골격 태그 없는 버전)

조작: ← → 이동 / ↑·X 시계 회전 / Z 반시계 회전 / ↓ 소프트 드롭 / Space 즉시 낙하 / P 일시정지 / M 음소거

## 플레이

https://sandboxwork.github.io/claudesonnet55_game/

모바일에서는 화면 아래의 터치 버튼으로 조작할 수 있습니다.

## 빌드 및 로컬 확인

Node.js 22 이상이 필요합니다. 외부 npm 패키지는 사용하지 않으므로 `npm install` 없이 빌드할 수 있습니다.

```sh
npm run build
python3 -m http.server 8080 --directory dist
```

브라우저에서 http://localhost:8080 으로 접속합니다. 빌드는 게임 JavaScript 문법을 검사하고 `dist/index.html`과 `dist/.nojekyll`을 생성합니다.

## GitHub Pages 배포

`.github/workflows/deploy-pages.yml`이 `main` 브랜치에 push할 때마다 빌드와 배포를 실행합니다. GitHub Actions의 **Deploy GitHub Pages → Run workflow**로 수동 배포할 수도 있습니다.

저장소의 **Settings → Pages → Build and deployment → Source**는 **GitHub Actions**를 사용합니다. 자동 배포는 GitHub에서 제공하는 `GITHUB_TOKEN`과 OIDC를 사용하므로 개인 액세스 토큰(PAT)을 저장소나 Actions secret에 추가할 필요가 없습니다.

게임 코드와 스타일이 HTML에 포함되어 있어 `/claudesonnet55_game/` 하위 경로에서도 그대로 실행됩니다. Google Fonts 연결이 없어도 시스템 글꼴로 게임을 이용할 수 있습니다.
