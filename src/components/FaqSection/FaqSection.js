import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { scrollRevealAnimation } from "../../animation";
import { useScroll } from "../../hooks/useScroll";
import { ContainerDiv } from "../../style";
import Question from "./Question";

const FaqSection = () => {
	const [controls, element] = useScroll();

	return (
		<motion.div
			ref={element}
			variants={scrollRevealAnimation}
			animate={controls}
			initial="hidden"
		>
			<FaqDiv>
				<h2>
					Any Questions <span>FAQ</span>
				</h2>
				<AnimateSharedLayout>
					<Question title="How Do I Start?" />
					<Question title="Daily Schedule" />
					<Question title="Different Payment Methods" />
					<Question title="What Products do we offer." />
				</AnimateSharedLayout>
			</FaqDiv>
		</motion.div>
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
