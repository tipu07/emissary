import React from "react";
import Data from "../../dummy";
import Error404 from "../../common/Error404";

const Error = () => {
	return (
		<>
			<Error404 data={Data.error} />
		</>
	);
};

export default Error;
