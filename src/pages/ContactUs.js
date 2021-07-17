import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components/macro";
import { pageAnimation } from "../animation";

const ContactUs = () => {
	return (
		<StyledContact
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<h1>Contact Us</h1>
		</StyledContact>
	);
};

const StyledContact = styled(motion.div)``;
export default ContactUs;
