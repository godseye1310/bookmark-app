import React, { useContext } from "react";
import styles from "./AddBookmark.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";
import Card from "../UI/Card";

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
			<Card className={styles.bg}>
				<form onSubmit={addBoomarkHandler} className={styles.form}>
					<div className={styles.input}>
						<label htmlFor="title">Bookmark title :</label>
						<input
							type="text"
							id="title"
							value={mytitle}
							onChange={handleTitleInput}
							required
							spellCheck="false"
						/>
					</div>
					<div className={styles.input}>
						<label htmlFor="bookMark">Bookmark Page :</label>
						<input
							type="text"
							id="bookMark"
							value={myBookmark}
							onChange={handleBookmarkInput}
							required
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

export default React.memo(AddBookmark);
