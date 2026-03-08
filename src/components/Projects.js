import "../styles/Projects.css";
import jsCalculatorImg from "../images/JS_CALCI.png";
import snakeGameImg from "../images/SNAKE_GAME.png";
import quickJobImg from "../images/QUICK_JOB.png";

function Projects(){

const projects=[
{
title:"JavaScript Calculator",
desc:"A clean calculator app with real-time expression handling and keyboard-friendly controls.",
feature:"Supports clear, delete, decimals, and operator chaining for smooth usage.",
stack:["HTML","CSS","JavaScript"],
type:"Frontend App",
image:jsCalculatorImg
},
{
title:"Snake Game",
desc:"A modern version of the classic snake game with responsive movement and live scoring.",
feature:"Includes collision detection, score tracking, and progressive difficulty.",
stack:["JavaScript","Game Logic","DOM"],
type:"Game Project",
image:snakeGameImg
},
{
title:"Job Finder",
desc:"A job search helper that organizes openings and keeps track of opportunities in one view.",
feature:"Lets users manage status and quickly filter relevant roles.",
stack:["HTML","CSS","UI/UX"],
type:"Productivity Tool",
image:quickJobImg
}
];

return(

<section id="projects">

<h2>Projects</h2>

<div className="projects-grid">

{projects.map((project,index)=>(
<div className="project-card" key={index}>

<span className="project-type">{project.type}</span>

<img className="project-image" src={project.image} alt={project.title} />

<h3>{project.title}</h3>

<p>{project.desc}</p>

<p className="project-feature">{project.feature}</p>

<div className="project-stack">
{project.stack.map((tech)=>(
<span className="stack-badge" key={tech}>{tech}</span>
))}
</div>

</div>
))}

</div>

</section>

);
}

export default Projects;
