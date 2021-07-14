import React from "react";
import styled from "styled-components";
import { ContainerDiv } from "../../style";
import Question from "./Question";

const FaqSection = () => {
	return (
		<FaqDiv>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<Question title="How Do I Start?" />
			<Question title="Daily Schedule" />
			<Question title="Different Payment Methods" />
			<Question title="What Products do we offer." />
		</FaqDiv>
	);
};
const FaqDiv = styled(ContainerDiv)`
	display: block;
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
		span {
			display: block;
		}
	}
`;
export default FaqSection;
