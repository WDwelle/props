import React, {Component} from 'react';

class People extends Component {

    constructor (props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    increaseAge = () => {
        this.setState({age: this.state.age + 1})
    }
    render() {
        return (
            <div>
                <ul>
                    <li><h1>{ this.props.lastName } {this.props.firstName }</h1></li>
                    <li>Age: { this.state.age}</li>
                    <li>Hair color: { this.props.hairColor}</li>
                    <button onClick={ this.increaseAge }>Birthday</button>
                </ul>
            </div>
        );
    }
}

export default People;