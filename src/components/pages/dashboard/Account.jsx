import React from "react";
import { Link } from "react-router-dom";
import DashCard from "./DashCard";
import JobBlk from "../../common/JobBlk";

const Account = ({ data }) => {
	return (
		<>
			<section id="dash">
				<div className="contain">
					<h4 className="heading">{data.heading_01}</h4>
					<div className="flex_row card_row">
						{data.card.map((val) => {
							return (
								<div className="col" key={val.id}>
									<DashCard {...val} />
								</div>
							);
						})}
					</div>
					<div className="br"></div>
					<div className="br"></div>
					<div className="top_head">
						<h4 className="heading">{data.heading_02}</h4>
						<div className="btn_blk">
							<Link to={data.btn_link} className="site_btn round">
								{data.btn}
							</Link>
						</div>
					</div>
					{data.jobs.map((val) => {
						return <JobBlk {...val} key={val.id} />;
					})}
				</div>
			</section>
		</>
	);
};

export default Account;
