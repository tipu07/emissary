import React from "react";
import Data from "../../dummy";
import PricingPlan from "../../common/PricingPlan";

const Packages = () => {
	// const { packages } = Data.packages;
	return (
		<>
			<PricingPlan data={Data.packages} headingShow={false} />
		</>
	);
};

export default Packages;
