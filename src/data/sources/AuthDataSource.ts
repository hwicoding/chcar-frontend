import { User } from '@/domain/entities/User';

export interface AuthDataSource {
    login(email: string, password: string): Promise<User>;
    signUp(email: string, password: string, name: string): Promise<User>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<User | null>;
}

export class MockAuthDataSource implements AuthDataSource {
    async login(email: string, password: string): Promise<User> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: '1',
                    email: email,
                    name: '사용자', // Mock name
                    profileImage: undefined
                });
            }, 1000); // Simulate network delay
        });
    }

    async signUp(email: string, password: string, name: string): Promise<User> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 'new_user_id',
                    email: email,
                    name: name,
                    profileImage: undefined
                });
            }, 1500);
        });
    }

    async logout(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    async getCurrentUser(): Promise<User | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Return null for now to simulate logged out state initially,
                // or return a mock user if we want to simulate persistent login.
                // For this demo, let's assume no persistent session for simplicity or return a mock.
                // Let's return null to force login.
                resolve(null);
            }, 500);
        });
    }
}
