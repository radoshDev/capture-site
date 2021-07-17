import React from "react";
import styled from "styled-components/macro";
import Line from "../common/Line";

const Question = ({ title }) => {
	return (
		<QuestionDiv>
			<h4>{title}</h4>
			<div className="answer">
				<p>Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem
					accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat
					corporis.
				</p>
			</div>
			<Line highness="0.2rem" margin="2rem 0" />
		</QuestionDiv>
	);
};

const QuestionDiv = styled.div`
	margin: 3rem 0;
	cursor: pointer;

	.answer {
		padding: 2rem 0;
		p {
			padding: 0;
			margin: 1rem 0;
		}
	}
	.faq-line {
		background: #ccc;
		height: 0.2rem;
		margin: 2rem 0;
		width: 100%;
	}
`;
export default Question;
