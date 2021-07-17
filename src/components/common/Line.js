import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components/macro";

const Line = (props) => {
	return <StyledLine variants={props.variants} {...props} />;
};
const StyledLine = styled(motion.hr)`
	background: ${(p) => p.background || "#ccc"};
	height: ${(p) => p.highness || "2px"};
	margin: ${(p) => p.margin || "0"};
	width: ${(p) => p.width || "100%"};
`;
export default Line;
