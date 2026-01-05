import styled from "styled-components";
import type { Book } from "../../features/books/book";

interface SearchResultItem {
	book: Book;
}

const ListItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	max-width: 406px;
	max-height: 72px;
	padding-left: 8px;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

const ImageWrapper = styled.div`
	min-width: 72px;
	min-height: 72px;
	width: 72px;
	height: 72px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const BookDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4px 8px;
`;

const Title = styled.h2`
	font-size: 16px;
	margin: 0;
`;

const Paragraph = styled.p`
	margin: 8px 0px;
	font-size: 14px;
`;

const ItemLink = styled.a`
	text-decoration: none;
	color: inherit;
`;

export const SearchResultItem = ({ book }: SearchResultItem) => {
	return (
		<ItemLink href={`https://www.amazon.com/s?k=${book.title}`}>
			<ListItem>
				<ImageWrapper>
					<Image
						src={book.coverUrl ? book.coverUrl : "/book-placeholder.png"}
						alt={
							book.coverUrl
								? `Cover of ${book.title}`
								: `${book.title} cover not available`
						}
						loading="lazy"
					/>
				</ImageWrapper>
				<BookDetails>
					<Title>
						{book.title.length > 60
							? book.title.slice(0, 60).concat("...")
							: book.title}
					</Title>
					<Paragraph>
						{book.authorName[0]} - Published {book.published}
					</Paragraph>
				</BookDetails>
			</ListItem>
		</ItemLink>
	);
};
