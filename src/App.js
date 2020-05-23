import React, { Component } from 'react';
import Sidebar from './components/Sidebar/index';
import Video from './components/Video/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/index';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div style={{ fontSize: 26 }}>
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div >
    );
  }
}

export default App;
