import { useEffect, useMemo, useState } from "react";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import { useGetSearchResultsQuery } from "../../features/books/booksApi";
import styled from "styled-components";

const SearchWrapper = styled.div`
	position: relative;
	width: 238px;
	height: 42px;
`;

const ResultsContainer = styled.div`
	position: absolute;
	top: 150%;
	right: 0;
	width: 434px;

	background: #e3e3e3;
	z-index: 10;

	&::before {
		content: "";
		position: absolute;
		top: -8px;
		right: 27%;
		width: 16px;
		height: 16px;
		background: #e3e3e3;
		transform: rotate(45deg);
		z-index: -10;
	}
	&::after {
		content: "";
		background-image: linear-gradient(to bottom, #e3e3e303, #e3e3e3);
		position: absolute;
		bottom: -1px;
		width: 434px;
		height: 58px;
	}
`;

const ResultsContent = styled.div`
	max-height: 320px;
	overflow-y: auto;
	background: #e3e3e3;
	padding: 12px 0px;
`;

const BookSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [input, setInput] = useState("");

	//Debouncing here to avoid calling the server on every key stroke
	//Also checking for input length as the API requires min. 3 characters
	useEffect(() => {
		const handler = setTimeout(() => {
			if (input.length >= 3) {
				setSearchTerm(input);
			} else {
				setSearchTerm("");
			}
		}, 200);

		return () => {
			clearTimeout(handler);
		};
	}, [input]);

	const {
		data: books = [],
		isFetching,
		isLoading,
	} = useGetSearchResultsQuery(searchTerm, {
		skip: searchTerm.length < 3,
	});

	const shortenedResults = useMemo(() => books.slice(0, 10), [books]);

	const isAnyLoading = isFetching || isLoading;
	const shouldShowResults =
		input.length >= 3 && !isAnyLoading && shortenedResults.length > 0;

	return (
		<>
			<SearchWrapper>
				<SearchBar
					input={input}
					setInput={setInput}
				/>
				{isAnyLoading && (
					<ResultsContainer>
						<ResultsContent>
							<SearchResults
								isAnyLoading={isAnyLoading}
								books={shortenedResults}
							/>
						</ResultsContent>
					</ResultsContainer>
				)}
				{shouldShowResults && (
					<ResultsContainer>
						<ResultsContent>
							<SearchResults books={shortenedResults} />
						</ResultsContent>
					</ResultsContainer>
				)}
			</SearchWrapper>
		</>
	);
};

export default BookSearch;
