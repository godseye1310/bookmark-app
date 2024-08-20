import React from "react";

const globalContext = React.createContext({
	bookmarkList: [],

	formDisplayHandler: (show) => {},
	onDisplay: false,

	addBookmark: (ItemList) => {},
	deleteBookmark: (id) => {},

	editBookmark: (ID, editD) => {},
	setEdit: (edit) => {},
	editingData: null,

	setData: {},
});

export default globalContext;
