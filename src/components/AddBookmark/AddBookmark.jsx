import React, { useContext } from "react";
import styles from "./AddBookmark.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";
import Card from "../UI/Card";
import { useTheme } from "../../store/theme-context";

const AddBookmark = () => {
	const { theme } = useTheme();
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
			<Card className={` ${theme === "light" ? styles.lightbg : styles.darkbg}`}>
				<form onSubmit={addBoomarkHandler} className={styles.form}>
					<div className={styles.input}>
						<label htmlFor="title">Bookmark title :</label>
						<input
							placeholder="Bookmark Title"
							type="text"
							id="title"
							value={mytitle}
							onChange={handleTitleInput}
							required
							spellCheck="false"
							autoFocus
						/>
					</div>
					<div className={styles.input}>
						<label htmlFor="bookMark">Bookmark Page :</label>
						<input
							placeholder="https://www.exampleBookmark.com"
							type="url"
							id="bookMark"
							value={myBookmark}
							onChange={handleBookmarkInput}
							required
							spellCheck="false"
						/>
					</div>
					<div className={styles.btn}>
						<Button onClick={closeForm}>Cancel</Button>
						<Button type="submit">{!formCtx.editingData ? "Add" : "Update"} </Button>
					</div>
				</form>
			</Card>
		</ModalOverlay>
	);
	return <>{formCtx.onDisplay && addBookmarkForm}</>;
};

export default AddBookmark;
