import React, { useContext } from "react";
import styles from "./Header.module.css";
import globalContext from "../../store/global-context";
import { useTheme } from "../../store/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const { formDisplayHandler } = useContext(globalContext);
	const showForm = () => {
		formDisplayHandler(true);
	};

	const { theme, toggleTheme } = useTheme(); // Access the current theme and toggle function

	const mytheme = theme === "light" ? true : false;

	return (
		<header className={styles.header}>
			<button
				onClick={toggleTheme}
				className={`${styles.themeBtn} ${
					mytheme ? styles.themeBtnLight : styles.themeBtnDark
				}`}
			>
				{mytheme ? (
					<FontAwesomeIcon icon={faMoon} size="2xl" style={{ color: "#4169e1" }} />
				) : (
					<FontAwesomeIcon icon={faSun} size="2xl" style={{ color: "#FFD43B" }} />
				)}{" "}
				Theme
			</button>
			<div>
				<h1>Save Bookmarks</h1>
			</div>
			<button onClick={showForm} className={styles.addBtn}>
				Add New Bookmark
			</button>
		</header>
	);
};

export default Header;
