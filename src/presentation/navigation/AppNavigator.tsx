import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '@/shared/Colors';

// Screens
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { PredictionScreen } from '../screens/PredictionScreen';
import { MyPageScreen } from '../screens/MyPageScreen';

// Types
export type RootStackParamList = {
    Auth: undefined;
    Home: undefined;
    Prediction: undefined;
    MyPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary },
                    headerTintColor: Colors.white,
                }}
            >
                {/* 초기 화면은 로그인 화면 (헤더 숨김) */}
                <Stack.Screen
                    name="Auth"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                {/* 메인 화면들 */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: '홈' }}
                />
                <Stack.Screen
                    name="Prediction"
                    component={PredictionScreen}
                    options={{ title: '내 차 시세 예측' }}
                />
                <Stack.Screen
                    name="MyPage"
                    component={MyPageScreen}
                    options={{ title: '마이 페이지' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
