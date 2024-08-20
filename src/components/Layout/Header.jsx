import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import globalContext from "../../store/global-context";

const Header = () => {
	const { formDisplayHandler } = useContext(globalContext);
	const showForm = () => {
		formDisplayHandler(true);
	};

	return (
		<div className={styles.header}>
			<div>
				<h1>Save Bookmarks</h1>
			</div>
			<Button onClick={showForm}>Add New Bookmark</Button>
		</div>
	);
};

export default Header;
