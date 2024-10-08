import "./navigation.css";
import logo from "../../assets/logo.svg";
import Button from "../button/button";
import { useState } from "react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className={`navigation ${isOpen ? "open" : ""}`}>
				<div className="top">
					<a href="#" className="logo">
						<img src={logo} alt="Logo" />
					</a>
					<div className="hamburger" onClick={toggleMenu}>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				</div>
				<div className="links">
					<a href="#services">Services</a>
					<a href="#case-studies">Case Studies</a>
					<a href="#testimonials">Testimonials</a>
					<a href="#faq">FAQ</a>
				</div>
				<Button />
			</div>
			<hr />
		</>
	);
}
