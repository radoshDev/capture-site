import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServisesSection/ServicesSection";
import FaqSection from "../components/FaqSection/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
