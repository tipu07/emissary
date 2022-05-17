import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

// Common Pages
import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/home/Index";
import About from "./components/pages/about/Index";
import Jobs from "./components/pages/jobs/Index";
import Solutions from "./components/pages/solutions/Index";
import Blog from "./components/pages/blog/Index";
import BlogDetail from "./components/pages/blog_detail/Index";
import Contact from "./components/pages/contact/Index";
import Faq from "./components/pages/faq/Index";
import Pricing from "./components/pages/pricing/Index";
import Privacy from "./components/pages/privacy/Index";
import Disclaim from "./components/pages/disclaimer/Index";
import Terms from "./components/pages/terms/Index";

// Logon Pages
import SignIn from "./components/pages/signin/Index";
import SignUp from "./components/pages/signup/Index";
import Forgot from "./components/pages/forgot/Index";
import Reset from "./components/pages/reset/Index";

// Account Pages
import Dashboard from "./components/pages/dashboard/Index";
import Profile from "./components/pages/profile/Index";
import Transactions from "./components/pages/transactions/Index";
import Packages from "./components/pages/packages/Index";

// Error Pages & Popups
import Error from "./components/pages/error/Index";
import PopupVideo from "./components/common/PopupVideo";

function App() {
	const [state, setState] = useState({
		PopupVideo: false,
	});
	const showPopupVideo = () => {
		setState({ ...state, PopupVideo: true });
	};
	const closePopupVideo = () => {
		setState({ ...state, PopupVideo: false });
	};
	const PageLayout = () => (
		<>
			<Header logged={false} />
			<Outlet />
			<Footer />
		</>
	);
	const PageLogLayout = () => (
		<>
			<Header logged={true} />
			<Outlet />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About popup={showPopupVideo} />} />
						{/* <Route exact path="/services" element={<Services />} /> */}
						{/* <Route exact path="/services/service-detail" element={<ServiceDetail />} /> */}
						<Route exact path="/blog" element={<Blog />} />
						<Route exact path="/jobs" element={<Jobs />} />
						<Route exact path="/solutions" element={<Solutions />} />
						<Route exact path="/blog/blog-detail" element={<BlogDetail />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/faq" element={<Faq />} />
						<Route exact path="/pricing" element={<Pricing />} />
						<Route exact path="/privacy-policy" element={<Privacy />} />
						<Route exact path="/disclaimer" element={<Disclaim />} />
						<Route exact path="/terms-conditions" element={<Terms />} />

						<Route exact path="/signin" element={<SignIn />} />
						<Route exact path="/signup" element={<SignUp />} />
						<Route exact path="/forgot-password" element={<Forgot />} />
						<Route exact path="/reset-password" element={<Reset />} />
					</Route>
					<Route element={<PageLogLayout />}>
						<Route exact path="/dashboard" element={<Dashboard />} />
						<Route exact path="/profile-settings" element={<Profile />} />
						<Route exact path="/transactions" element={<Transactions />} />
						<Route exact path="/mine-packages" element={<Packages />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
				{state.PopupVideo === true ? <PopupVideo close={closePopupVideo} /> : ""}
			</BrowserRouter>
		</>
	);
}

export default App;
