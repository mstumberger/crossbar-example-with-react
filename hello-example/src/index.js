import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";

import MainApp from './components/MainApp/MainApp';
import './index.css';


const App = () => (
    <Provider store={configureStore()}>
        <MainApp />
    </Provider>
);

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);


