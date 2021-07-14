import styled from "styled-components";

export const ContainerDiv = styled.div`
	color: white;
	min-height: 90vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 5rem;
	align-items: center;
	/* justify-content: space-between; */
	padding: 5rem 10rem;
`;

export const DescriptionDiv = styled.div`
	/* padding-right: 5rem; */
`;
export const ImageDiv = styled.div`
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;
