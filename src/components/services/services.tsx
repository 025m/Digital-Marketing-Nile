import "./services.css";
import Service from "../service/service.tsx";
import services from "../services/services.ts";

export default function Services() {
	return (
		<section id="services" className="services">
			<div className="services-container">
				<div className="pre-heading">
					<p>services</p>
				</div>
				<h2>services designed to grow your business</h2>
				{services.map((service: any, index) => (
					<Service {...service} right={index % 2 === 1} />
				))}
			</div>
		</section>
	);
}
