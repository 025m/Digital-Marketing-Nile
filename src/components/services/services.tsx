import "./services.css";
import Service from "../service/service";

export default function Services() {
	return (
		<section id="services" className="services">
			<div className="services-container">
				<div className="pre-heading">
					<p>services</p>
				</div>
				<h2 className="heading2">
					services designed to grow your business
				</h2>
				{/* TODO: map service */}
				<Service
					image={{
						src: "src/assets/bluebeanieonlaptop.avif",
						alt: "Blue beanie on a laptop",
					}}
					title="paid traffic"
					servicesAside={[
						{
							subtitle: "Targeted Campaigns",
							description:
								"Craft precise paid traffic campaigns for optimal results—reach, convert, and maximize your marketing budget strategically.",
						},
						{
							subtitle: "ROI-Driven Ads",
							description:
								"Boost your brand with results-focused paid traffic campaigns. Ensure your message resonates, reaching the right audience and driving conversions effectively.",
						},
					]}
				/>
				<Service
					right
					image={{
						src: "src/assets/surfacetouchlaptop.avif",
						alt: "Drawing on a laptop",
					}}
					title="graphic design & branding"
					servicesAside={[
						{
							subtitle: "Visual Excellence",
							description:
								"Experience visual brilliance with our graphic design. From eye-catching visuals to cohesive branding, leave a memorable mark on your audience.",
						},
						{
							subtitle: "Brand Impact",
							description:
								"Elevate your brand with our graphic design. Our experts create visuals that reinforce your brand's identity, ensuring a lasting and brilliant impression.",
						},
					]}
				/>
				<Service
					image={{
						src: "src/assets/drawingonlaptop.avif",
						alt: "Blue beanie drawing on a laptop",
					}}
					title="content marketing strategy"
					servicesAside={[
						{
							subtitle: "Strategic Storytelling",
							description:
								"Navigate the digital landscape with purposeful content strategies. Our storytelling engages and converts, forging meaningful connections with your audience.",
						},
						{
							subtitle: "Impactful Content",
							description:
								"Drive impact with our content marketing strategy. Crafted narratives resonate, creating a lasting impression and fostering authentic connections.",
						},
					]}
				/>
			</div>
		</section>
	);
}
