// import React, { useCallback, useContext } from "react";
// import EditData from "./edit-context";
// import globalContext from "./global-context";
// import setData from "./setdata-context";
// import axios from "axios";

// const EditProvider = (props) => {
// 	const { setbookmarkList } = useContext(globalContext);
// 	const { setTitle, setBookmark } = useContext(setData);

// 	const API_URL =
// 		"https://crudcrud.com/api/8f5b27c8e9124822a598ed08c8282e82/bookmarkList";

// 	const editBookmark = useCallback(
// 		async (edit) => {
// 			try {
// 				await axios.delete(API_URL + "/" + edit._id);

// 				// setTitle(edit.title);
// 				// setBookmark(edit.bookmark);

// 				setbookmarkList((prevList) => {
// 					for (let pdata of prevList) {
// 						if (pdata._id === edit._id) {
// 							// console.log(edit);

// 							return prevList.filter((pdata) => pdata._id !== edit._id);
// 						}
// 					}
// 				});
// 			} catch (error) {
// 				console.log("error");
// 			}
// 		},
// 		[setbookmarkList]
// 	);

// 	return <EditData.Provider value={{ editBookmark }}>{props.children}</EditData.Provider>;
// };

// export default EditProvider;
