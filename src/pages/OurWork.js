import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie/Movie";
import { movieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Frame from "../components/common/Frame";
import { ScrollTop } from "../components/common/ScrollTop";

const OurWork = () => {
	const movies = movieState();
	const colors = ["#fffebf", "#ff8efb", "#8ed2ff", "#8effa0"];
	return (
		<WorkDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{colors.map((color, i) => (
				<Frame background={color} key={color + i} />
			))}
			{movies &&
				movies.map((movie, i) => (
					<Movie
						title={movie.title}
						imgSrc={movie.mainImg}
						link={movie.url}
						index={i}
						key={movie.id}
					/>
				))}
			<ScrollTop />
		</WorkDiv>
	);
};

const WorkDiv = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	background: white;
`;
export default OurWork;
