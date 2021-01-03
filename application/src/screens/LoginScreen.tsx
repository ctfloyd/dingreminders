import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../components/Login'

const LoginScreen = ({navigation}: any) => {
    return (
        <SafeAreaView>
            <Login navigation={navigation}></Login>
        </SafeAreaView>
    )
}

export default LoginScreen;