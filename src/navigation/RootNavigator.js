/**
 * This is the root navigator of the application. The starting point of the application.
 */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FoodListScreen } from '../components/FoodList'

const Stack = createStackNavigator();
function RootNavigator() {
    //  Stack Navigator setup, As right now only singlescreen so like this, otherwise,
    //  create another app navigator file with all the navigations and then use it here.
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName={'FoodListScreen'}
        >
            <Stack.Screen name="FoodListScreen" component={FoodListScreen} />
        </Stack.Navigator>
    );
}

export default RootNavigator;
