import React from "react";
import ReactDOM from "react-dom";
import styles from "./ModalOverlay.module.css";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClose} />;
};
const ModalContent = (props) => {
	return <div className={styles.modalContent}>{props.children}</div>;
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
