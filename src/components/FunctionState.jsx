import React, { useState } from "react";

function FunctionState() {
	const [number, setNumber] = useState(0);

	const Subtraction = () => {
		setNumber(number - 1);
	};
	return (
		<div>
			<h1>Click :{number} </h1>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}>
				Increase
			</button>
			<button onClick={Subtraction}>Decrease</button>
		</div>
	);
}

export default FunctionState;
