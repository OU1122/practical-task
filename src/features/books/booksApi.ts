import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Book, OpenLibraryResponse } from "./book";
// import type // todo

export const booksApi = createApi({
	reducerPath: "booksApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://openlibrary.org/search.json",
	}),
	endpoints: (builder) => ({
		getSearchResults: builder.query<Book[], string>({
			query: (searchTerm) => `?q=${searchTerm}`,
			transformResponse: (response: OpenLibraryResponse) =>
				response.docs.map((book) => ({
					title: book.title,
					authorName: book.author_name ?? [],
					coverUrl: book.cover_i
						? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
						: null,
					published: book.first_publish_year,
				})),
		}),
	}),
});

export const { useGetSearchResultsQuery } = booksApi;
