// Import React
import React from 'react';

// Import Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// Import Router
import Router from './router/Router';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
export default App;
