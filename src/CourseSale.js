import React, {Component} from 'react';
import Course from './Course';
import './CourseSale.css';


class CourseSale extends Component{
    constructor(props) {
        super(props);
        this.handleTotalsPrice = this.handleTotalsPrice.bind(this);
        this.state={
            totals: 0
        }
    }
    handleTotalsPrice(price){
        // this.setState({totals: this.state.totals+price})
        this.setState(prevState =>({totals: prevState.totals +price}))
    }
    render(){
        let {courses} = this.props;
        // console.log(courses, totals)
        let listCourse = courses.map((val, index) =>(
            <Course key={index} handleTotalsPrice={this.handleTotalsPrice} {...val}/>
        ))

        return(
            <div className='div-course-sale'>
                <h3>The Best of List Courses </h3>
                <ul className='list-course'>
                    {listCourse}
                    <li className='totals-course'>totals: <span>${this.state.totals}</span></li>
                </ul>
            </div>
        )
    }
}

export default CourseSale;