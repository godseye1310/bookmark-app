import React from "react";
import ContextProvidder from "./store/ContextProvidder";
import Header from "./components/Layout/Header";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import BookmarkList from "./components/Layout/Bookmarks/BookmarkList";
import DisplayProvider from "./store/DisplayProvider";
import SetDataProvider from "./store/SetDataProvider";
// import EditProvider from "./store/EditProvider";

function App() {
	return (
		<ContextProvidder>
			<SetDataProvider>
				{/* <EditProvider> */}
				<DisplayProvider>
					<Header />
					<AddBookmark />
					<BookmarkList />
				</DisplayProvider>
				{/* </EditProvider> */}
			</SetDataProvider>
		</ContextProvidder>
	);
}

export default App;
