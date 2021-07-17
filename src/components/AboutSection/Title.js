import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { titleAnimation } from "../../animation";

const Title = ({ children }) => {
	return (
		<StyledTitle>
			<motion.h2 variants={titleAnimation}>{children}</motion.h2>
		</StyledTitle>
	);
};
const StyledTitle = styled.div`
	overflow: hidden;
`;
export default Title;
