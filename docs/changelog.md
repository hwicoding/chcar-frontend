# 변경 이력 (Changelog)

## [Unreleased]

### 추가됨 (Added)
- Expo (Blank TypeScript 템플릿) 기반 초기 프로젝트 설정.
- 앱 이름을 "CHCAR", 식별자(slug)를 "chcar-app"으로 설정.
- 프로젝트 문서화 구조 수립.
- .gitignore 파일 최적화 (표준 설정 + Expo 특화 설정 병합).
- **네비게이션 및 아키텍처**:
    - React Navigation (Stack) 설정 (Drawer는 Reanimated 이슈로 보류).
    - Clean Architecture + MVVM 폴더 구조 및 Redux Toolkit 설정.
- **주요 화면 구현**:
    - **로그인 화면 (LoginScreen)**: MVVM 패턴 적용, 유효성 검사 및 홈 이동 로직.
    - **회원가입 화면 (SignUpScreen)**: 입력 폼 검증, 비밀번호 확인, 가입 시뮬레이션 로직 구현.
    - **홈 화면 (HomeScreen)**: 메인 배너, 퀵 메뉴, 추천 차량 리스트 UI 구현.
    - **시세 예측 화면 (PredictionScreen)**: 차량 정보 입력 폼, 시세 조회 시뮬레이션 로직 및 결과 카드 UI.
    - **마이 페이지 (MyPageScreen)**: 사용자 프로필 표시, 설정 메뉴 리스트, 로그아웃 기능 구현.

### 수정됨 (Changed)
- **Reanimated 이슈 해결**:
    - Expo Go (Android)와의 버전 호환성 문제(Worklets Mismatch, NPE)로 인해 `react-native-reanimated` 의존성 및 Babel 플러그인 임시 제거.
    - 네비게이션 전략을 Drawer+Stack에서 **Stack Only**로 변경하여 앱 안정성 확보.
