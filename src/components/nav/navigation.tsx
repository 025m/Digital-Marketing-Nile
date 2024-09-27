import "./navigation.css"
import logo from "../../assets/logo.svg";
import Button from "../button/button";

export default function Navigation() {
	return (
    <>
		<div className="navigation">
			<a href="#">
				<img src={logo} alt="Logo" />
			</a>
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
