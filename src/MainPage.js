import React from 'react';
import MainPageHeader from './MainPageHeader';
import FolderSideBar from './FolderSideBar.js';
import NoteList from './NoteList.js';

export default class MainPage extends React.Component {

    render() {
        return (
            <div className="mainPage">
            <MainPageHeader />
            <FolderSideBar folderList = {this.props.folders}/>
            <NoteList notes = {this.props.notes}/>
            </div>
        )

    }
}