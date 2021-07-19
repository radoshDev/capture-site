import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scroll(
			{
				top: 0,
				left: 0,
			},
			[pathname]
		);
	});
	return null;
};
