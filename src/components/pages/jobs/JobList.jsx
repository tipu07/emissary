import React from "react";
import JobFilter from "./JobFilter";
import JobListings from "./JobListings";

const JobList = ({ data }) => {
	const { jobs } = data;
	return (
		<>
			<section id="jobs">
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-sm-3">
							<JobFilter />
						</div>
						<div className="col-sm">
							<div className="top_head">
								<div className="txt">
									<h3>{data.heading}</h3>
									<p>{data.show_result}</p>
								</div>
								<div className="btn_blk">
									<select name="" id="" className="input">
										<option value="">Sort by</option>
										<option value="">Newest Listings</option>
										<option value="">Oldest Listings</option>
										<option value="">Closest</option>
									</select>
								</div>
							</div>
							<JobListings listing={jobs} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobList;
