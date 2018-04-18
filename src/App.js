import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, undefined,
  compose(
    applyMiddleware(ReduxThunk)
  )
);

class App extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>Hello</h1>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
