import React, { useContext } from "react";
import styles from "./BookmarkList.module.css";
import Card from "../../UI/Card";
import BookmarkItem from "./BookmarkItem";
import globalContext from "../../../store/global-context";
import useData from "../../../store/data-and-edit-context";

const BookmarkList = () => {
	const { bookmarkList, deleteBookmark, formDisplayHandler } = useContext(globalContext);

	const {
		setEdit,
		// titleref, bookmarkref
	} = useData();

	console.log("re-evaluated cause of context");

	const deleteHandler = (delitem) => {
		deleteBookmark(delitem);
	};

	const editHandler = (editItem) => {
		// if (titleref.current && bookmarkref.current && editItem.title && editItem.bookmark) {
		// 	titleref.current.value = editItem.title;
		// 	bookmarkref.current.value = editItem.bookmark;
		// }

		setEdit(editItem);
		formDisplayHandler(true);
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
