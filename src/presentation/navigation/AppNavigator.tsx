import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CHCAR' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
