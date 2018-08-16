import React, { Component } from 'react';

export class User extends Component {
    render () {
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default User;