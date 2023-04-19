import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css"
import goDutchLogo from "../assets/icons/goDutchLogo.png"
import { Outlet } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
        <>
		<header>
			<img src={goDutchLogo} className="logo-h" />
			<nav ref={navRef}>
				<a href="/bills">Bills</a>
				<a href="/invitations">Invitations</a>
				<a href="/newBill">New Bill</a>
	
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        <Outlet/>
        </>
	);
}

export default Navbar;