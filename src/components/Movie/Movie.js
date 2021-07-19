import React from "react";
import { Link } from "react-router-dom";
import Line from "../common/Line";
import { motion } from "framer-motion";
import { fade, lineAnimation, photoAnimation } from "../../animation";
import { StyledMovie } from "../../style";
import ScrollAnimatedMovie from "./ScrollAnimatedMovie";

const Movie = ({ title, imgSrc, link, index }) => {
	return (
		<>
			{index === 0 ? (
				<StyledMovie>
					<motion.h2 variants={fade}>{title}</motion.h2>
					<Line
						variants={lineAnimation}
						highness="0.5rem"
						margin="0 0 3rem 0"
						background="#23d997"
					/>
					<Link to={link} className="img-wrapper">
						<motion.img variants={photoAnimation} src={imgSrc} alt={title} />
					</Link>
				</StyledMovie>
			) : (
				<ScrollAnimatedMovie title={title} imgSrc={imgSrc} link={link} />
			)}
		</>
	);
};
export default Movie;
