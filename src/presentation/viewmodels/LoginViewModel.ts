import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import { Alert } from 'react-native';

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

        // TODO: 실제 API 연동 시 비동기 처리
        setTimeout(() => {
            setIsLoading(false);

            // Redux 상태 업데이트
            dispatch(login({ email, name: '사용자' }));

            // 홈 화면으로 이동 (Stack Navigation)
            navigation.replace('Home');
        }, 1000);
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
