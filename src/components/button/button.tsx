import "./button.css";

export function ButtonSecondary() {
  return <a className="button-secondary">Watch Video</a>  
}

export default function ButtonPrimary() {
  return <a className="button-primary"><span>Get Started</span> <span>|</span> {"->"} </a>  
}