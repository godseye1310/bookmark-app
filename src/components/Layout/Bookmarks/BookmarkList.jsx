import React, { useContext } from "react";
import styles from "./BookmarkList.module.css";
import Card from "../../UI/Card";
import BookmarkItem from "./BookmarkItem";
import globalContext from "../../../store/global-context";

const BookmarkList = () => {
	const listCtx = useContext(globalContext);

	const { bookmarkList } = listCtx;
	// console.log(bookmarkList);

	const deleteHandler = (id) => {
		listCtx.deleteBookmark(id);
	};

	const editHandler = (markItemUpdate) => {
		listCtx.editBookmark(markItemUpdate);
		listCtx.formDisplayHandler(true);
	};

	let dataList = bookmarkList.map((markitem) => {
		return (
			<BookmarkItem
				key={markitem.id}
				id={markitem.id}
				title={markitem.title}
				bookmark={markitem.bookmark}
				onDelete={deleteHandler}
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
