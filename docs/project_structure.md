# 프로젝트 구조 및 흐름 (Project Structure & Flow)

## 개요 (Overview)
이 프로젝트는 **Clean Architecture**와 **MVVM (Model-View-ViewModel)** 패턴을 결합하여 따릅니다.

## 디렉토리 구조 (Directory Structure)
```
chcar-frontend/
├── App.tsx              # 애플리케이션 진입점 (Entry Point)
├── app.json             # Expo 설정 파일
├── src/
│   ├── presentation/    # UI 계층 (MVVM)
│   │   ├── screens/     # 화면 컴포넌트
│   │   ├── viewmodels/  # 화면 로직 및 상태 (Hooks)
│   │   ├── components/  # 재사용 가능한 UI 컴포넌트
│   │   └── navigation/  # 네비게이션 설정
│   ├── domain/          # 비즈니스 로직 계층 (순수 TS)
│   │   ├── entities/    # 핵심 데이터 모델
│   │   └── usecases/    # 비즈니스 규칙
│   ├── data/            # 데이터 계층
│   │   ├── repositories/# 리포지토리 구현체
│   │   ├── sources/     # API / 로컬 데이터 소스
│   │   └── dtos/        # 데이터 전송 객체 (DTO)
│   ├── store/           # 전역 상태 관리 (Redux Toolkit)
│   └── shared/          # 공통 유틸리티 및 상수
└── docs/                # 프로젝트 문서
```

## 데이터 흐름 (Data Flow)
1.  **View** (Screen)가 **ViewModel**을 통해 액션을 트리거합니다.
2.  **ViewModel**은 Domain 계층의 **UseCase**를 호출합니다.
3.  **UseCase**는 **Repository** 인터페이스와 상호작용합니다.
4.  **Repository Implementation** (Data 계층)은 **Sources** (API/DB)에서 데이터를 가져옵니다.
5.  데이터는 다시 **ViewModel**로 전달되어 상태(State)를 업데이트합니다.
6.  **View**는 상태를 구독(Observe)하고 있어 화면을 다시 그립니다(Re-render).
