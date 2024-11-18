# ts-monorepo-template

**@NaverPayDev/frontend**에서 제공하는 **TypeScript Monorepo Template**입니다. 이 템플릿은 Turbo, ESLint, Prettier, TypeScript와 같은 도구를 사용하여 Monorepo 프로젝트를 효율적으로 관리할 수 있도록 설계되었습니다.

---

## 주요 특징

- **TypeScript**: 최신 JavaScript 개발을 위한 핵심 언어 지원.
- **Monorepo 관리**: [Turbo](https://turbo.build/)를 활용한 빠르고 효율적인 작업 실행.
- **Linting**: [ESLint](https://eslint.org/)로 코드 품질 관리.
- **코드 포맷팅**: [Prettier](https://prettier.io/)로 일관된 코드 스타일 유지.
- **Markdown Linting**: 문서의 표준을 준수하도록 설정.
- **릴리스 관리**: [Changesets](https://github.com/changesets/changesets)로 간단한 버전 관리 및 배포.
- **자동화**: [Lefthook](https://github.com/evilmartians/lefthook)과 lint-staged를 활용한 Git 훅 사전 설정.
- **템플릿 활용성**: 개발 및 CI/CD 워크플로를 위한 사전 구성 스크립트 제공.

---

## 사전 요구 사항

- **Node.js**: 버전 `22.11.0`
- **pnpm**: 버전 `9.12.3` (기본 패키지 매니저로 설정)

환경 확인:

```bash
node -v
pnpm -v
```

---

## 설치 방법

1. **레포지토리 클론** 혹은 **use this template**:

   ```bash
   git clone https://github.com/NaverPayDev/ts-monorepo-template.git
   cd ts-monorepo-template
   ```

2. **의존성 설치**:

   ```bash
   pnpm install
   ```

---

## 스크립트

다양한 작업을 위한 사전 정의된 스크립트가 포함되어 있습니다:

| 스크립트                | 설명                                                                 |
|-------------------------|----------------------------------------------------------------------|
| `pnpm start`            | 모든 패키지에서 시작 스크립트를 실행.                                 |
| `pnpm build`            | Monorepo의 모든 패키지를 빌드.                                       |
| `pnpm test`             | 모든 패키지에서 테스트 실행.                                         |
| `pnpm lint`             | ESLint로 코드 린트.                                                 |
| `pnpm lint:fix`         | 린트 문제를 자동으로 수정.                                           |
| `pnpm prettier`         | Prettier로 포맷 확인.                                               |
| `pnpm prettier:fix`     | Prettier로 코드 포맷 자동 수정.                                      |
| `pnpm markdownlint`     | Markdown 파일 린트 실행.                                            |
| `pnpm markdownlint:fix` | Markdown 린트 문제 자동 수정.                                       |
| `pnpm clean`            | 작업 공간 초기화 및 의존성 재설치.                                   |
| `pnpm release:canary`   | Canary 릴리스 빌드 및 배포 (Git 태그 없음).                          |
| `pnpm release`          | 안정 릴리스 빌드 및 배포.                                           |

---

## 린트 및 포맷팅

**ESLint**와 **Prettier**가 린트와 코드 포맷팅을 위해 설정되어 있습니다. 커스텀 설정은 다음과 같습니다:

- **ESLint Config**: `@naverpay/eslint-config`
- **Prettier Config**: `@naverpay/prettier-config`

Git 커밋 전 `lint-staged`를 통해 자동으로 린트 및 포맷팅이 적용됩니다.

---

## Markdown 린트

Markdown 파일의 일관성을 유지하기 위해 `@naverpay/markdown-lint`를 사용합니다.

수동 실행:

```bash
pnpm markdownlint
pnpm markdownlint:fix
```

---

## Changeset 및 릴리스 관리

버전 관리 및 배포는 [Changesets](https://github.com/changesets/changesets)를 사용합니다.

---

## Contribution Guide

1. 레포지토리를 포크하고 새 브랜치를 생성합니다.
2. 모든 린트 및 테스트를 통과하도록 코드를 수정합니다.
3. 풀 리퀘스트를 제출합니다.

개선점이나 문제점이 있다면 레포지토리에 Issue를 열어주세요.

---

## 라이선스

이 템플릿은 네이버 파이낸셜 유저플랫폼 산하 공통개발TF (@NaverPayDev/frontend)에 의해 관리되며, 해당 라이선스 정책을 따릅니다.

---

`ts-monorepo-template`로 생산적인 Monorepo 개발 환경을 경험해보세요! 🎉
