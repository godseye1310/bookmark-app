import React, { useEffect, useState } from "react";
import globalContext from "./global-context";
import axios from "axios";

const API_URL = "https://crudcrud.com/api/7e6c067f0e1a443182dc9a63de481932/bookmarkList";

const ContextProvidder = (props) => {
	const [mytitle, setTitle] = useState("");
	const [myBookmark, setBookmark] = useState("");

	const [bookmarkList, setbookmarkList] = useState([]);

	const addBookmarkHandler = async (bookmarkItem) => {
		try {
			const response = await axios.post(API_URL, bookmarkItem);
			console.log(response.data);
			console.log(response.status, response.statusText, "List POST Success");

			setbookmarkList((prevList) => {
				return [...prevList, response.data];
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(API_URL);
				console.log("Added", response.data);
				console.log(response.status, response.statusText, "Fetch on Refresh Success");
				setbookmarkList(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const deleteBookmarkHandler = async (del) => {
		try {
			const response = await axios.delete(API_URL + "/" + del._id);
			setbookmarkList((prevList) => {
				// for (let pdata of prevList) {
				// 	if (pdata._id === del._id) {
				return prevList.filter((pdata) => pdata._id !== del._id);
				// 	}
				// }
			});
			// console.log(bookmarkList);

			console.log(response.status, response.statusText, "List DELETE Successfully");
		} catch (error) {
			console.log("error");
		}
	};

	const editBookmarkHandler = async (id, edit) => {
		// console.log({ ...edit, _id: id });
		try {
			const response = await axios.put(API_URL + "/" + id, edit);
			setbookmarkList((prevList) => {
				return prevList.map((editItem) =>
					editItem._id === id ? { ...edit, _id: id } : editItem
				);
			});
			setEditingData(null);
			console.log(response.status, response.statusText, "List Updated PUT SUccess");
		} catch (error) {
			console.log("error");
		}
	};

	const [displayForm, setDisplayForm] = useState(false);
	const handleFormDisplay = (show) => {
		setDisplayForm(show);
	};

	const [editingData, setEditingData] = useState(null);
	const setBookmarktoEdit = (edit) => {
		setEditingData(edit);

		if (edit) {
			setTitle(edit.title);
			setBookmark(edit.bookmark);
		}
	};

	const globalCtx = {
		bookmarkList: bookmarkList,

		formDisplayHandler: handleFormDisplay,
		onDisplay: displayForm,

		addBookmark: addBookmarkHandler,
		deleteBookmark: deleteBookmarkHandler,
		editBookmark: editBookmarkHandler,

		setEdit: setBookmarktoEdit,
		editingData: editingData,

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
