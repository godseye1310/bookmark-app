import React, { useContext, useState, useRef } from "react";

export const dataContext = React.createContext();

export const DataProvider = (props) => {
	const [mytitle, setTitle] = useState("");
	const [myBookmark, setBookmark] = useState("");

	const titleref = useRef(null);
	const bookmarkref = useRef(null);

	const [editingData, setEditingData] = useState(null);
	const setEdit = (edit) => {
		setEditingData(edit);

		if (edit) {
			// 	console.log(true);

			// 	if (titleref.current && bookmarkref.current && edit.title && edit.bookmark) {
			// 		console.log(edit);
			// 		titleref.current.value = edit.title;
			// 		bookmarkref.current.value = edit.bookmark;
			// 		console.log((titleref.current.value = edit.title));
			// 	}
			setTitle(edit.title);
			setBookmark(edit.bookmark);
		}
	};

	const setData = {
		mytitle,
		setTitle,
		myBookmark,
		setBookmark,

		editingData,
		setEdit,

		titleref,
		bookmarkref,
	};

	return <dataContext.Provider value={setData}>{props.children}</dataContext.Provider>;
};

const useData = () => useContext(dataContext);
export default useData;
