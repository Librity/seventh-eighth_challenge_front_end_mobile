import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store/index';
import Routes from './routes';
import { setNavigator } from './services/navigation';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#1B191F" />
        <Routes ref={navigatorRef => setNavigator(navigatorRef)} />
      </Provider>
    </>
  );
}
