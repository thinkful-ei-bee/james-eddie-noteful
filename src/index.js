import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import NotefulContent from './NotefulContent';


ReactDOM.render(
<BrowserRouter>
<App data = {NotefulContent}/>
</BrowserRouter>, 
document.getElementById('root')
);

