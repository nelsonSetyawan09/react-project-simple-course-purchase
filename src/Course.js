import React, { Component } from 'react';

class Course extends Component{
    constructor(props) {
        super(props);
        this.clicker = this.clicker.bind(this);
        this.state={
            active: false
        };
    }
    clicker(){
        let active = !this.state.active;
        this.setState({active})
        this.props.handleTotalsPrice(active ? this.props.price : -(this.props.price))
    }
    render(){
        return(
            <li className={this.state.active ? 'active' : ''} onClick={this.clicker}> 
                {this.props.name}
                <span>${this.props.price}</span>
            </li>
        )
    }
}

export default Course;