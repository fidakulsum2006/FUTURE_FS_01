import { useMemo, useState } from "react";
import "../styles/Contact.css";

function Contact(){
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: ""
});
const [formStatus, setFormStatus] = useState({ type: "", text: "" });

const messageLeft = useMemo(() => 400 - formData.message.length, [formData.message.length]);

function handleChange(event){
const { name, value } = event.target;
setFormData((prev) => ({ ...prev, [name]: value }));
if (formStatus.text){
setFormStatus({ type: "", text: "" });
}
}

function handleSubmit(event){
event.preventDefault();

if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()){
setFormStatus({ type: "error", text: "Please fill name, email, and message before sending." });
return;
}

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!validEmail.test(formData.email)){
setFormStatus({ type: "error", text: "Please enter a valid email address." });
return;
}

setFormStatus({ type: "success", text: "Message queued successfully. I will get back to you soon." });
setFormData({ name: "", email: "", subject: "", message: "" });
}

return(

<section id="contact">

<h2>Contact Me</h2>

<p className="contact-intro">
Open to internships, freelance work, and collaboration on web and AI-driven projects.
Share your idea or role details and I will respond with the next steps.
</p>

<div className="contact-layout">
<aside className="contact-panel">
<h3>Let&apos;s Build Something Great</h3>
<p>
I focus on frontend engineering, product-focused design, and practical project execution.
If your project needs clean code and a fast turnaround, let&apos;s connect.
</p>

<div className="contact-info-grid">
<article className="info-card">
<h4>Email</h4>
<a href="mailto:FidaKulsum.dev@mail.com">FidaKulsum.dev@mail.com</a>
</article>
<article className="info-card">
<h4>Response Time</h4>
<p>Within 24 hours</p>
</article>
<article className="info-card">
<h4>Availability</h4>
<p>Open for opportunities</p>
</article>
<article className="info-card">
<h4>Location</h4>
<p>India (Remote Friendly)</p>
</article>
</div>

<div className="contact-links">
<a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
<a href="#projects">View Projects</a>
</div>
</aside>

<form className="contact-form" onSubmit={handleSubmit}>
<label>
Your Name
<input
name="name"
type="text"
placeholder="Enter your full name"
value={formData.name}
onChange={handleChange}
/>
</label>

<label>
Your Email
<input
name="email"
type="email"
placeholder="Enter your email"
value={formData.email}
onChange={handleChange}
/>
</label>

<label>
Subject
<input
name="subject"
type="text"
placeholder="Example: Internship Opportunity"
value={formData.subject}
onChange={handleChange}
/>
</label>

<label>
Message
<textarea
name="message"
placeholder="Tell me about your project, goals, or opportunity..."
maxLength={400}
value={formData.message}
onChange={handleChange}
></textarea>
</label>

<div className="form-meta">
<span>{messageLeft} characters left</span>
{formStatus.text && (
<p className={`form-status ${formStatus.type}`}>{formStatus.text}</p>
)}
</div>

<button type="submit">Send Message</button>

</form>
</div>

</section>

);
}

export default Contact;
