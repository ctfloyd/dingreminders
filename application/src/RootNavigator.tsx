import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const RootNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
)

export default RootNavigator;