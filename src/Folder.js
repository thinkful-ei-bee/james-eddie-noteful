import React from 'react';
import { Link } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';
import NotefulContent from './NotefulContent';

export default class Folder extends React.Component {

render() {
    const filterList =  NotefulContent.notes.filter(
        note => note.folderId === this.props.match.params.folderId
    )
       
    
    return (
        <div>
            <MainPageHeader />
            <ul>{}</ul>
        </div>
    );
}

}