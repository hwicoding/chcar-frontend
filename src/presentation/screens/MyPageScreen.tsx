import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/shared/Colors';

export const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>마이 페이지</Text>
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
