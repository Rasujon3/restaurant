import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import {enableScreens} from 'react-native-screens'
enableScreens(false);

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.view}>Home Screen</Text>
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