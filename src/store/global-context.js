import React from "react";

const globalContext = React.createContext({
	bookmarkList: [],

	addBookmark: (ItemList) => {},
	deleteBookmark: (id) => {},
	editBookmark: (edit) => {},

	setData: {},
});

export default globalContext;
