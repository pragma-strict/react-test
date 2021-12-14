import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Test from './baba.js';


ReactDOM.render(
   <Counter />, document.getElementById('root')
);

// Note that this second call do ReactDOM.render() overwrites the original call. It actually clears the content of the element that was passed. 
// ReactDOM.render(
//    <Test />, 
//    document.getElementById('root')
// );