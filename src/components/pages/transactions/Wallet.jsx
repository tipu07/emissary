import React from "react";
import TransTbl from "./TransTbl";

const Wallet = ({ data }) => {
	const { table } = data;
	return (
		<>
			<section id="trans">
				<div className="contain">
					<h4 className="subheading">{data.heading}</h4>
					<TransTbl dataLst={table} />
				</div>
			</section>
		</>
	);
};

export default Wallet;
