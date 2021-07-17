import React from "react";
import styled from "styled-components/macro";
import Line from "../common/Line";

const Award = ({ title, description }) => {
	return (
		<StyledAward>
			<h3>{title}</h3>
			<Line background="#23d997" highness=".5rem" margin="1rem 0" />
			<p>{description}</p>
		</StyledAward>
	);
};

const StyledAward = styled.div`
	padding: 2rem;
	flex: 1 320px;
	max-width: 500px;
	h3 {
		font-size: 2rem;
	}
	p {
		padding: 2rem 0;
	}
`;
export default Award;
