# NestJS Movie API

이 프로젝트는 NestJS를 사용하여 구현된 간단한 영화 정보 관리 API입니다. CRUD 작업을 지원하며, 영화의 제목, 감독, 개봉 연도 정보를 관리합니다.

## 기능

- 모든 영화 목록 조회
- 특정 영화 상세 정보 조회
- 새로운 영화 정보 추가
- 기존 영화 정보 수정
- 영화 정보 삭제

## 시작하기

### 필수 조건

- Node.js (v14 이상)
- npm (v6 이상)

### 설치

1. 리포지토리를 클론합니다:

   ```
   git clone https://github.com/newri0807/nest-deploy-vercel.git
   cd nestjs-movie-api
   ```

2. 필요한 패키지를 설치합니다:

   ```
   npm install
   ```

3. 개발 서버를 실행합니다:
   ```
   npm run start:dev
   ```

이제 API가 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트

- GET `/movies`: 모든 영화 목록을 조회합니다.
- GET `/movies/:id`: 특정 ID의 영화 정보를 조회합니다.
- POST `/movies`: 새로운 영화 정보를 추가합니다.
- PUT `/movies/:id`: 특정 ID의 영화 정보를 수정합니다.
- DELETE `/movies/:id`: 특정 ID의 영화 정보를 삭제합니다.

## 사용 예시

### 모든 영화 조회

```
curl http://localhost:3000/movies
```

### 특정 영화 조회

```
curl http://localhost:3000/movies/1
```

### 새 영화 추가

```
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title": "새 영화", "director": "새 감독", "releaseYear": 2023}'
```

## 테스트

단위 테스트와 E2E 테스트를 실행하려면 다음 명령어를 사용합니다:

```
npm run test
npm run test:e2e
```

## 구조

```
nomad-movie-api
├─ .prettierrc
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ main.ts
│  └─ movie
│     ├─ movie.controller.spec.ts
│     ├─ movie.controller.ts
│     ├─ movie.entity.ts
│     ├─ movie.module.ts
│     ├─ movie.service.spec.ts
│     └─ movie.service.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
├─ tsconfig.json
└─ vercel.json

```
