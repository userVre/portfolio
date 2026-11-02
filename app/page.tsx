"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "./projects";

const whatsApp = "https://wa.me/212650252897?text=Hi%20Ismail%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Character() {
  return <div className="character" aria-label="Animated developer character" role="img">
    <span className="character-shadow" />
    <svg viewBox="0 0 430 500" aria-hidden="true">
      <defs><radialGradient id="skin" cx="35%" cy="25%"><stop stopColor="#ffffff"/><stop offset=".62" stopColor="#e4e6eb"/><stop offset="1" stopColor="#9da3af"/></radialGradient><linearGradient id="shirt" x1="0" x2="1"><stop stopColor="#d9dce4"/><stop offset=".5" stopColor="#ffffff"/><stop offset="1" stopColor="#b6bbc7"/></linearGradient><linearGradient id="hair" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#252a38"/><stop offset=".52" stopColor="#030407"/><stop offset="1" stopColor="#4a355f"/></linearGradient></defs>
      <g className="body"><path d="M54 500c12-113 74-169 161-169s151 56 162 169H54Z" fill="url(#shirt)"/><path d="M84 487c19-69 61-111 131-111s112 42 132 111" fill="none" stroke="#858c9d" strokeWidth="3" opacity=".25"/></g>
      <g className="face-turn"><path d="M176 301h78v80c-7 23-59 23-78 0v-80Z" fill="url(#skin)" stroke="#8b909c" strokeWidth="2"/><path d="M111 183c-22 7-33 25-28 48 4 22 20 32 37 29l-9-77Z" fill="url(#skin)"/><path d="M319 183c22 7 33 25 28 48-4 22-20 32-37 29l9-77Z" fill="url(#skin)"/><path d="M108 172c0-86 45-136 107-136 69 0 109 51 107 139l-8 88c-6 53-41 84-99 84s-92-31-99-84l-8-91Z" fill="url(#skin)" stroke="#8b909c" strokeWidth="2"/>
      <path d="M109 189c-6-94 40-153 106-153 71 0 109 55 107 145-27-17-44-38-54-60-36 26-84 47-159 68Z" fill="url(#hair)"/><path d="M115 156c20-62 72-97 132-72 40 17 67 54 73 97-28-17-41-39-52-60-36 26-87 48-153 69Z" fill="#0b0c11" opacity=".72"/>
      <path d="M145 209c15-9 33-9 46 0" fill="none" stroke="#13151d" strokeWidth="9" strokeLinecap="round"/><path d="M240 209c15-9 33-9 46 0" fill="none" stroke="#13151d" strokeWidth="9" strokeLinecap="round"/><g className="gaze gaze-left"><ellipse cx="168" cy="232" rx="20" ry="17" fill="#f9fbff"/><circle cx="168" cy="232" r="11" fill="#3f2a70"/><circle cx="171" cy="228" r="3" fill="#fff"/></g><g className="gaze gaze-right"><ellipse cx="263" cy="232" rx="20" ry="17" fill="#f9fbff"/><circle cx="263" cy="232" r="11" fill="#3f2a70"/><circle cx="266" cy="228" r="3" fill="#fff"/></g><path d="M202 252c-5 16-8 28-5 34 6 5 15 5 21 0" fill="none" stroke="#727989" strokeWidth="3" strokeLinecap="round"/><path d="M182 303c18 12 46 12 66 0" fill="none" stroke="#3d4250" strokeWidth="4" strokeLinecap="round"/>
      <path d="M319 204c27 10 31 34 24 61" fill="none" stroke="#7259d6" strokeWidth="12" strokeLinecap="round"/><rect x="322" y="251" width="28" height="45" rx="11" fill="#7259d6"/><path d="M326 294c-4 18-20 29-43 29" fill="none" stroke="#7259d6" strokeWidth="6" strokeLinecap="round"/></g>
    </svg>
  </div>;
}

function ThemeButton() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("ismail-theme"); const isDark = saved === "dark"; setDark(isDark); document.documentElement.dataset.theme = isDark ? "dark" : "light"; }, []);
  function toggle() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("ismail-theme", next ? "dark" : "light"); }
  return <button className="theme-button" onClick={toggle} aria-label={dark ? "Use light mode" : "Use dark mode"}>{dark ? "☀" : "◐"}</button>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const hero = heroRef.current;
    const move = (event: MouseEvent) => {
      if (!hero) return;
      const box = hero.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - .5);
      const y = ((event.clientY - box.top) / box.height - .5);
      hero.style.setProperty("--gaze-x", `${x * 10}px`);
      hero.style.setProperty("--gaze-y", `${y * 7}px`);
      // The face follows gently; keeping this small preserves a natural-looking pose.
      hero.style.setProperty("--head-x", `${x * 13}px`);
      hero.style.setProperty("--head-y", `${y * 7}px`);
      hero.style.setProperty("--head-turn", `${x * 5}deg`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  useEffect(() => { const items = document.querySelectorAll<HTMLElement>(".reveal"); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 }); items.forEach((item) => observer.observe(item)); return () => observer.disconnect(); }, []);
  return <main>
    <header className="site-header"><a href="#top" className="logo">IA<span>.</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav><ThemeButton /></header>
    <section className="hero" id="top" ref={heroRef}>
      <div className="grid-noise" /><span className="orb orb-one" /><span className="orb orb-two" />
      <div className="hero-copy"><p className="availability"><i /> Available for freelance work</p><p className="kicker">Hello, I’m <strong>Ismail Abelouas</strong></p><h1>I build <em>websites,</em><br />web apps &amp; mobile apps.</h1><p className="intro">A freelance developer creating clear digital experiences from the first idea to the final screen.</p><div className="hero-actions"><a className="button primary" href={whatsApp} target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow /></a><a className="button text-button" href="#work">See my work <Arrow /></a></div></div>
      <div className="character-wrap"><Character /></div>
      <a className="scroll-cue" href="#about">Scroll to explore <span>↓</span></a>
    </section>
    <section className="section about" id="about"><div className="section-label reveal"><span>01</span> About me</div><div className="about-copy reveal"><h2>A developer for the <i>whole</i> product.</h2><p>I create clear, responsive experiences for people and businesses. Whether you need a professional website, a custom web app, or a mobile app for iOS and Android, I can help take it from idea to working product.</p><a href="#contact" className="under-link">Let’s work together <Arrow /></a></div></section>
    <section className="section services"><div className="section-label reveal"><span>02</span> What I build</div><div className="service-list">{[["Websites", "Professional, responsive websites with a clear purpose."], ["Web apps", "Custom web applications and useful online systems."], ["Mobile apps", "Android and iOS experiences designed for real users."], ["Product features", "Ecommerce, booking, login, payments, and more."]].map(([title, description], index) => <article className="service reveal" key={title} style={{ transitionDelay: `${index * 70}ms` }}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Arrow /></article>)}</div></section>
    <section className="section work" id="work"><div className="work-head reveal"><div className="section-label"><span>03</span> Selected work</div><h2>Made to be<br /><i>used.</i></h2></div><div className="projects">{projects.map((project, index) => <article className={`project-card ${project.color} reveal`} key={project.name} style={{ transitionDelay: `${(index % 2) * 80}ms` }}><Link className="project-card-link" href={`/work/${project.slug}`} aria-label={`View ${project.name} project`}><div className="project-art" style={project.image ? { backgroundImage: `linear-gradient(0deg, rgba(8,16,28,.42), rgba(8,16,28,.04)), url(${project.image})` } : undefined}>{project.url && <span className="project-preview" aria-hidden="true"><iframe src={project.url} title="" tabIndex={-1} loading="lazy" /></span>}<span className="art-type">{project.kind}</span><strong>{project.name}</strong><span className="preview-hint">Live preview <Arrow /></span><span className="art-sphere" /></div><div className="project-body"><div><h3>{project.name}</h3><p>{project.text}</p></div><span className="project-link">View project <Arrow /></span></div></Link></article>)}</div></section>
    <section className="section process"><div className="section-label reveal"><span>04</span> How I work</div><div className="process-content reveal"><h2>A clear path<br />from <i>idea</i> to launch.</h2><ol>{[["Understand", "We clarify the product, users, and what matters most."], ["Shape", "I turn the idea into a clear experience and interface."], ["Build", "I develop the product across the screens and features it needs."], ["Launch", "We review the final result and prepare it to go live."]].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    <section className="section why-work" id="why-work"><div className="section-label reveal"><span>05</span> Why work with me</div><div className="why-work-content reveal"><p className="eyebrow">A thoughtful partner, from the first conversation to after launch.</p><h2>More than someone<br />who just <i>builds.</i></h2><div className="promise-grid">{[["Quick, clear replies", "You will not be left waiting. I keep communication direct and easy throughout the project."], ["Support after launch", "If something goes wrong after launch, I will work with you to get it fixed."], ["One partner for the full build", "From websites and web apps to iOS and Android apps, you can bring one idea to one person."], ["Business-minded decisions", "I help you make the right decisions for your business and the people using your product."]].map(([title, text], index) => <article className="promise" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="section faq" id="faq"><div className="section-label reveal"><span>06</span> FAQ</div><div className="faq-content reveal"><h2>Good questions,<br /><i>clear answers.</i></h2><div className="faq-list">{[["How long does a project take?", "The timeline depends on the scope and complexity of your project. Once I understand what you need, I will give you a clear plan and timeline."], ["Do you handle both design and development?", "Yes. I can take care of both the design and the development, so your product stays consistent from the first idea to launch."], ["Can I update the website after it launches?", "Yes. You can update your content, and if something needs to be changed or fixed, I can help you with that too."], ["Do you provide hosting?", "Yes, I can provide and manage hosting so your website has a reliable place to live online."]].map(([question, answer], index) => <details className="faq-item" key={question}><summary><span>0{index + 1}</span><h3>{question}</h3><i aria-hidden="true">+</i></summary><div className="faq-answer"><p>{answer}</p></div></details>)}</div></div></section>
    <section className="contact reveal" id="contact"><p className="section-label"><span>07</span> Contact</p><h2>Let’s build your<br /><i>next idea.</i></h2><p>Tell me what you have in mind. I’ll help you turn it into something people can use.</p><a className="button contact-button" href={whatsApp} target="_blank" rel="noreferrer">Chat with me on WhatsApp <Arrow /></a><div className="contact-links"><a href="mailto:abismail2003@gmail.com">abismail2003@gmail.com</a><a href="https://github.com/userVre" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    <a className="whatsapp-float" href={whatsApp} target="_blank" rel="noreferrer" aria-label="Chat with Ismail on WhatsApp">◔</a>
  </main>;
}
