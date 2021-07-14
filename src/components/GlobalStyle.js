import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 14px;
	}
	body {
		background: #1b1b1b;
		color: white;
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
	a {
		font-size: 1.1rem;
	}
	p {
		padding: 3rem 0;
		color: #ccc;
		font-size: 1.4rem;
		line-height: 150%;
	}
`;

export default GlobalStyle;