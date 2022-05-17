import React from "react";
import Data from "../../dummy";
import Logon from "./Logon";

const Reset = () => {
	return (
		<>
			<Logon data={Data.reset} />
		</>
	);
};

export default Reset;
