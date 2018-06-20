import React from 'react';
import { AppRegistry } from 'react-360';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducer from './components/reducers';
import Top from './components/Top';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default class FlashAir_VR extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Top />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FlashAir_VR', () => FlashAir_VR);
