import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducer from './reducers';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


ReactDOM.render(
	<Provider store={store}>
        <App/>
    </Provider>
   	, document.getElementById('root'));
registerServiceWorker();