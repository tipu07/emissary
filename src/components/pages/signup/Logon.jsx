import React, { useState } from "react";
import { Link } from "react-router-dom";

function Logon({ data }) {
	const [pass, setPass] = useState(false);
	const [formVal, setFormVal] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm_password: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	const passView = () => {
		setPass(!pass);
	};
	return (
		<>
			<section id="logon">
				<div className="contain sm">
					<form action="" method="POST" onSubmit={inputHandle}>
						<div className="log_blk">
							<div className="txt text-center">
								<h3>{data.heading}</h3>
								<p>
									{data.para} <Link to={data.para_link}>{data.para_ex}</Link>
								</p>
							</div>
							<div className="or">Or</div>
							<div className="form_row row">
								<div className="col-xs-12">
									<h6 className="require">Your Name</h6>
									<div className="form_blk">
										<input type="text" name="name" id="name" value={formVal.name} onChange={inputHandle} className="input" placeholder="eg: John Wick" />
									</div>
								</div>
								<div className="col-xs-12">
									<h6 className="require">Email Address</h6>
									<div className="form_blk">
										<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
									</div>
								</div>
								<div className="col-xs-12">
									<h6 className="require">Phone Number</h6>
									<div className="form_blk">
										<input type="text" name="phone" id="phone" value={formVal.phone} onChange={inputHandle} className="input" placeholder="eg: +92300 000 0000" />
									</div>
								</div>
								<div className="col-xs-12">
									<h6 className="require">Password</h6>
									<div className="form_blk pass_blk">
										<input type={!pass ? "password" : "text"} name="password" id="password" value={formVal.password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" autoComplete="new-password" />
										<i className={!pass ? "icon-eye" : "icon-eye-slash"} onClick={passView}></i>
									</div>
								</div>
								<div className="col-xs-12">
									<h6 className="require">Confirm Password</h6>
									<div className="form_blk pass_blk">
										<input type={!pass ? "password" : "text"} name="confirm_password" id="confirm_password" value={formVal.confirm_password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" autoComplete="new-password" />
										<i className={!pass ? "icon-eye" : "icon-eye-slash"} onClick={passView}></i>
									</div>
								</div>
								<div className="col-xs-12">
									<div className="form_blk">
										<div className="lbl_btn">
											<input type="checkbox" name="confirm" id="confirm" />
											<label htmlFor="confirm">
												I agree to Emissary Recruiting Solutions, Inc.&nbsp;
												<Link target="_blank" to={data.form.label.text_01}>
													{data.form.label.text_01}
												</Link>
												&nbsp;and&nbsp;
												<Link target="_blank" to={data.form.label.text_02}>
													{data.form.label.text_02}
												</Link>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="btn_blk form_btn">
								<button type="submit" className="site_btn round block">
									{data.form.btn}
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Logon;
