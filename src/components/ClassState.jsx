import React, { Component } from "react";

class ClassState extends Component {
	constructor(props) {
		super();
		this.state = { name: "Barbara", age: 20 };
		// this.UpdateName = this.UpdateName.bind(this);
	}
	UpdateName = () => {
		this.setState({ name: "irene", age: this.state.age + 10 });
	};
	render() {
		return (
			<div>
				<h1>Hello Codetrain students</h1>
				<h1 onClick={this.UpdateName}>
					welcome {this.state.name} i am {this.state.age} years
				</h1>
			</div>
		);
	}
}

export default ClassState;
