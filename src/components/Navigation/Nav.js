import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Line from "../common/Line";

const Nav = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<StyledNav>
			<h1 id="logo">
				<Link to="/">Capture</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">1. About Us</Link>
					<Line
						transition={{ duration: 0.5 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/" ? "100%" : "0%" }}
						highness="0.25rem"
						margin="0.5rem 0 0"
						background="#23d997"
					/>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
					<Line
						transition={{ duration: 0.5 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/work" ? "100%" : "0%" }}
						highness="0.25rem"
						margin="0.5rem 0 0"
						background="#23d997"
					/>
				</li>
				<li>
					<Link to="/contact">3. Contact Us</Link>
					<Line
						transition={{ duration: 0.5 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
						highness="0.25rem"
						margin="0.5rem 0 0"
						background="#23d997"
					/>
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
	padding: 2rem 10rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		padding: 1rem;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(min-content, auto));
		grid-column-gap: 10rem;
		list-style: none;
		@media screen and (max-width: 500px) {
			grid-column-gap: 1rem;
			margin-top: 1rem;
		}
	}
	h1 {
		font-family: "Lobster", cursive;
		font-size: 1.5rem;
		font-weight: lighter;
	}
`;
export default Nav;
