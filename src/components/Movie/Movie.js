import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Line from "../common/Line";
import { motion } from "framer-motion";
import { fade, lineAnimation, photoAnimation } from "../../animation";

const Movie = ({ title, imgSrc, link }) => {
	return (
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
	);
};

const StyledMovie = styled.div`
	padding-bottom: 10rem;
	h2 {
		padding: 1rem 0;
		color: black;
	}
	.img-wrapper {
		overflow: hidden;
		display: inline-block;
		width: 100%;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default Movie;
