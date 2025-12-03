import { useState } from 'react';
import { Alert } from 'react-native';

export interface PredictionResult {
    minPrice: number;
    maxPrice: number;
    avgPrice: number;
    predictedDate: string;
}

export const usePredictionViewModel = () => {
    const [maker, setMaker] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<PredictionResult | null>(null);

    const handlePredict = () => {
        // 유효성 검사
        if (!maker || !model || !year || !mileage) {
            Alert.alert('알림', '모든 정보를 입력해주세요.');
            return;
        }

        setIsLoading(true);
        setResult(null); // 이전 결과 초기화

        // 시세 조회 시뮬레이션 (1.5초 딜레이)
        setTimeout(() => {
            setIsLoading(false);

            // 임시 결과 데이터 생성
            // 실제로는 API에서 받아온 값을 사용해야 함
            const basePrice = 3000; // 3000만원
            const randomVariation = Math.floor(Math.random() * 500);

            setResult({
                minPrice: basePrice - randomVariation,
                maxPrice: basePrice + randomVariation,
                avgPrice: basePrice,
                predictedDate: new Date().toLocaleDateString(),
            });
        }, 1500);
    };

    const resetForm = () => {
        setMaker('');
        setModel('');
        setYear('');
        setMileage('');
        setResult(null);
    };

    return {
        maker, setMaker,
        model, setModel,
        year, setYear,
        mileage, setMileage,
        isLoading,
        result,
        handlePredict,
        resetForm,
    };
};
