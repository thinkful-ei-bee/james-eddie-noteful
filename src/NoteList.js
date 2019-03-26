import React from 'react';
import { Link } from 'react-router-dom';

export default class NoteList extends React.Component {

    createNoteList = () => {
        const list = this.props.notes.map(note => {
            return (
                <li key={note.id}>
                <Link to={`/note/${note.id}`}>
                <p>{note.name}</p>
                </Link>
                </li>
            )
        })
        return list;
    }

    render() {
        return <ul className="notesList">{this.createNoteList()}</ul>;
    }
}