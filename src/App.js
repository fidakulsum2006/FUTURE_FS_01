import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
useEffect(() => {
const targets = document.querySelectorAll(
".navbar, section, .about-highlight, .metric-card, .skill-card, .project-card, .info-card"
);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion){
targets.forEach((el) => el.classList.add("is-visible"));
return;
}

targets.forEach((el) => el.classList.add("reveal-on-scroll"));

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting){
entry.target.classList.add("is-visible");
} else {
entry.target.classList.remove("is-visible");
}
});
},
{
threshold:0.15,
rootMargin:"0px 0px -8% 0px"
}
);

targets.forEach((el) => observer.observe(el));

return () => observer.disconnect();
}, []);

return(

<div className="app-shell">
<div className="sparkle-field" aria-hidden="true"></div>
<div className="app-content">

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Contact/>

</div>
</div>

);

}

export default App;
