import React from "react";
import Line from "../common/Line";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, lineAnimation } from "../../animation";
import { StyledMovie } from "../../style";
import { useScroll } from "../../hooks/useScroll";

const ScrollAnimatedMovie = ({ title, link, imgSrc }) => {
	const [controls, element] = useScroll();
	const animation = {
		ref: element,
		variants: fade,
		animate: controls,
		initial: "hidden",
	};
	return (
		<motion.div {...animation}>
			<StyledMovie>
				<motion.h2 variants={fade}>{title}</motion.h2>
				<Line
					variants={lineAnimation}
					highness="0.5rem"
					margin="0 0 3rem 0"
					background="#23d997"
				/>
				<Link to={link} className="img-wrapper">
					<img src={imgSrc} alt={title} />
				</Link>
			</StyledMovie>
		</motion.div>
	);
};

export default ScrollAnimatedMovie;
