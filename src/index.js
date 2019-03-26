import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NoteList from './NoteList';
//import App from './App';


ReactDOM.render(
<BrowserRouter>
<NoteList />
</BrowserRouter>, 
document.getElementById('root')
);

