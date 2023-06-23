// Import React
import { useState, useEffect } from 'react';

// Import Firebase auth
import auth from '@react-native-firebase/auth';

// Import Navigaiton
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import { routes } from './routes';


// Import Layout
import Layout from '../layout/Layout';

function Router() {

    // variables
    const Stack = createNativeStackNavigator();

    // states
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // handle auth state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    // useeffect
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={user ? 'home' : 'login'} screenOptions={{ headerShown: false }}>
                {
                    routes?.map(({ id, name, Component, hasHeader, hasFooter, headerOptions }) => (
                        <Stack.Screen key={id} name={name}>
                            {props => (
                                <Layout hasHeader={hasHeader} hasFooter={hasFooter} headerOptions={headerOptions}>
                                    <Component {...props} />
                                </Layout>
                            )}
                        </Stack.Screen>
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;