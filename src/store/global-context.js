import React from "react";

const globalContext = React.createContext({
	bookmarkList: [],

	formDisplayHandler: (show) => {},
	onDisplay: false,

	handleBtn: (btn) => {},
	btnState: true,

	addBookmark: (ItemList) => {},
	deleteBookmark: (id) => {},
	editBookmark: (edit) => {},

	setData: {},
});

export default globalContext;
