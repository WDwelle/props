import React, {Component} from 'react';

const People = props => {

    //constructor (props){
        //super(props);
        //this.state = {
            //age: this.props.age
        //};
    //}

    //increaseAge = () => {
        //this.setState({age: this.state.age + 1})
    //}
    //render() {
        return (
            <div>
                <ul>
                    <li><h1>{ props.lastName } {props.firstName }</h1></li>
                    <li>Age: { props.age}</li>
                    <li>Hair color: { props.hairColor}</li>

                </ul>
            </div>
        );
    //}
}

export default People;