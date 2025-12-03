import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { Colors } from '@/shared/Colors';
import { useMyPageViewModel } from '../viewmodels/MyPageViewModel';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MyPageScreen = ({ navigation }: any) => {
    const { user, menuItems, onMenuPress } = useMyPageViewModel(navigation);

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.container}>
                {/* Profile Section */}
                <View style={styles.profileHeader}>
                    <View style={styles.profileImageContainer}>
                        <Ionicons name="person" size={40} color={Colors.white} />
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.userName}>{user?.name || '사용자'}님</Text>
                        <Text style={styles.userEmail}>{user?.email || '로그인이 필요합니다'}</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>편집</Text>
                    </TouchableOpacity>
                </View>

                {/* Menu List */}
                <ScrollView style={styles.menuContainer}>
                    <Text style={styles.sectionTitle}>계정 및 설정</Text>
                    <View style={styles.menuList}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[
                                    styles.menuItem,
                                    index === menuItems.length - 1 && styles.lastMenuItem
                                ]}
                                onPress={() => onMenuPress(item)}
                            >
                                <View style={styles.menuItemLeft}>
                                    <Ionicons
                                        name={item.iconName as any}
                                        size={24}
                                        color={item.isDestructive ? '#FF3B30' : Colors.text}
                                    />
                                    <Text style={[
                                        styles.menuText,
                                        item.isDestructive && styles.destructiveText
                                    ]}>
                                        {item.title}
                                    </Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color={Colors.textLight} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.versionInfo}>
                        <Text style={styles.versionText}>현재 버전 1.0.0</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    profileImageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: Colors.textLight,
    },
    editButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },
    editButtonText: {
        fontSize: 12,
        color: Colors.text,
        fontWeight: '600',
    },
    menuContainer: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.textLight,
        marginBottom: 15,
        marginLeft: 5,
    },
    menuList: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    lastMenuItem: {
        borderBottomWidth: 0,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 16,
        color: Colors.text,
        marginLeft: 15,
    },
    destructiveText: {
        color: '#FF3B30',
    },
    versionInfo: {
        marginTop: 30,
        alignItems: 'center',
    },
    versionText: {
        fontSize: 12,
        color: '#CCC',
    },
});
