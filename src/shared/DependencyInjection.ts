import { AuthDataSource, MockAuthDataSource } from '@/data/sources/AuthDataSource';
import { CarDataSource, MockCarDataSource } from '@/data/sources/CarDataSource';
import { AuthRepositoryImpl } from '@/data/repositories/AuthRepositoryImpl';
import { CarRepositoryImpl } from '@/data/repositories/CarRepositoryImpl';
import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { CarRepository } from '@/domain/repositories/CarRepository';

// Data Sources
const authDataSource: AuthDataSource = new MockAuthDataSource();
const carDataSource: CarDataSource = new MockCarDataSource();

// Repositories
export const authRepository: AuthRepository = new AuthRepositoryImpl(authDataSource);
export const carRepository: CarRepository = new CarRepositoryImpl(carDataSource);
