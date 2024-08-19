import React, { useContext } from "react";
import styles from "./BookmarkList.module.css";
import Card from "../../UI/Card";
import BookmarkItem from "./BookmarkItem";
import globalContext from "../../../store/global-context";

const BookmarkList = () => {
	const listCtx = useContext(globalContext);

	const { bookmarkList } = listCtx;
	console.log("re-evaluated cause of context");

	const deleteHandler = (delitem) => {
		listCtx.deleteBookmark(delitem);
	};

	const editHandler = (editItem) => {
		listCtx.editBookmark(editItem);
		listCtx.formDisplayHandler(true);
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

export default BookmarkList;
