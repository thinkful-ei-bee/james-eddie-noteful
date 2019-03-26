import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note.js';

export default class NoteList extends React.Component {

    createNoteList = () => {
        const list = this.props.notes.map(note => {
            return (
                <Link key ={note.id} to={`/note/${note.id}`}>
                  <Note 
                  key={note.id}
                  name={note.name}
                  modified={note.modified}/>
                </Link>
            )
        })
        return list;
    }

    render() {
        return <ul className="notesList">{this.createNoteList()}</ul>;
    }
}