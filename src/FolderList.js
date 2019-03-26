import React from 'react';
import { Link } from 'react-router-dom';
import Folder from './Folder.js';

export default class FolderList extends React.Component {

    createFolderList = () => {
        const list = this.props.folders.map(folder => {
            return (
                <Link key={folder.id} to={`/folders/${folder.id}`}>
                  <Folder 
                  key={folder.id}
                  name={folder.name} />
                </Link>
            )
        })
        return list;
    }

    render() {
        return(
          <>
          {this.createFolderList()}
          </>
        );
    }
}