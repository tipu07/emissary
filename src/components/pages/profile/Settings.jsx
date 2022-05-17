import React from "react";
import ChangePass from "./ChangePass";
import PersonalInfoBlk from "./PersonalInfoBlk";
import AddressInfoBlk from "./AddressInfoBlk";

const Settings = ({ data }) => {
	const { personal_info, address_info, change_pass } = data;
	return (
		<>
			<section id="settings">
				<div className="contain">
					<form action="" method="POST">
						<PersonalInfoBlk val={personal_info} />
						<AddressInfoBlk val={address_info} />
						<div className="btn_blk form_btn text-center">
							<button type="submit" className="site_btn lg long round">
								Save
							</button>
						</div>
					</form>
					<div className="br"></div>
					<ChangePass val={change_pass} />
				</div>
			</section>
		</>
	);
};
export default Settings;
