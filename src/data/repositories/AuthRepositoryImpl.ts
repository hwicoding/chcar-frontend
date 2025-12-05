import { User } from '@/domain/entities/User';
import { AuthRepository } from '@/domain/repositories/AuthRepository';
import { AuthDataSource } from '../sources/AuthDataSource';

export class AuthRepositoryImpl implements AuthRepository {
    private dataSource: AuthDataSource;

    constructor(dataSource: AuthDataSource) {
        this.dataSource = dataSource;
    }

    async login(email: string, password: string): Promise<User> {
        return this.dataSource.login(email, password);
    }

    async signUp(email: string, password: string, name: string): Promise<User> {
        return this.dataSource.signUp(email, password, name);
    }

    async logout(): Promise<void> {
        return this.dataSource.logout();
    }

    async getCurrentUser(): Promise<User | null> {
        return this.dataSource.getCurrentUser();
    }
}
