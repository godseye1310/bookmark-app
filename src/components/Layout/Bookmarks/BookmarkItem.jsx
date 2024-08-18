import React from "react";
import Button from "../../UI/Button";

const BookmarkItem = (props) => {
	const handleDelete = () => {
		props.onDelete(props.id);
	};
	return (
		<>
			<li>
				<div>
					<h3>
						{props.title} :
						<a href="$" target="blank">
							{props.bookmark}
						</a>
					</h3>
				</div>
				<div>
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={props.onEdit}>Edit</Button>
				</div>
			</li>
			<hr />
		</>
	);
};

export default BookmarkItem;
