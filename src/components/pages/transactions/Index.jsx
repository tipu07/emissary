import React from "react";
import Data from "../../dummy";
import Wallet from "./Wallet";

const Transactions = () => {
	// const { table } = Data.transactions;
	return (
		<>
			<Wallet data={Data.transactions} />
		</>
	);
};

export default Transactions;
