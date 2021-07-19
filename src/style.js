import styled from "styled-components/macro";

export const ContainerDiv = styled.div`
	color: white;
	min-height: 70vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 5rem;
	align-items: center;
	/* justify-content: space-between; */
	padding: 5rem 10rem;
	@media screen and (max-width: 1220px) {
		grid-template-rows: min-content 400px;
		grid-template-columns: 1fr;
		grid-row-gap: 2rem;
	}
	@media screen and (max-width: 900px) {
		padding: 2rem 3rem;
	}
`;

export const DescriptionDiv = styled.div`
	z-index: 2;
`;
export const ImageDiv = styled.div`
	overflow: hidden;
	z-index: 2;
	height: 100%;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;
export const StyledMovie = styled.div`
	padding-bottom: 10rem;
	h2 {
		padding: 1rem 0;
		color: black;
	}
	.img-wrapper {
		overflow: hidden;
		display: inline-block;
		width: 100%;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;
