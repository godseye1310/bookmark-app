import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import displayContext from "../../store/display-context";

const Header = () => {
	const { formDisplayHandler } = useContext(displayContext);
	const showForm = () => {
		formDisplayHandler(true);
	};

	return (
		<div className={styles.header}>
			<div>
				<h1>Bookmark App</h1>
			</div>
			<Button onClick={showForm}>Add New</Button>
		</div>
	);
};

export default Header;
