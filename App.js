import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import combineReducers from './src/reducers';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    <Provider store={createStore(combineReducers, applyMiddleware(thunk))}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
