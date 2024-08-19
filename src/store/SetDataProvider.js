import React, { useState } from "react";
import setData from "./setdata-context";

const SetDataProvider = (props) => {
	const [mytitle, setTitle] = useState("");
	const [myBookmark, setBookmark] = useState("");
	const setInputs = {
		mytitle,
		setTitle,
		myBookmark,
		setBookmark,
	};
	return <setData.Provider value={setInputs}>{props.children}</setData.Provider>;
};

export default SetDataProvider;
