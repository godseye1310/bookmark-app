import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import BookmarkList from "./components/Layout/Bookmarks/BookmarkList";

function App() {
	return (
		<ContextProvidder>
			<Header />
			<AddBookmark />
			<BookmarkList />
		</ContextProvidder>
	);
}

export default App;
