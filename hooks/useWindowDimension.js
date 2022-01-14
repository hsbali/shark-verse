import { useState, useEffect } from "react";

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
        // client-side-only code
        const { innerWidth: width, innerHeight: height } = window;
        return {width, height };
      }
    return {width: '100%', height: '100%'}
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}