import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage.js';
import Folder from './Folder.js';
import Note from './Note.js';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Route
        exact
        path="/"
        component={MainPage} />
        
        <Route
        exact
        path="/folders/:folderId"
        component={Folder} />
        
        <Route
        exact
        path="/notes/:noteId"
        component={Note} />
      </div>
    );
  }
}

export default App;
