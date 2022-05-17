import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, toggle }) {
	return (
		<>
			<nav className="ease">
				<div id="nav" className={active ? "active" : ""}>
					<ul id="lst">
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/jobs" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Jobs
							</NavLink>
						</li>
						{/* <li>
								<NavLink to="/solutions" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
									Solutions
								</NavLink>
							</li> */}
						{/* <li>
							<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
								Contact us
							</NavLink>
						</li> */}
					</ul>
					<ul id="cta">
						{/* <li>
								<NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
									Sign in
								</NavLink>
							</li> */}
						<li>
							<Link to="/contact" className="site_btn long round" onClick={toggle}>
								Contact us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
