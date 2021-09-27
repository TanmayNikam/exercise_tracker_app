import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./navbar.css";
const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					{/* <img src={logo} className='logo' alt='logo' /> */}
					<div className='navbar-brand'>ExcerTracker </div>
					<button className='nav-toggle' onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div className='links-container' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className='social-icons'>
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// const navbar = () => {
// 	return (
// 		<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
// 			<Link to='/' className='navbar-brand'>
// 				ExcerTracker
// 			</Link>
// 			<div className='collpase navbar-collapse'>
// 				<ul className='navbar-nav mr-auto'>
// 					<li className='navbar-item'>
// 						<Link to='/' className='nav-link'>
// 							Food
// 						</Link>
// 					</li>
// 					<li className='navbar-item'>
// 						<Link to='/create' className='nav-link'>
// 							Food Calorie Log
// 						</Link>
// 					</li>
// 					<li className='navbar-item'>
// 						<Link to='/user' className='nav-link'>
// 							Create User
// 						</Link>
// 					</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default navbar;
