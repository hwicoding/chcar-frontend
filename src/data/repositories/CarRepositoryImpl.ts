import { Car, PredictionResult } from '@/domain/entities/Car';
import { CarRepository } from '@/domain/repositories/CarRepository';
import { CarDataSource } from '../sources/CarDataSource';

export class CarRepositoryImpl implements CarRepository {
    private dataSource: CarDataSource;

    constructor(dataSource: CarDataSource) {
        this.dataSource = dataSource;
    }

    async getRecommendedCars(): Promise<Car[]> {
        return this.dataSource.getRecommendedCars();
    }

    async predictPrice(maker: string, model: string, year: string, mileage: string): Promise<PredictionResult> {
        return this.dataSource.predictPrice(maker, model, year, mileage);
    }
}
