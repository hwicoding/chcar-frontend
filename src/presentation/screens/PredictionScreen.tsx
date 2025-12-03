import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Colors } from '@/shared/Colors';
import { usePredictionViewModel } from '../viewmodels/PredictionViewModel';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PredictionScreen = ({ navigation }: any) => {
    // ... viewModel
    const {
        maker, setMaker,
        model, setModel,
        year, setYear,
        mileage, setMileage,
        isLoading,
        result,
        handlePredict,
        resetForm
    } = usePredictionViewModel();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['top', 'bottom']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <Text style={styles.title}>내 차 시세 조회</Text>
                        <Text style={styles.subtitle}>차량 정보를 입력하고 AI 예상 시세를 확인하세요.</Text>
                    </View>

                    {/* Input Form */}
                    <View style={styles.card}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>제조사</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="예: 현대, 기아, BMW"
                                value={maker}
                                onChangeText={setMaker}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>모델명</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="예: 그랜저, 쏘렌토, 5시리즈"
                                value={model}
                                onChangeText={setModel}
                            />
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                                <Text style={styles.label}>연식</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="예: 2023"
                                    value={year}
                                    onChangeText={setYear}
                                    keyboardType="numeric"
                                    maxLength={4}
                                />
                            </View>
                            <View style={[styles.inputGroup, { flex: 1 }]}>
                                <Text style={styles.label}>주행거리 (km)</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="예: 50000"
                                    value={mileage}
                                    onChangeText={setMileage}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.predictButton}
                            onPress={handlePredict}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color={Colors.white} />
                            ) : (
                                <Text style={styles.predictButtonText}>시세 조회하기</Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Result Section */}
                    {result && (
                        <View style={styles.resultContainer}>
                            <View style={styles.resultHeader}>
                                <Ionicons name="checkmark-circle" size={24} color={Colors.primary} />
                                <Text style={styles.resultTitle}>조회 결과</Text>
                            </View>

                            <View style={styles.priceCard}>
                                <Text style={styles.priceLabel}>예상 시세 범위</Text>
                                <Text style={styles.priceValue}>
                                    {result.minPrice.toLocaleString()}만원 ~ {result.maxPrice.toLocaleString()}만원
                                </Text>
                                <Text style={styles.avgPrice}>
                                    평균 시세: {result.avgPrice.toLocaleString()}만원
                                </Text>
                            </View>

                            <Text style={styles.disclaimer}>
                                * 위 시세는 AI 분석에 의한 추정치이며, 실제 매입가와 다를 수 있습니다.
                                {'\n'}기준일: {result.predictedDate}
                            </Text>

                            <TouchableOpacity style={styles.retryButton} onPress={resetForm}>
                                <Text style={styles.retryButtonText}>다시 조회하기</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textLight,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 25,
    },
    inputGroup: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F9F9F9',
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: Colors.text,
    },
    predictButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    predictButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 10,
    },
    resultHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'center',
    },
    resultTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
        marginLeft: 8,
    },
    priceCard: {
        backgroundColor: '#E8F5E9', // Light Green
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: Colors.secondary,
    },
    priceLabel: {
        fontSize: 14,
        color: Colors.primary,
        marginBottom: 8,
        fontWeight: '600',
    },
    priceValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 5,
    },
    avgPrice: {
        fontSize: 14,
        color: Colors.textLight,
    },
    disclaimer: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 18,
    },
    retryButton: {
        alignItems: 'center',
        padding: 10,
    },
    retryButtonText: {
        color: Colors.textLight,
        textDecorationLine: 'underline',
    },
});
