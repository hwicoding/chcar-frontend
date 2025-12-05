import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { carRepository } from '@/shared/DependencyInjection';

// 더미 데이터 타입 정의
export interface BannerItem {
    id: number;
    title: string;
    imageUrl: string; // 실제로는 로컬 이미지나 URL 사용
    backgroundColor: string;
}

export interface MenuItem {
    id: number;
    title: string;
    iconName: string;
    route: string;
}

export interface CarItem {
    id: number;
    name: string;
    price: string;
    year: string;
    mileage: string;
    imageUrl: string;
}

export const useHomeViewModel = (navigation: any) => {
    const [banners, setBanners] = useState<BannerItem[]>([]);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [recommendedCars, setRecommendedCars] = useState<CarItem[]>([]);

    useEffect(() => {
        // 초기 데이터 로드 (API 호출 시뮬레이션)
        loadData();
    }, []);

    const loadData = async () => {
        // 1. 배너 데이터
        setBanners([
            { id: 1, title: '내 차 팔기,\n최고가로 도전하세요!', imageUrl: '', backgroundColor: '#E8F5E9' },
            { id: 2, title: 'CHCAR\n신규 가입 이벤트', imageUrl: '', backgroundColor: '#E3F2FD' },
        ]);

        // 2. 퀵 메뉴 데이터
        setMenuItems([
            { id: 1, title: '내 차 팔기', iconName: 'car-sport', route: 'Prediction' },
            { id: 2, title: '내 차 시세', iconName: 'stats-chart', route: 'Prediction' },
            { id: 3, title: '차량 검색', iconName: 'search', route: 'Home' }, // 임시
            { id: 4, title: '마이페이지', iconName: 'person', route: 'MyPage' },
        ]);

        // 3. 추천 차량 데이터 (Repository 사용)
        try {
            const cars = await carRepository.getRecommendedCars();
            // Domain Entity -> View Model Item 변환
            const viewCars = cars.map(car => ({
                id: Number(car.id),
                name: car.name,
                price: car.price,
                year: car.year,
                mileage: car.mileage,
                imageUrl: car.imageUrl || 'https://via.placeholder.com/150'
            }));
            setRecommendedCars(viewCars);
        } catch (error) {
            console.error('Failed to load recommended cars', error);
        }
    };

    const onMenuPress = (route: string) => {
        if (route) {
            navigation.navigate(route);
        } else {
            Alert.alert('알림', '준비 중인 기능입니다.');
        }
    };

    const onCarPress = (carName: string) => {
        Alert.alert('차량 상세', `${carName} 차량을 선택하셨습니다.`);
    };

    return {
        banners,
        menuItems,
        recommendedCars,
        onMenuPress,
        onCarPress,
    };
};
