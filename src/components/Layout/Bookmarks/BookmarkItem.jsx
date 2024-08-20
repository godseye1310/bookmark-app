import React from "react";
import Button from "../../UI/Button";

const BookmarkItem = (props) => {
	return (
		<>
			<li>
				<div>
					<h3>
						{props.title} :
						<a href={props.bookmark} target="blank" rel="noreferrer noopener">
							{props.bookmark}
						</a>
					</h3>
				</div>
				<div>
					<Button onClick={props.onDelete}>Delete</Button>
					<Button onClick={props.onEdit}>Edit</Button>
				</div>
			</li>
			<hr />
		</>
	);
};

export default BookmarkItem;
