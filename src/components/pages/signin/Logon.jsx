import React, { useState } from "react";
import { Link } from "react-router-dom";

function Logon({ data }) {
	const [pass, setPass] = useState(false);
	const [formVal, setFormVal] = useState({
		email: "",
		password: "",
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
					<form action="/dashboard" method="POST" onSubmit={inputHandle}>
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
									<h6 className="require">Email Address</h6>
									<div className="form_blk">
										<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
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
									<div className="form_blk">
										<div className="lbl_btn">
											<input type="checkbox" name="remember" id="remember" />
											<label htmlFor="remember">Remember me</label>
										</div>
									</div>
								</div>
							</div>
							<div className="btn_blk form_btn">
								<button type="submit" className="site_btn round block">
									{data.form.btn}
								</button>
							</div>
							<div className="forgot text-center">
								<Link to={data.forgot_link} id="pass">
									{data.forgot}
								</Link>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Logon;
