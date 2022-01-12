import React, {Component} from 'react';

class People extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><h1>{ this.props.lastName } {this.props.firstName }</h1></li>
                    <li>Age: { this.props.age}</li>
                    <li>Hair color: { this.props.hairColor}</li>
                </ul>
            </div>
        );
    }
}

export default People;