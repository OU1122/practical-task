export interface Book {
	title: string;
	authorName: string[];
	coverUrl: string | null;
	published: number;
}

export interface OpenLibraryDoc {
	title: string;
	author_name: string[];
	cover_i: string;
	first_publish_year: number;
}

export interface OpenLibraryResponse {
	docs: OpenLibraryDoc[];
}
