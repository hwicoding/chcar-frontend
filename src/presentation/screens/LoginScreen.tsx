import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Colors } from '@/shared/Colors';
import { useLoginViewModel } from '../viewmodels/LoginViewModel';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen = ({ navigation }: any) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        handleLogin
    } = useLoginViewModel(navigation);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.contentContainer}>
                        {/* Logo Area */}
                        {/* ... content ... */}
                        <View style={styles.logoContainer}>
                            <Text style={styles.logoText}>CHCAR</Text>
                            <Text style={styles.subLogoText}>내 차의 가치를 발견하다</Text>
                        </View>

                        {/* Input Area */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="이메일"
                                placeholderTextColor={Colors.textLight}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호"
                                placeholderTextColor={Colors.textLight}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        {/* Button Area */}
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color={Colors.white} />
                            ) : (
                                <Text style={styles.loginButtonText}>로그인</Text>
                            )}
                        </TouchableOpacity>

                        <View style={styles.footerContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.footerText}>회원가입</Text>
                            </TouchableOpacity>
                            <Text style={styles.divider}>|</Text>
                            <TouchableOpacity>
                                <Text style={styles.footerText}>비밀번호 찾기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 10,
    },
    subLogoText: {
        fontSize: 16,
        color: Colors.textLight,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        color: Colors.text,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    loginButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: Colors.textLight,
        fontSize: 14,
    },
    divider: {
        color: Colors.border,
        marginHorizontal: 15,
    },
});
