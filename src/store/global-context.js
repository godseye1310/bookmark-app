import React from "react";

const globalContext = React.createContext({
	bookmarkList: [],

	formDisplayHandler: (show) => {},
	onDisplay: false,

	addBookmark: (ItemList) => {},
	deleteBookmark: (id) => {},
	editBookmark: (edit) => {},

	setData: {},
});

export default globalContext;
