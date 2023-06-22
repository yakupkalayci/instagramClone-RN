// Import React
import React from 'react';

// Import Navigaiton
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './router/RootNavigation';

// Import Routes
import { routes } from './router/routes';

// Import Layout
import Layout from './layout/Layout';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
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
  );
}
export default App;
