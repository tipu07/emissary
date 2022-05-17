import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, toggle, logged }) {
	const data = {
		noti: {
			src: "/images/icon-bell.svg",
			alt: "Bell",
		},
		pro_btn: {
			dp: "/images/01.jpg",
			alt: "DP",
		},
	};
	return (
		<>
			<nav className="ease">
				{!logged ? (
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
							<li>
								<NavLink to="/solutions" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
									Solutions
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
									Contact us
								</NavLink>
							</li>
						</ul>
						<ul id="cta">
							<li>
								<NavLink to="/signin" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
									Sign in
								</NavLink>
							</li>
							<li>
								<Link to="/signup" className="site_btn long round" onClick={toggle}>
									Sign up
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<>
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
								<li>
									<NavLink to="/solutions" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
										Solutions
									</NavLink>
								</li>
								<li>
									<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggle}>
										Contact us
									</NavLink>
								</li>
							</ul>
						</div>
						<ul id="icon_btn">
							<li id="noti">
								<Link to="/notifications">
									<img src={data.noti.src} alt={data.noti.alt} />
								</Link>
							</li>
						</ul>
						<div id="pro_btn" className="drop_down">
							<div className="ico fill round drop_btn">
								<img src={data.pro_btn.dp} alt={data.pro_btn.alt} />
							</div>
							<div className="drop_cnt">
								<ul className="drop_lst">
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/profile-settings">Profile Settings</Link>
									</li>
									<li>
										<Link to="/transactions">Transactions</Link>
									</li>
									<li>
										<Link to="/mine-packages">My Packages</Link>
									</li>
									<li>
										<Link to="/signin">Sign out</Link>
									</li>
								</ul>
							</div>
						</div>
					</>
				)}
			</nav>
		</>
	);
}

export default Navigation;
