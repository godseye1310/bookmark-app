import React, { useContext } from "react";
import styles from "./BookmarkList.module.css";
import Card from "../../UI/Card";
import BookmarkItem from "./BookmarkItem";
import globalContext from "../../../store/global-context";
import displayContext from "../../../store/display-context.js";
// import EditData from "../../../store/edit-context.js";
import setData from "../../../store/setdata-context.js";

const BookmarkList = () => {
	const { bookmarkList, deleteBookmark, editBookmark } = useContext(globalContext);
	const { formDisplayHandler } = useContext(displayContext);
	// const { editBookmark } = useContext(EditData);
	const { setTitle, setBookmark } = useContext(setData);

	// const { bookmarkList, deleteBookmark, editBookmark} = listCtx;
	console.log("re-evaluated cause of context");

	const deleteHandler = (delitem) => {
		deleteBookmark(delitem);
	};

	const editHandler = (editItem) => {
		setTitle(editItem.title);
		setBookmark(editItem.bookmark);
		editBookmark(editItem);
		formDisplayHandler(true);
	};

	let dataList = bookmarkList.map((markitem) => {
		return (
			<BookmarkItem
				key={markitem._id}
				id={markitem._id}
				title={markitem.title}
				bookmark={markitem.bookmark}
				onDelete={deleteHandler.bind(null, markitem)}
				onEdit={editHandler.bind(null, markitem)}
			/>
		);
	});
	return (
		<Card className={styles.card}>
			<h2>All Bookmarks</h2>
			<ul>{dataList}</ul>
		</Card>
	);
};

export default React.memo(BookmarkList);
