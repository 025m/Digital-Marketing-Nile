import "./hero-content.css";
import ButtonPrimary, { ButtonSecondary } from "../button/button";
import Logo1 from "../../assets/logo1.svg";
import Logo2 from "../../assets/logo2.svg";
import Logo3 from "../../assets/logo3.svg";
import Logo4 from "../../assets/logo4.svg";
import Logo5 from "../../assets/logo5.svg";

export default function HeroContent() {
	const Logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
	const clientLogos = Logos.map((logo, index) => (
		<img key={index} src={logo} alt={`Client Logo no.${index + 1}`} />
	));
	return (
		<div className="hero-content-container">
			<div className="hero-content">
				<div className="hero-main">
					<div className="hero-text">
						<div className="pre-heading">
							<p>for agency owners</p>
						</div>
						<h1>build a powerful agency site with framer</h1>
						<p>
							We are committed to pushing the boundaries of what's
							possible.
						</p>
					</div>
					<div className="hero-buttons">
						<ButtonPrimary />
						<ButtonSecondary />
					</div>
				</div>
				<div className="hero-aside">
					<p>200+ happy clients</p>
				</div>
			</div>
			<div className="hero-client-logos">{clientLogos}</div>
		</div>
	);
}
