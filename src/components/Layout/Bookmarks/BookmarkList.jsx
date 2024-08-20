import React, { useContext } from "react";
import styles from "./BookmarkList.module.css";
import Card from "../../UI/Card";
import BookmarkItem from "./BookmarkItem";
import globalContext from "../../../store/global-context";

const BookmarkList = () => {
	const listCtx = useContext(globalContext);

	const { bookmarkList } = listCtx;
	// console.log("re-evaluated cause of context");

	const deleteHandler = (delitem) => {
		listCtx.deleteBookmark(delitem);
	};

	const editHandler = (editItem) => {
		listCtx.setEdit(editItem);
		listCtx.formDisplayHandler(true);
	};

	const getFaviconUrl = (website, size = 128) => {
		return `https://www.google.com/s2/favicons?domain=${
			new URL(website).hostname
		}&sz=${size}`;
	};

	let dataList = bookmarkList.map((markitem) => {
		return (
			<BookmarkItem
				favicon={getFaviconUrl(markitem.bookmark)}
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
