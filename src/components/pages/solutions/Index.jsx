import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Serve from "../../common/Serve";
import Agency from "../../common/Agency";

const Solutions = () => {
	const { cover, agency, serve } = Data.solution;
	return (
		<>
			<Cover data={cover} />
			<Agency data={agency} />
			<Serve data={serve} />
		</>
	);
};

export default Solutions;
