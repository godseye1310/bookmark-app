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

		formCtx.addBookmark(bookmarkData);
		setTitle("");
		setBookmark("");
		formCtx.formDisplayHandler(false);
		formCtx.handleBtn(true);
		// console.log(bookmarkData);
	};

	const closeForm = () => {
		formCtx.formDisplayHandler(false);
		formCtx.handleBtn(true);
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
					<Button type="submit">{formCtx.btnState ? "Add" : "Update"} </Button>
				</div>
				{!formCtx.btnState && (
					<p>
						Note : Closing without Updating will lead to{" "}
						<strong>
							<em>loss</em>
						</strong>{" "}
						of saved bookmark.{" "}
						<em>Strongly Directed to click Update even if you make no changes</em>
					</p>
				)}
			</form>
		</ModalOverlay>
	);
	return <>{formCtx.onDisplay && addBookmarkForm}</>;
};

export default React.memo(AddBookmark);
