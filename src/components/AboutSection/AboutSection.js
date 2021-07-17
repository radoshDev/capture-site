import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { fade, photoAnimation } from "../../animation";
import home1 from "../../img/home1.png";
import { ContainerDiv, DescriptionDiv, ImageDiv } from "../../style";
import Wave from "../common/Wave";
import Title from "./Title";

const AboutSection = () => {
	return (
		<ContainerDiv>
			<DescriptionDiv>
				<div className="title">
					<Title>We work to made</Title>
					<Title>
						your <span>dreams</span>
					</Title>
					<Title>come true.</Title>
				</div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</DescriptionDiv>
			<ImageDiv>
				<motion.img
					variants={photoAnimation}
					src={home1}
					alt="A man with camera"
				/>
			</ImageDiv>
			<Wave />
		</ContainerDiv>
	);
};

export default AboutSection;
