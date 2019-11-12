import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store/index';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1B191F" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
