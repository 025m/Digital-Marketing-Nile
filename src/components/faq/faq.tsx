import Accordion from "../accordion/accordion";
import ButtonPrimary from "../button/button";
import "./faq.css";

export default function Faq() {
	return (
		<div id="faq" className="faq">
			<div className="container">
        <div className="pre-heading">
          <p>faq</p>
        </div>
				<h2 className="heading2">frequently asked questions</h2>
        <div className="faq-wrapper">
          <Accordion />
          <ButtonPrimary />
        </div>
			</div>
		</div>
	);
}
