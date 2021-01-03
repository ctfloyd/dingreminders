import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import RootNavigator from './RootNavigator';

export default () => (
    // TODO: Pass in a theme to paper
    <PaperProvider>
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    </PaperProvider>
)