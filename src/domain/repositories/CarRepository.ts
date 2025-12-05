import { Car, PredictionResult } from '../entities/Car';

export interface CarRepository {
    getRecommendedCars(): Promise<Car[]>;
    predictPrice(maker: string, model: string, year: string, mileage: string): Promise<PredictionResult>;
}
