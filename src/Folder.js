import React from 'react';

export default class Folder extends React.Component {

    render() {

        return (
            <li>
                <h3>{this.props.name}</h3>
            </li>
        );
    }
}