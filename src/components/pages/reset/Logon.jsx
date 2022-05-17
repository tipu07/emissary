import React, { useState } from "react";

function Logon({ data }) {
	const [pass, setPass] = useState(false);
	const [formVal, setFormVal] = useState({
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
								<h4>{data.heading}</h4>
								<p>{data.para}</p>
							</div>
							<div className="or">Or</div>
							<div className="form_row row">
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
