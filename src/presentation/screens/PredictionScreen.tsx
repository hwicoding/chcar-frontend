import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/shared/Colors';

export const PredictionScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>내 차 시세 예측</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    text: {
        fontSize: 20,
        color: Colors.text,
    },
});
