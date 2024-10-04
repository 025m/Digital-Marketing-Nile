import { useState } from "react";
import "./accordion.css";

export default function Accordion() {
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);

	const toggleAccordion = (index: number) => {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter((i) => i !== index)); // Remove from open
		} else {
			setOpenIndexes([...openIndexes, index]);
		}
	};

	const items = [
		{
			front: "What is your pricing?",
			back: "We don't have a set-in-stone pricing because every client has different needs. This is why we offer a free consultation call where we will get to know you and your business. Only then would we be able to give you a pricing offer.",
		},
		{
			front: "How are you different than other agencies?",
			back: "We pride ourselves in the fact that we've built up a team of experts in every domain of email marketing. We don't outsource work to VAs, and we make sure what we deliver is pure quality.",
		},
		{
			front: "Do you offer a guarantee?",
			back: "Yes, we do! If we do not increase your email revenue in 60 days by 30%, we will work for free until we hit that number.",
		},
	];
	return (
		<div className="accordion">
			{items.map((item, index) => (
				<>
					{openIndexes.includes(index) ? (
						<div className="opened">
							<div
								className="question"
								key={index}
								onClick={() => toggleAccordion(index)}
							>
								<p>{item.front}</p>
								<div
									className={`plus-container ${
										openIndexes.includes(index) && "rotated"
									}`}
								>
									<div className="plus-horizontal" />
									<div className="plus-vertical" />
								</div>
							</div>
							<div className="answer">
								<p>{item.back}</p>
							</div>
						</div>
					) : (
						<div className="closed">
							<div
								className="question"
								key={index}
								onClick={() => toggleAccordion(index)}
							>
								<p>{item.front}</p>
								<div
									className={`plus-container ${
										openIndexes.includes(index) && "rotated"
									}`}
								>
									<div className="plus-horizontal" />
									<div className="plus-vertical" />
								</div>
							</div>
						</div>
					)}
				</>
			))}
		</div>
	);
}
