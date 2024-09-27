import "./hero.css";
import Navigation from "../nav/navigation";
import HeroContent from "../hero-content/hero-content";

export default function Hero() {
	return (
		<div className="hero background">
			<div className="container">
				<Navigation />
        <HeroContent />
			</div>
		</div>
	);
}
