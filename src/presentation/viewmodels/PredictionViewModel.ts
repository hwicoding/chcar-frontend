import { useState } from 'react';
import { Alert } from 'react-native';
import { carRepository } from '@/shared/DependencyInjection';

import { PredictionResult } from '@/domain/entities/Car';

export const usePredictionViewModel = () => {
    const [maker, setMaker] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [mileage, setMileage] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<PredictionResult | null>(null);

    const handlePredict = async () => {
        // 유효성 검사
        if (!maker || !model || !year || !mileage) {
            Alert.alert('알림', '모든 정보를 입력해주세요.');
            return;
        }

        setIsLoading(true);
        setResult(null); // 이전 결과 초기화

        try {
            const prediction = await carRepository.predictPrice(maker, model, year, mileage);
            setResult(prediction);
        } catch (error) {
            Alert.alert('오류', '시세 조회에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
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
