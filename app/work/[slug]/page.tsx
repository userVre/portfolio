import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "../../projects";
import "./project.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  return { title: project ? `${project.name} — Ismail Abelouas` : "Project — Ismail Abelouas" };
}

export default async function ProjectPage({ params }: Props) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();

  return <main className="project-page">
    <header className="project-nav"><Link href="/" className="project-logo">IA<span>.</span></Link><Link href="/#work" className="back-link">← Back to work</Link></header>
    <section className={`project-hero ${project.color}`}>
      <p className="project-eyebrow">Selected work / {project.kind}</p>
      <h1>{project.name}</h1>
      <p>{project.overview}</p>
      {project.image ? <img src={project.image} alt="Housora interior design concept" className="project-image" /> : <div className="project-placeholder"><span>{project.name}</span></div>}
    </section>
    <section className="project-details">
      <p className="project-eyebrow">The experience</p>
      <div className="details-grid"><h2>Built for a clear<br /><i>next step.</i></h2><div><p className="detail-copy">Explore the key parts of the experience, then visit the complete live website.</p><ul>{project.highlights.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>{project.url && <a className="live-button" href={project.url} target="_blank" rel="noreferrer">Explore the live project <span>↗</span></a>}</div></div>
    </section>
  </main>;
}
