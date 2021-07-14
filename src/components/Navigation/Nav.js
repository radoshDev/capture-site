import React from "react";
import styled from "styled-components";

const Nav = () => {
	return (
		<StyledNav>
			<h1 id="logo">
				<a href="#">Capture</a>
			</h1>
			<ul>
				<li>
					<a href="#">1. About Us</a>
				</li>
				<li>
					<a href="#">2. Our Work</a>
				</li>
				<li>
					<a href="#">3. Contact Us</a>
				</li>
			</ul>
		</StyledNav>
	);
};
const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: #282828;
	margin: 0 auto;
	min-height: 10vh;
	padding: 1rem 10rem;

	a {
		color: inherit;
		text-decoration: none;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(min-content, auto));
		grid-column-gap: 10rem;
		list-style: none;
	}
	h1 {
		font-family: "Lobster", cursive;
		font-size: 1.5rem;
		font-weight: lighter;
	}
`;
export default Nav;
