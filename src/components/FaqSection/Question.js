import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components/macro";
import Line from "../common/Line";

const Question = ({ title }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<StyledQuestion layout onClick={() => setToggle((prev) => !prev)}>
			<motion.h4 layout>{title}</motion.h4>
			<AnimatePresence>
				{toggle && (
					<motion.div
						className="answer"
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.2 } }}
						exit={{ opacity: 0 }}
					>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
							autem accusamus ex laboriosam porro, adipisci quam voluptatum
							magnam placeat corporis.
						</p>
					</motion.div>
				)}
			</AnimatePresence>
			<Line highness="0.2rem" margin="2rem 0" />
		</StyledQuestion>
	);
};

const StyledQuestion = styled(motion.div)`
	margin: 2rem 0;
	cursor: pointer;

	.answer {
		padding: 2rem 0;
		p {
			padding: 0;
			margin: 1rem 0;
		}
	}
`;
export default Question;
