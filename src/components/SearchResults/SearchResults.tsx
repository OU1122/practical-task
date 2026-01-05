import styled from "styled-components";
import type { Book } from "../../features/books/book";
import SearchResultItem from "../SearchResultItem";

interface SearchResultsProps {
	books: Book[];
	isAnyLoading?: boolean;
}

const UnorderedList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
	list-style-type: none;
	margin-block-start: 0;
	margin-block-end: 0;
	padding-inline-start: 0;
`;

export const SearchResults = ({
	books,
	isAnyLoading = false,
}: SearchResultsProps) => {
	if (isAnyLoading) {
		return (
			<UnorderedList>
				{Array.from({ length: 5 }).map((_, i) => (
					<SearchResultItem
						key={i}
						book={undefined}
						isAnyLoading={isAnyLoading}
					/>
				))}
			</UnorderedList>
		);
	}

	return (
		<UnorderedList>
			{books.map((book, i) => (
				<SearchResultItem
					key={i}
					book={book}
				/>
			))}
		</UnorderedList>
	);
};
