import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components/macro";
import { pageAnimation, titleAnimation } from "../animation";

const ContactUs = () => {
	return (
		<StyledContact
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send an email.</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Social Media</h2>
					</Social>
				</Hide>
			</div>
		</StyledContact>
	);
};

const StyledContact = styled(motion.div)`
	background: white;
	color: #353535;
	padding: 5rem 10rem;
	min-height: 90vh;
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	@media (max-width: 1500px) {
		margin-top: 5rem;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;
export default ContactUs;
