import "./benefits.css";
import ss from "../../assets/ss.svg";
import roi from "../../assets/roi.svg"
import waves from "../../assets/waves.svg"

export default function Benefits() {
	return (
		<div id="benefits" className="benefits">
			<div className="benefits-container">
				<div className="pre-heading">
					<p>benefits</p>
				</div>
				<h2>unlock your success</h2>
				<div className="benefit-cards">
					<div className="benefit-card">
						<img src={ss} alt="icon" width="40px" />
						<h4 className="heading4">Elevate Your Brand</h4>
						<p className="p2">
							Amplify your brand with increased visibility,
							enhanced credibility, and a strategic edge for
							lasting success.
						</p>
					</div>
					<div className="benefit-card">
            <img src={roi} alt="icon" width="40px" />
						<h4 className="heading4">Maximize ROI</h4>
						<p className="p2">
              Experience unmatched return on investment—strategic marketing for sustained growth and profitability.
						</p>
					</div>
					<div className="benefit-card">
						<img src={waves} alt="icon" width="40px" />
						<h4 className="heading4">Tailored Solutions for Success</h4>
						<p className="p2">
              Personalized strategies, uniquely crafted for your business, ensuring certainty in every marketing endeavor.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
