import React from "react";
import ReactDOM from "react-dom";
import styles from "./ModalOverlay.module.css";
import Card from "./Card";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClose} />;
};
const ModalContent = (props) => {
	return <Card className={styles.modalContent}>{props.children}</Card>;
};
const modalPortalID = document.getElementById("overlay");
const ModalOverlay = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalPortalID)}
			{ReactDOM.createPortal(
				<ModalContent>{props.children}</ModalContent>,
				modalPortalID
			)}
		</>
	);
};

export default ModalOverlay;
