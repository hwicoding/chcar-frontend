import { useState } from 'react';
import { Alert } from 'react-native';
import { authRepository } from '@/shared/DependencyInjection';

export const useSignUpViewModel = (navigation: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        // 1. 입력값 검증
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('알림', '모든 정보를 입력해주세요.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('알림', '비밀번호가 일치하지 않습니다.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('알림', '비밀번호는 6자 이상이어야 합니다.');
            return;
        }

        setIsLoading(true);

        // 2. 가입 시뮬레이션
        try {
            await authRepository.signUp(email, password, name);

            Alert.alert('환영합니다!', '회원가입이 완료되었습니다.\n로그인 해주세요.', [
                {
                    text: '확인',
                    onPress: () => navigation.goBack(), // 로그인 화면으로 복귀
                },
            ]);
        } catch (error) {
            Alert.alert('오류', '회원가입에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        name, setName,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        isLoading,
        handleSignUp,
    };
};
