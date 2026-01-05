import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface SearchBarProps {
	input: string;
	setInput: Dispatch<SetStateAction<string>>;
}

const Form = styled.form`
	width: 100%;
	height: 100%;
	background: #e3e3e3;
	border-radius: 2px;
`;

const Input = styled.input`
	padding-left: 14px;
	box-sizing: border-box;
	font-size: 14px;
	line-height: 130%;
	width: 100%;
	height: 100%;
	border: none;
	background: transparent;
`;

export const SearchBar = ({ input, setInput }: SearchBarProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInput(value);
	};

	 const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
	
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				name="search"
				placeholder="Quick search..."
				value={input}
				onChange={(e) => handleChange(e)}
			/>
		</Form>
	);
};
