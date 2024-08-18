import React, { useState } from "react";
import globalContext from "./global-context";

const ContextProvidder = (props) => {
	const [mytitle, setTitle] = useState("");
	const [myBookmark, setBookmark] = useState("");

	const [bookmarkList, setbookmarkList] = useState([]);

	const addBookmarkHandler = (list) => {
		setbookmarkList((prevList) => {
			return [...prevList, list];
		});
	};

	const deleteBookmarkHandler = (id) => {
		setbookmarkList((prevList) => {
			for (let pdata of prevList) {
				if (pdata.id === id) {
					return prevList.filter((pdata) => pdata.id !== id);
				}
			}
		});
	};
	const editBookmarkHandler = (edit) => {
		setbookmarkList((prevList) => {
			for (let pdata of prevList) {
				if (pdata.id === edit.id) {
					// console.log(edit);
					setTitle(edit.title);
					setBookmark(edit.bookmark);
					return prevList.filter((pdata) => pdata.id !== edit.id);
				}
			}
		});
	};

	const [displayForm, setDisplayForm] = useState(false);
	const handleFormDisplay = (show) => {
		setDisplayForm(show);
	};

	// localStorage.setItem("bmlist", JSON.stringify(bookmarkList));
	// let storedBookmarks = localStorage.getItem("bmlist");
	// const pasrsedBookmarks = JSON.parse(storedBookmarks);

	const globalCtx = {
		bookmarkList: bookmarkList,

		formDisplayHandler: handleFormDisplay,
		onDisplay: displayForm,

		addBookmark: addBookmarkHandler,
		deleteBookmark: deleteBookmarkHandler,
		editBookmark: editBookmarkHandler,

		setData: {
			mytitle,
			setTitle,
			myBookmark,
			setBookmark,
		},
	};

	return (
		<globalContext.Provider value={globalCtx}>{props.children}</globalContext.Provider>
	);
};

export default ContextProvidder;
