import ButtonPrimary from "../button/button";
import "./service.css";

type ServiceProps = {
	image: image;
	title: string;
	servicesAside: servicesAside;
	right?: boolean;
};

export default function Service({
	image,
	title,
	servicesAside,
	right = false,
}: ServiceProps) {
	return (
		<div className={`service ${right && "right" }`}>
			<div className="content-image">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="content-text">
				<div className="text-rows">
					<h3 className="heading3">{title}</h3>
					{servicesAside.map((sa: any) => {
						return (
							<div className="text-description">
								<h4 className="heading4">{sa.subtitle}</h4>
								<p className="p2">{sa.description}</p>
							</div>
						);
					})}
				</div>
				<ButtonPrimary />
			</div>
		</div>
	);
}
