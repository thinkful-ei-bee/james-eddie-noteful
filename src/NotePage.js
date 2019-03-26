import React from 'react';
import MainPageHeader from './MainPageHeader';
import NoteSideBar from './NoteSideBar';
import Note from './Note';

export default class NotePage extends React.Component {

    render() {
        const noteId = this.props.match.params.noteId
        const note = this.props.notes.find(note => note.id === noteId)
        const folder = this.props.folders.find(folder => folder.id === note.folderId)

        return (
            <>
            <MainPageHeader />
            <NoteSideBar folder = {folder} history = {this.props.history} />
            <Note name = {note.name} modified = {note.modified} />
            <p>{note.content}</p>
            </>
        )
       
    }

}