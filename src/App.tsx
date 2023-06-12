// Import React
import React from 'react';

// Import Navigaiton
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Routes
import { routes } from './router/routes';

// Import Layout
import Layout from './layout/Layout';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {
          routes?.map(({ id, name, Component }) => (
            <Stack.Screen key={id} name={name}>
              {props => (
                <Layout>
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
