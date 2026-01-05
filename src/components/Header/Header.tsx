import styled from "styled-components";

const HeaderContainer = styled.header`
	background-color: #f2f2f2;
	max-width: 1440px;
	margin: 0 auto;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 14px;
`;

interface HeaderProps {
	children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
	return <HeaderContainer>{children}</HeaderContainer>;
};
