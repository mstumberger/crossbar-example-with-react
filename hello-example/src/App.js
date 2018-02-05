import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import MainApp from './components/MainApp/MainApp';

// configureStore.subscribe(() => console.log('store', configureStore.getState()));
const App = () => (
  <Provider store={configureStore()}>
    <MainApp />
  </Provider>
);

export default App;
