import React from "react";

const displayContext = React.createContext({
	formDisplayHandler: (show) => {},
	onDisplay: false,
});

export default displayContext;
