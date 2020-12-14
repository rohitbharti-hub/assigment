import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import redux as a store
import { createStore } from 'redux';

//provide connect react with redux
import {Provider} from 'react-redux';

//reducer is a center store 
import reducer from './components/reducer/reducer';

//createstore with an argument called reducer which send state value to store that can be accessed bt componnet.
const store = createStore(reducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>,document.getElementById('root'));
