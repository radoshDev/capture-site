import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components/macro";
import { sliderAnimation } from "../../animation";

const Frame = (props) => {
	return <StyledFrame variants={sliderAnimation} {...props} />;
};

const StyledFrame = styled(motion.div)`
	background: ${(p) => p.background};
	left: 0;
	height: 100vh;
	position: fixed;
	top: 10%;
	width: 100%;
	z-index: 2;
`;
export default Frame;
