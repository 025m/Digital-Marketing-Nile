import "./App.css";
import Hero from "./components/hero/hero.tsx";
import Services from "./components/services/services.tsx";
import Benefits from "./components/benefits/benefits.tsx";
import CaseStudy from "./components/case-study/case-study.tsx";
import caseStudies from "./components/case-study/case-studies.ts";
import Testimonials from "./components/testimonials/testimonials.tsx";

function App() {
	return (
		<>
			<Hero />
			<Services />
      <Benefits />
      {caseStudies.map((caseStudy:any, index) => (
        <CaseStudy {...caseStudy} right={index % 2 === 1}/>
      ))}
      <Testimonials />
		</>
	);
}

export default App;
