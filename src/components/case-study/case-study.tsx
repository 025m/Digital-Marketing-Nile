import ButtonPrimary from "../button/button";
import "./case-study.css";

type CaseStudyProps = {
	image: image;
	title: string;
	aside: aside;
	right?: boolean;
};

export default function CaseStudy({
	image,
	title,
	aside,
	right = false,
}: CaseStudyProps) {
	return (
		<div className="case-study">
			<div className={`case-study-container ${right && "right"}`}>
				<div className={`image-wrapper ${right && "right"}`}>
					<img src={image.src} alt={image.alt} />
				</div>
				<div className="case-study-content">
					<div className="case-study-content-text">
						<div className="heading">
							<div className="pre-heading">
								<p>case study</p>
							</div>
							<h2 className="heading2">{title}</h2>
						</div>
						<div className="body">
							{aside.map((a: any) => (
								<div className="aside">
									<h4 className="heading4">{a.subtitle}</h4>
									<p className="p2">{a.description}</p>
								</div>
							))}
						</div>
					</div>
					<ButtonPrimary />
				</div>
			</div>
		</div>
	);
}
