import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';


const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.view}>Sujon</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    }
})

export default HomeScreen;