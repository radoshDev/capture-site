import React from "react";
//Import icons
import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";
import { ContainerDiv, DescriptionDiv, ImageDiv } from "../../style";
import styled from "styled-components";

const ServicesSection = () => {
	return (
		<ServicesDiv>
			<DescriptionDiv>
				<h2>
					Hight <span>quality</span> service.
				</h2>
				<div className="cards">
					<CardDiv>
						<div className="icon">
							<img src={clock} alt="clock icon" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardDiv>
					<CardDiv>
						<div className="icon">
							<img src={teamwork} alt="teamwork icon" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardDiv>
					<CardDiv>
						<div className="icon">
							<img src={diaphragm} alt="diaphragm icon" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardDiv>
					<CardDiv>
						<div className="icon">
							<img src={money} alt="money icon" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardDiv>
				</div>
			</DescriptionDiv>
			<ImageDiv>
				<img src={home2} alt="camera" />
			</ImageDiv>
		</ServicesDiv>
	);
};
const ServicesDiv = styled(ContainerDiv)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0 4rem 0;
	}
	.cards {
		display: flex;
		flex-flow: row wrap;
	}
`;
const CardDiv = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;
export default ServicesSection;
