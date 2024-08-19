import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import BookmarkList from "./components/Layout/Bookmarks/BookmarkList";
import DisplayProvider from "./store/DisplayProvider";
import SetDataProvider from "./store/SetDataProvider";

function App() {
	return (
		<SetDataProvider>
			<ContextProvidder>
				<DisplayProvider>
					<Header />
					<AddBookmark />
					<BookmarkList />
				</DisplayProvider>
			</ContextProvidder>
		</SetDataProvider>
	);
}

export default App;
