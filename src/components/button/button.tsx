import "./button.css";

export function ButtonSecondary() {
	return <a className="button-secondary">Watch Video</a>;
}

export default function ButtonPrimary() {
	return (
		<a className="button-primary">
			<div className="content">
				<span>Get Started</span> <span>|</span> {"->"}{" "}
			</div>
		</a>
	);
}
