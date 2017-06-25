import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import App from './components/App'


ReactDOM.render(
   <App movie = {data.movie}/>,
   document.getElementById('root')
	);
