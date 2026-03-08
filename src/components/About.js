import "../styles/About.css";

function About(){
return(

<section id="about">

<h2>About Me</h2>

<div className="about-card">

<p className="about-intro">
I am Fida Kulsum, an aspiring software engineer focused on AI and Computer Science.
I enjoy building clean, responsive web apps and turning complex ideas into products
that are practical, fast, and easy to use.
</p>

<p className="about-description">
My core interest is at the intersection of frontend engineering and intelligent systems.
I actively improve my development workflow, strengthen problem-solving through projects,
and stay consistent with modern tools like React, JavaScript, Git, and API-driven apps.
</p>

<div className="about-highlights">
<article className="about-highlight">
<h3>What I Build</h3>
<p>Interactive web applications with smooth UI, reusable components, and solid structure.</p>
</article>

<article className="about-highlight">
<h3>Current Focus</h3>
<p>React development, DSA practice, and applying AI concepts into real-world projects.</p>
</article>

<article className="about-highlight">
<h3>Work Style</h3>
<p>Clear planning, consistent iteration, and writing maintainable code with attention to detail.</p>
</article>
</div>

<div className="about-metrics">
<div className="metric-card">
<span className="metric-value">10+</span>
<span className="metric-label">Projects Built</span>
</div>
<div className="metric-card">
<span className="metric-value">3+</span>
<span className="metric-label">Core Domains</span>
</div>
<div className="metric-card">
<span className="metric-value">100%</span>
<span className="metric-label">Learning Mindset</span>
</div>
</div>

</div>

</section>

);
}

export default About;
