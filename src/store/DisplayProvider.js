import React, { useState } from "react";
import displayContext from "./display-context";

const DisplayProvider = (props) => {
	const [displayForm, setDisplayForm] = useState(false);
	const handleFormDisplay = (show) => {
		setDisplayForm(show);
	};

	const display = {
		formDisplayHandler: handleFormDisplay,
		onDisplay: displayForm,
	};
	return (
		<displayContext.Provider value={display}>{props.children}</displayContext.Provider>
	);
};

export default DisplayProvider;
