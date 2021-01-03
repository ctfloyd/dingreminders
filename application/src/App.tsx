import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RootNavigator from './RootNavigator';

export default () => (
    // TODO: Pass in a theme to paper
    <SafeAreaProvider>
        <PaperProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </PaperProvider>
    </SafeAreaProvider>
)