import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage.js';
import FolderPage from './FolderPage.js';
import Note from './Note.js';
import './App.css';

class App extends Component {
// props.data will have our data that we need to put in our state
// so our pages can access that information
  state = this.props.data;

  render() {
    return (
      <div className="App">
        <Route
        exact
        path="/"
        render ={(props)=>
          <MainPage 
          notes={this.state.notes}
          folders={this.state.folders}
          />
        }
        />
        
        <Route
        exact
        path="/folders/:folderId"
        
        render ={(props)=>
        <FolderPage 
        notes={this.state.notes}
        folders={this.state.folders}
        match={props.match}/>}/>
        
        <Route
        exact
        path="/notes/:noteId"
        component={Note} />
      </div>
    );
  }
}

export default App;
