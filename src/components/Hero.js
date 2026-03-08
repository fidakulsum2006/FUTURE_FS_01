import "../styles/Hero.css";

function Hero(){
return(

<section id="home" className="hero">

<p className="hero-tag">Computer Science Student | Frontend Developer</p>

<h1>Hi, I'm Fida Kulsum</h1>

<h2>Building Fast, Modern, and Intelligent Web Experiences</h2>

<p className="hero-summary">
I design and develop responsive web applications with React and JavaScript,
focused on clean UI, strong performance, and practical user value.
My goal is to combine frontend engineering with AI-driven problem solving.
</p>

<div className="hero-stats">
<article className="hero-stat">
<h3>10+</h3>
<p>Hands-on Projects</p>
</article>
<article className="hero-stat">
<h3>3+</h3>
<p>Core Tech Domains</p>
</article>
<article className="hero-stat">
<h3>100%</h3>
<p>Continuous Learning</p>
</article>
</div>

<div className="hero-actions">
<a className="hero-btn" href="#projects">View Projects</a>
<a className="hero-btn hero-btn-secondary" href="#contact">Contact Me</a>
</div>

</section>

);
}

export default Hero;
