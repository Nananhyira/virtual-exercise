import React, { useState } from "react";

function Revision() {
	const [count, setCount] = useState(0);

	const handleState = (e) => {
		e.preventDefault();
		setCount("you are welcome to codetrain");
	};

	return <div onClick={handleState}>{count}</div>;
}

export default Revision;
