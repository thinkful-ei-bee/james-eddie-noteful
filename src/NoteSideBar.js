import React from 'react';

export default class NoteSideBar extends React.Component {

    render() {

console.log(this.props.history.goBack);
        return (
            <>
            <button onClick={() => this.props.history.goBack()}>
            Go Back</button>
            <p>{this.props.folder.name}</p>
            </>
        )
    }
}