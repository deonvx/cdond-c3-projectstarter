import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, ProviderProps } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from 'app/store';
import Root from './app';
import history from './browserHistory';

// prepare store
const store = configureStore(history);
const providerProps: ProviderProps = {
  store: store,
};

ReactDOM.render(
  <Provider {... providerProps}>
    {/* @ts-ignore */}
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
