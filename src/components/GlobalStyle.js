import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 14px;
		font-family: 'Inter', sans-serif;
		@media screen and (max-width: 1500px) {
			font-size: 80%;
		}
	}
	body {
		background: #1b1b1b;
		color: white;
		overflow-x: hidden;
	}
	button {
		font-weight: bold;
		font-size: 1.1.rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #23d997;
		background: transparent;
		color: white;
		transition: all .3s ease;
		&:hover {
			background-color: #23d997;
		}
	}
	h2 {
		font-weight: lighter;
		font-size: 4rem;

		span {
			font-weight: bold;
			color: #23d997;
		}
	}
	h4 {
		font-size: 2rem;
	}
	a {
		font-size: inherit;
	}
	p {
		padding: 3rem 0;
		color: #ccc;
		font-size: 1.4rem;
		line-height: 150%;
	}
	hr {
		border: none;
	}
`;

export default GlobalStyle;
