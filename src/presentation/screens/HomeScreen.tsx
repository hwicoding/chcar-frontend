import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { Colors } from '@/shared/Colors';
import { useHomeViewModel } from '../viewmodels/HomeViewModel';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: any) => {
    const {
        banners,
        menuItems,
        recommendedCars,
        onMenuPress,
        onCarPress
    } = useHomeViewModel(navigation);

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.logo}>CHCAR</Text>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color={Colors.text} />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Main Banner (Horizontal Scroll) */}
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.bannerContainer}
                    >
                        {banners.map((banner) => (
                            <View
                                key={banner.id}
                                style={[styles.bannerItem, { backgroundColor: banner.backgroundColor }]}
                            >
                                <Text style={styles.bannerTitle}>{banner.title}</Text>
                                {/* 이미지 자리 */}
                                <View style={styles.bannerImagePlaceholder}>
                                    <Ionicons name="car-outline" size={60} color="rgba(0,0,0,0.1)" />
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Quick Menu (Grid) */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>빠른 메뉴</Text>
                        <View style={styles.menuGrid}>
                            {menuItems.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.menuItem}
                                    onPress={() => onMenuPress(item.route)}
                                >
                                    <View style={styles.iconCircle}>
                                        <Ionicons name={item.iconName as any} size={24} color={Colors.primary} />
                                    </View>
                                    <Text style={styles.menuText}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Recommended Cars (Horizontal List) */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>추천 차량</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>더보기</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.carListContent}
                        >
                            {recommendedCars.map((car) => (
                                <TouchableOpacity
                                    key={car.id}
                                    style={styles.carCard}
                                    onPress={() => onCarPress(car.name)}
                                >
                                    <View style={styles.carImagePlaceholder}>
                                        <Ionicons name="image-outline" size={40} color={Colors.textLight} />
                                    </View>
                                    <View style={styles.carInfo}>
                                        <Text style={styles.carName} numberOfLines={1}>{car.name}</Text>
                                        <Text style={styles.carPrice}>{car.price}</Text>
                                        <Text style={styles.carDetail}>{car.year} | {car.mileage}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Bottom Spacer */}
                    <View style={{ height: 30 }} />
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    bannerContainer: {
        height: 180,
    },
    bannerItem: {
        width: width,
        height: 180,
        padding: 25,
        justifyContent: 'center',
        position: 'relative',
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        lineHeight: 32,
    },
    bannerImagePlaceholder: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    sectionContainer: {
        marginTop: 25,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 15,
    },
    moreText: {
        fontSize: 14,
        color: Colors.textLight,
    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        width: '23%',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F9F6', // Very light green
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    menuText: {
        fontSize: 12,
        color: Colors.text,
        fontWeight: '500',
    },
    carListContent: {
        paddingRight: 20,
    },
    carCard: {
        width: 160,
        backgroundColor: Colors.white,
        borderRadius: 12,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        overflow: 'hidden',
    },
    carImagePlaceholder: {
        width: '100%',
        height: 100,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carInfo: {
        padding: 12,
    },
    carName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    carPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 4,
    },
    carDetail: {
        fontSize: 12,
        color: Colors.textLight,
    },
});
