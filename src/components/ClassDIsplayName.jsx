// import React, { Component } from "react";
import React, { Component } from "react";

class ClassDIsplayName extends Component {
	constructor() {
		super();
		this.state = {
			students: [
				{ name: "iren", gen: "6", email: "irene@gmail.com" },
				{ name: "Augustine", gen: "7", email: "aug@gmail.com" },
				// { name: "valentine", gen: "8", email: "val@gmail.com" },
				// { name: "barbabara", gen: "9", email: "babgmail.com" },
				// { name: "confidence", gen: "10", email: "con@gmail.com" },
				// { name: "", gen: "", email: "" },
			],
		};
	}
	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });

		// this.setState({ email: e.target.value });
		// this.setState({ gen: e.target.value });
		console.log(this.state.name);
		console.log(this.state.email);
		console.log(this.state.gen);
	};
	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({
			students: [
				...this.state.students,
				{ name: this.state.name, gen: this.state.gen, email: this.state.email },
			],
		});
		this.setState({ name: "", gen: "", email: "" });
	};

	render() {
		return (
			<div style={{ margin: "30px" }}>
				<form>
					<h1>Registration form</h1>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<br />
					<label>Email:</label>
					<input
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<br />
					<label>Gen:</label>
					<input
						type="text"
						name="gen"
						value={this.state.gen}
						onChange={this.handleChange}
					/>
					<br />
					<button onClick={this.handleSubmit} type="submit">
						Submit
					</button>
				</form>

				<h1> codetrain students register</h1>
				{this.state.students.map((student, index) => {
					return (
						<div key={index}>
							<h1>Name :{student.name}</h1>
							<h1>Gen :{student.gen}</h1>
							<h1>Email :{student.email}</h1>
							<hr />
						</div>
					);
				})}
			</div>
		);
	}
}

export default ClassDIsplayName;
