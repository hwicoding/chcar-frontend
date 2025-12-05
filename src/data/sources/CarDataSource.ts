import { Car, PredictionResult } from '@/domain/entities/Car';

export interface CarDataSource {
    getRecommendedCars(): Promise<Car[]>;
    predictPrice(maker: string, model: string, year: string, mileage: string): Promise<PredictionResult>;
}

export class MockCarDataSource implements CarDataSource {
    async getRecommendedCars(): Promise<Car[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: '1', name: '그랜저 IG', price: '2,500만원', year: '2020', mileage: '3만km' },
                    { id: '2', name: '쏘렌토 MQ4', price: '3,200만원', year: '2021', mileage: '2만km' },
                    { id: '3', name: '아반떼 CN7', price: '1,800만원', year: '2022', mileage: '1만km' },
                ]);
            }, 800);
        });
    }

    async predictPrice(maker: string, model: string, year: string, mileage: string): Promise<PredictionResult> {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simple mock logic for price variation
                const basePrice = 2000;
                const randomVariation = Math.floor(Math.random() * 500);
                const min = basePrice + randomVariation;
                const max = min + 300;
                const avg = Math.floor((min + max) / 2);

                resolve({
                    minPrice: min,
                    maxPrice: max,
                    avgPrice: avg,
                    predictedDate: new Date().toLocaleDateString(),
                });
            }, 1500);
        });
    }
}
