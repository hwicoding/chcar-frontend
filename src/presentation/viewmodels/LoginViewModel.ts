import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import { Alert } from 'react-native';
import { authRepository } from '@/shared/DependencyInjection';

export const useLoginViewModel = (navigation: any) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('알림', '이메일과 비밀번호를 모두 입력해주세요.');
            return;
        }

        setIsLoading(true);

        try {
            const user = await authRepository.login(email, password);

            // Redux 상태 업데이트
            dispatch(login({ email: user.email, name: user.name }));

            // 홈 화면으로 이동 (Stack Navigation)
            navigation.replace('Home');
        } catch (error) {
            Alert.alert('오류', '로그인에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        handleLogin,
    };
};
