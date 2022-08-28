import React from "react";
import './Homework1.css';

class Homework1 extends React.Component {
	constructor(props) {
		console.log(props);
		super();
		this.state = {
			s1: props.p1,
		}
		// console.log(this.state.s1);
		this.s2 = 201;
	}

	buttonHandler = () => {
		let val = this.state.s1;
		val += 50;
		this.s2 += 50;
		// console.log(val);
		// console.log(this.s2);
		this.setState({s1: val})
	}
	
	componentDidMount() {
		let val = this.state.s1;
		val += 5;
		this.s2 += 5;
		this.setState({s1: val})
		// console.log(this.state.s1);
		// console.log(this.s2);
	}
	
	render() {
		return (
			<div className="wrapper">
				<div>{this.state.s1}</div>
				<div>{this.s2}</div>
				<div><button className='b-1' onClick={this.buttonHandler}>Push</button></div>
			</div>
		)
	}
}

export default Homework1;