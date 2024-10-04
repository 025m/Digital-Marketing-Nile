import "./testimonials.css";
import testimonials from "./testimonials.ts";
import stars from "../../assets/starts.svg";

export default function Testimonials() {
	return (
		<div className="testimonials">
			<div className="testimonials-container">
				<div className="pre-heading">
					<p>testimonials</p>
				</div>
				<h2 className="heading2">what our clients say about us</h2>
				<div className="testimonials-blocks">
					{testimonials.map((testimonial: any) => (
						<div className="block">
							<div className="rows">
								<img src={stars} alt="starts ranking" />
								<p className="p2">"{testimonial.comment}"</p>
							</div>
							<div className="person">
								<img
									src={testimonial.img}
									alt={testimonial.name}
								/>
								<div className="person-details">
									<h4>{testimonial.name}</h4>
									<p>{testimonial.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
