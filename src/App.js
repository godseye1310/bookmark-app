import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import BookmarkList from "./components/Layout/Bookmarks/BookmarkList";
import { DataProvider } from "./store/data-and-edit-context";

function App() {
	return (
		<ContextProvidder>
			<DataProvider>
				<Header />
				<AddBookmark />
				<BookmarkList />
			</DataProvider>
		</ContextProvidder>
	);
}

export default App;
