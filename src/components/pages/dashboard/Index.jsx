import React from "react";
import Data from "../../dummy";
import Account from "./Account";

const Dashboard = () => {
	const { account } = Data.dashboard;
	return (
		<>
			<Account data={account} />
		</>
	);
};

export default Dashboard;
