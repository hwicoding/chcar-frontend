export interface Car {
    id: string;
    name: string;
    price: string;
    year: string;
    mileage: string;
    imageUrl?: string;
}

export interface PredictionResult {
    minPrice: number;
    maxPrice: number;
    avgPrice: number;
    predictedDate: string;
}
