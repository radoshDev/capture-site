import React from "react";
import styled from "styled-components";
import home1 from "../../img/home1.png";
import { ContainerDiv, DescriptionDiv, ImageDiv } from "../../style";

const AboutSection = () => {
	return (
		<ContainerDiv>
			<DescriptionDiv>
				<div className="title">
					<Hide>
						<h2>We work to made</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span>
						</h2>
					</Hide>
					<Hide>
						<h2>come true.</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</DescriptionDiv>
			<ImageDiv>
				<img src={home1} alt="A man with camera" />
			</ImageDiv>
		</ContainerDiv>
	);
};

const Hide = styled.div`
	overflow: hidden;
`;

export default AboutSection;
