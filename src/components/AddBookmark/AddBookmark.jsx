import React, { useContext } from "react";
import styles from "./AddBookmark.module.css";
import ModalOverlay from "./../UI/ModalOverlay";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";

const AddBookmark = () => {
	const formCtx = useContext(globalContext);

	const { mytitle, setTitle, myBookmark, setBookmark } = formCtx.setData;

	const titleHandler = (event) => {
		setTitle(event.target.value);
	};
	const passcodeHandler = (event) => {
		setBookmark(event.target.value);
	};

	const addPasswordHandler = (event) => {
		event.preventDefault();

		const bookmarkData = {
			title: mytitle,
			bookmark: myBookmark,
			id: Math.random().toString(),
		};

		formCtx.addBookmark(bookmarkData);
		setTitle("");
		setBookmark("");
		formCtx.formDisplayHandler(false);
		// console.log(bookmarkData);
	};

	const closeForm = () => {
		formCtx.formDisplayHandler(false);
		setTitle("");
		setBookmark("");
	};

	let addBookmarkForm = (
		<ModalOverlay onClose={closeForm}>
			<form onSubmit={addPasswordHandler} className={styles.form}>
				<div>
					<label htmlFor="title">Bookmark title :</label>
					<input
						type="text"
						id="title"
						value={mytitle}
						onChange={titleHandler}
						required
					/>
				</div>
				<div>
					<label htmlFor="bookMark">Bookmark Page :</label>
					<input
						type="text"
						id="bookMark"
						value={myBookmark}
						onChange={passcodeHandler}
						required
					/>
				</div>
				<div>
					<Button onClick={closeForm}>X</Button>
					<Button type="submit">Add </Button>
				</div>
			</form>
		</ModalOverlay>
	);
	return <>{formCtx.onDisplay && addBookmarkForm}</>;
};

export default AddBookmark;
