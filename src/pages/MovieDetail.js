import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Award from "../components/Awards/Award";
import { movieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = ({ history }) => {
	const url = history.location.pathname;
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		if (url.includes("/work/")) {
			setMovie(movieState().filter((item) => item.url === url)[0]);
		}
	}, [url]);

	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{movie && (
				<StyledHeadline>
					<h2>{movie.title}</h2>
					<img src={movie.mainImg} alt="movie" />
					<div className="awards">
						{movie.awards.map((award) => (
							<Award {...award} key={award.title} />
						))}
					</div>
					<div className="secondary-image">
						<img src={movie.secondaryImg} alt="movie" />
					</div>
				</StyledHeadline>
			)}
		</motion.div>
	);
};

const StyledHeadline = styled(motion.div)`
	min-height: 90vh;
	padding-top: 10rem;
	position: relative;
	h2 {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
	.awards {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		min-height: 80vh;
	}
	.secondary-image {
		min-height: 50vh;
		img {
			width: 100%;
			height: 100vh;
			object-fit: cover;
		}
	}
`;

export default MovieDetail;
