import React from "react";
import Data from "../../dummy";
import Logon from "./Logon";

const SignIn = () => {
	return (
		<>
			<Logon data={Data.signin} />
		</>
	);
};

export default SignIn;
