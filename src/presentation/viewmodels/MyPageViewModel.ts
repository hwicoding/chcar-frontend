import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { logout } from '@/store/slices/authSlice';

export interface MenuItem {
    id: number;
    title: string;
    iconName: string;
    action?: () => void;
    isDestructive?: boolean;
}

export const useMyPageViewModel = (navigation: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);

    const handleLogout = () => {
        Alert.alert(
            '로그아웃',
            '정말 로그아웃 하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                {
                    text: '로그아웃',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(logout());
                        navigation.replace('Auth');
                    }
                },
            ]
        );
    };

    const menuItems: MenuItem[] = [
        { id: 1, title: '공지사항', iconName: 'notifications-outline' },
        { id: 2, title: '자주 묻는 질문', iconName: 'help-circle-outline' },
        { id: 3, title: '앱 설정', iconName: 'settings-outline' },
        { id: 4, title: '약관 및 정책', iconName: 'document-text-outline' },
        {
            id: 5,
            title: '로그아웃',
            iconName: 'log-out-outline',
            action: handleLogout,
            isDestructive: true
        },
    ];

    const onMenuPress = (item: MenuItem) => {
        if (item.action) {
            item.action();
        } else {
            Alert.alert('알림', '준비 중인 기능입니다.');
        }
    };

    return {
        user,
        menuItems,
        onMenuPress,
    };
};
