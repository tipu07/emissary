import React from "react";
import { Link } from "react-router-dom";

const ProBtn = () => {
	const data = {
		dp: "/images/01.jpg",
		alt: "DP",
		list: [
			{
				id: 1,
				text: "Dashboard",
				link: "/dashboard",
			},
			{
				id: 2,
				text: "Profile Settings",
				link: "/profile-settings",
			},
			{
				id: 3,
				text: "Sign out",
				link: "/signin",
			},
		],
	};
	return (
		<>
			<div id="pro_btn" class="drop_down">
				<div class="ico fill round drop_btn">
					<img src={data.dp} alt={data.alt} />
				</div>
				<div class="drop_cnt">
					<ul class="drop_lst">
						{data.list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.link}>{val.text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProBtn;
