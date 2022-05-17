import React, { useState } from "react";

function Logon({ data }) {
	const [formVal, setFormVal] = useState({
		email: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
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
							<div className="form_row row">
								<div className="col-xs-12">
									<h6 className="require">Email Address</h6>
									<div className="form_blk">
										<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
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
