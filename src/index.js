import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';


// Note that this second call do ReactDOM.render() overwrites the original call. It actually clears the content of the element that was passed. 
ReactDOM.render(
   <App />, 
   document.getElementById('root')
);