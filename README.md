# CHCAR (치카) 🚗

> **Clean Architecture**와 **MVVM 패턴**을 적용한 **React Native (Expo)** 기반의 차량 서비스 애플리케이션입니다.

## 📖 프로젝트 소개
이 프로젝트는 유지보수성과 확장성을 최우선으로 고려하여 설계되었습니다.
단순한 기능 구현을 넘어, **엔터프라이즈급 아키텍처**를 모바일 환경에 적용하는 것을 목표로 합니다.

## 🛠 기술 스택 (Tech Stack)
| 분류 | 기술 |
| :-- | :-- |
| **Framework** | React Native (Expo SDK 52) |
| **Language** | TypeScript |
| **Architecture** | Clean Architecture + MVVM |
| **State Management** | Redux Toolkit |
| **Navigation** | React Navigation (Stack) |
| **Styling** | StyleSheet (Native) |

## 🏗 아키텍처 (Architecture)
이 프로젝트는 **관심사의 분리(Separation of Concerns)**를 위해 3계층 구조를 따릅니다.

- **Presentation Layer**: UI 및 화면 로직 (MVVM)
- **Domain Layer**: 순수 비즈니스 로직 (Entities, UseCases)
- **Data Layer**: 데이터 처리 및 저장 (Repositories, DTOs)

👉 [자세한 아키텍처 및 폴더 구조 보기](docs/project_structure.md)

## 📂 문서 (Documentation)
프로젝트의 상세 내용은 `docs` 폴더에 정리되어 있습니다.

- [📜 변경 이력 (Changelog)](docs/changelog.md)
- [🏗 프로젝트 구조 (Project Structure)](docs/project_structure.md)
- [💻 기술 스택 상세 (Tech Stack)](docs/tech_stack.md)

## 🚀 실행 방법 (Getting Started)

### 설치
```bash
npm install
```

### 실행
```bash
npx expo start
```
- **Android**: `a` 키를 눌러 에뮬레이터 실행 또는 Expo Go 앱으로 QR 스캔
- **iOS**: `i` 키를 눌러 시뮬레이터 실행 또는 Expo Go 앱으로 QR 스캔
