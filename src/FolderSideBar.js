import React from 'react';
import FolderList from './FolderList.js';

export default class FolderSideBar extends React.Component {

    render() {
        return (
            <>
              <FolderList folders={this.props.folderList}/>
              <button>Add Folder</button>
            </>
        );
    }
}