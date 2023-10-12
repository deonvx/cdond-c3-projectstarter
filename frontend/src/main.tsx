import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectRouter } from 'connected-react-router';
import { configureStore } from 'app/store';
import Root from './app';
import history from './browserHistory';

// prepare store
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectRouter history={history}>
      <Root />
    </ConnectRouter>
  </Provider>,
  document.getElementById('root'),
);
