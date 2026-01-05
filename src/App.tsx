import BookSearch from "./components/BookSearch";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<>
			<GlobalStyles />
			<Header>
				<BookSearch />
			</Header>
		</>
	);
}

export default App;
