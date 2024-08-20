import React, { useEffect, useState } from "react";
import globalContext from "./global-context";
import axios from "axios";

const API_URL = "https://crudcrud.com/api/8f5b27c8e9124822a598ed08c8282e82/bookmarkList";

const ContextProvidder = (props) => {
	const [mytitle, setTitle] = useState("");
	const [myBookmark, setBookmark] = useState("");

	const [bookmarkList, setbookmarkList] = useState([]);

	const addBookmarkHandler = async (bookmarkItem) => {
		try {
			const response = await axios.post(API_URL, bookmarkItem);
			// console.log(response.data); //3
			console.log(response.status, response.statusText, "List POST Success"); //4

			setbookmarkList((prevList) => {
				// console.log(prevList); //5
				// console.log(response.data); //6
				return [...prevList, response.data];
			});
		} catch (error) {
			console.log(error);
		}

		// try {
		// 	const response = await axios.get(
		// 		"https://crudcrud.com/api/c28fb3accefc44358335d769fcbb85cf/bookmarkList"
		// 	);
		// 	setbookmarkList((prevList) => {
		// 		return [...prevList, response.data[response.data.length - 1]];
		// 	});
		// 	console.log(response.status, response.statusText, "Fetch on Add Success");
		// 	// setbookmarkList(response.data);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(API_URL);
				// console.log(response.data);
				console.log(response.status, response.statusText, "Fetch on Refresh Success");
				setbookmarkList(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const deleteBookmarkHandler = async (del) => {
		// setbookmarkList((prevList) => {
		// 	for (let pdata of prevList) {
		// 		if (pdata.id === del.id) {
		// 			return prevList.filter((pdata) => pdata.id !== del.id);
		// 		}
		// 	}
		// });
		// console.log(del);
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
	const editBookmarkHandler = async (edit) => {
		try {
			await axios.delete(API_URL + "/" + edit._id);
			setbookmarkList((prevList) => {
				// console.log(edit);
				setTitle(edit.title);
				setBookmark(edit.bookmark);
				return prevList.filter((pdata) => pdata._id !== edit._id);
			});
		} catch (error) {
			console.log("error");
		}
	};

	const [displayForm, setDisplayForm] = useState(false);
	const handleFormDisplay = (show) => {
		setDisplayForm(show);
	};

	const [updateBtn, setUpDateBtn] = useState(true);
	const handleBtn = (btn) => {
		setUpDateBtn(btn);
	};

	const globalCtx = {
		bookmarkList: bookmarkList,

		formDisplayHandler: handleFormDisplay,
		onDisplay: displayForm,

		addBookmark: addBookmarkHandler,
		deleteBookmark: deleteBookmarkHandler,
		editBookmark: editBookmarkHandler,

		handleBtn: handleBtn,
		btnState: updateBtn,

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
