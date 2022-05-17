import React, { useState } from "react";

const PersonalInfoBlk = ({ val }) => {
	const [formVal, setFormVal] = useState({
		fname: "Jennifer",
		lname: "Kem",
		phone: "02077829920",
		email: "jenniferkem@gmail.com",
		dob: "12-31-1992",
		gender: "female",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<div className="blk">
				<h4 className="subheading">{val.heading}</h4>
				<div className="dp_blk upLoadDp">
					<div className="ico fill round">
						<img src={val.dp} alt={val.dp_alt} />
					</div>
					<div className="txt">
						<div className="btn_blk">
							<button type="button" className="site_btn sm">
								Change Photo
							</button>
							<input type="file" name="dp_image" id="dp_image" hidden />
						</div>
						<div className="br"></div>
						<div>Acceptable only jpg, png</div>
						<div>The maximum file size is 500 kb and the minimum size is 80 kb.</div>
					</div>
				</div>
				<div className="form_row row">
					<div className="col-sm-4 col-xs-6">
						<h6>First Name</h6>
						<div className="form_blk">
							<input type="text" name="fname" id="fname" value={formVal.fname} onChange={inputHandle} className="input" placeholder="eg: John" />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Last Name</h6>
						<div className="form_blk">
							<input type="text" name="lname" id="lname" value={formVal.lname} onChange={inputHandle} className="input" placeholder="eg: Wick" />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Phone Number</h6>
						<div className="form_blk">
							<input type="text" name="phone" id="phone" value={formVal.phone} onChange={inputHandle} className="input" placeholder="eg: +92300 0000 000" />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Email Address</h6>
						<div className="form_blk">
							<input type="text" id="email" name="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" readOnly={true} />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Date of Birth</h6>
						<div className="form_blk">
							<input type="text" name="dob" id="dob" value={formVal.dob} onChange={inputHandle} className="input" placeholder="eg: 01-01-1998" />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Gender</h6>
						<div className="form_blk">
							<select name="gender" id="gender" value={formVal.gender} onChange={inputHandle} className="input">
								<option value="">Select</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="others">Others</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfoBlk;
