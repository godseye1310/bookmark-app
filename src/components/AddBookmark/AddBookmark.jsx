import React, { useContext } from "react";
import styles from "./AddBookmark.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";

const AddBookmark = () => {
	const formCtx = useContext(globalContext);

	const { mytitle, setTitle, myBookmark, setBookmark } = formCtx.setData;

	const handleTitleInput = (event) => {
		setTitle(event.target.value);
	};
	const handleBookmarkInput = (event) => {
		setBookmark(event.target.value);
	};

	const addBoomarkHandler = (event) => {
		event.preventDefault();

		const bookmarkData = {
			title: mytitle,
			bookmark: myBookmark,
		};

		// console.log(formCtx.editingData);
		if (formCtx.editingData) {
			formCtx.editBookmark(formCtx.editingData._id, bookmarkData);
		} else {
			formCtx.addBookmark(bookmarkData);
		}
		formCtx.setEdit(null);

		setTitle("");
		setBookmark("");
		formCtx.formDisplayHandler(false);
		// console.log(bookmarkData);
	};

	const closeForm = () => {
		formCtx.setEdit(null);
		formCtx.formDisplayHandler(false);
		setTitle("");
		setBookmark("");
	};

	let addBookmarkForm = (
		<ModalOverlay onClose={closeForm}>
			<form onSubmit={addBoomarkHandler} className={styles.form}>
				<div>
					<label htmlFor="title">Bookmark title :</label>
					<input
						type="text"
						id="title"
						value={mytitle}
						onChange={handleTitleInput}
						required
					/>
				</div>
				<div>
					<label htmlFor="bookMark">Bookmark Page :</label>
					<input
						type="text"
						id="bookMark"
						value={myBookmark}
						onChange={handleBookmarkInput}
						required
					/>
				</div>
				<div>
					<Button onClick={closeForm}>X</Button>
					<Button type="submit">{!formCtx.editingData ? "Add" : "Update"} </Button>
				</div>
			</form>
		</ModalOverlay>
	);
	return <>{formCtx.onDisplay && addBookmarkForm}</>;
};

export default React.memo(AddBookmark);
