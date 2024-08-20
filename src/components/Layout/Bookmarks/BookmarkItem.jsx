import React from "react";
import styles from "./BookmarkItem.module.css";
import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const BookmarkItem = (props) => {
	let title = props.title;
	if (props.title.length > 30) {
		title = props.title.split("").slice(0, 30).join("") + "...";
	}
	return (
		<li className={styles.list}>
			<div className={styles.bookmark}>
				<a
					href={props.bookmark}
					target="blank"
					rel="noreferrer noopener"
					title={props.title.length > 30 ? props.title : null}
				>
					<div className={styles.icon}>
						<img src={props.favicon} width="50" height="50" alt={`${props.title} icon`} />
					</div>
					<p>{title}</p>
				</a>
			</div>

			<div className={styles.btn}>
				<Button onClick={props.onDelete}>
					<FontAwesomeIcon icon={faTrashCan} className={styles["hover-pulse"]} />
					<span>Remove</span>
				</Button>
				<Button onClick={props.onEdit}>
					<FontAwesomeIcon icon={faPenToSquare} />
					<span>Edit</span>
				</Button>
			</div>
		</li>
	);
};

export default BookmarkItem;
