import { ArrowUpRight, Award, Linkedin, Mail, MapPin, Megaphone, PenLine, Phone, Search, Sparkles, Target } from "lucide-react";
import { useState, type FormEvent } from "react";
import headshotAsset from "../../assets/bhoomi-headshot.webp.asset.json";
import { SectionTitle } from "@/components/site/SiteChrome";
import { ACHIEVEMENTS, CERTIFICATIONS, CONTACT, CONCEPTS, EDUCATION, EXPERIENCE, LEADERSHIP, POV, PROJECTS, SERVICES, SKILL_GROUPS } from "@/lib/portfolio-data";

const ICONS = { megaphone: Megaphone, pen: PenLine, search: Search, target: Target, sparkles: Sparkles };
const card = "flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10";

function PageHeader({ eyebrow, title, script }: { eyebrow: string; title: string; script: string }) {
  return (
    <section className="bg-primary text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="fade-up text-xs font-semibold uppercase tracking-[0.3em] text-blush">{eyebrow}</p>
        <h2 className="fade-up mt-4 font-headline text-5xl uppercase leading-[0.95] md:text-7xl">
          {title} <span className="font-script text-6xl normal-case text-blush md:text-8xl">{script}</span>
        </h2>
      </div>
    </section>
  );
}

const BIO = [
  "Hi, I'm Bhoomi, a PGDM Marketing student at FIIB, New Delhi, and someone who was studying brands long before it came with a degree attached.",
  "I follow Indian startup funding news the way sports fans follow match scores. I read fiction to switch my brain off and somehow still end up analyzing the author's pacing like it's a content calendar. This isn't a personality I perform for interviews; it's just the default setting my brain runs on, and at some point I figured I might as well get paid for it.",
  "And I ran 5 to 7 D2C client accounts a month for 11 months straight without missing a single deadline. Not one. I took a startup's content page from zero to 50,000+ views in just 1 month by figuring out what founders actually wanted to read, not only what the algorithm wanted to feed them.",
  "So here's my pitch: I know a tool can generate the content faster than I can. What it can't do is take accountability for a deadline, read a room, or know why one line works and another doesn't. That judgment, and the follow-through, is what I bring.",
];

export function AboutSection() {
  return (
    <>
      <section className="bg-primary text-cream">
        <p className="mx-auto max-w-4xl px-6 py-20 text-center font-headline text-3xl uppercase leading-tight md:text-5xl">
          Curious researcher, <span className="font-script normal-case text-blush">deliberate</span> marketer.
        </p>
      </section>
      <section id="about" className="scroll-mt-16 mx-auto grid max-w-6xl items-start gap-12 px-6 py-24 md:grid-cols-[2fr_3fr]">
        <img src={headshotAsset.url} alt="Bhoomi Rastogi" width={800} height={800} loading="lazy" className="aspect-square w-full rounded-[2rem] object-cover md:sticky md:top-24" />
        <div>
          <SectionTitle eyebrow="Get to know me">
            Not Just What I Do. <br />
            <span className="font-script normal-case text-primary">A Whole Personality.</span>
          </SectionTitle>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {BIO.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="border-t border-cream/15 bg-primary text-cream">
        <p className="mx-auto max-w-4xl px-6 py-20 text-center font-headline text-3xl uppercase leading-tight md:text-5xl">
          Making brands hit different, <span className="font-script normal-case text-blush">like a</span> main character.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Marketing POV">Brands I've been thinking about</SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POV.map((p) => (
            <article key={p.brand} className="flex flex-col rounded-3xl border-t-4 border-primary bg-card p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.brand}</p>
              <p className="mt-4 flex-1 text-lg leading-snug">{p.insight}</p>
              <a href={CONTACT.linkedinActivity} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read the full post <ArrowUpRight className="size-4" /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Services">What I do</SectionTitle>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return <div key={s.name} className="rounded-3xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:bg-primary hover:text-cream"><Icon className="mx-auto size-8" /><p className="mt-4 text-sm font-semibold">{s.name}</p></div>;
          })}
        </div>
      </section>
    </>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle eyebrow="Toolkit">Skills & tools</SectionTitle>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, index) => (
            <div key={group.label} className={index === SKILL_GROUPS.length - 1 ? "rounded-3xl border border-border bg-card p-6" : "rounded-3xl border-t-4 border-primary bg-card p-6"}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={
                      index === SKILL_GROUPS.length - 1
                        ? "rounded-full bg-tag px-4 py-2 text-sm font-medium text-tag-foreground"
                        : "rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-primary"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Certifications</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm">
                <Award className="size-4 text-primary" /> {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return <><div id="experience" className="scroll-mt-16"><PageHeader eyebrow="Experience" title="The Work That Shaped My Marketing" script="Brain." /></div><section className="mx-auto max-w-4xl space-y-8 px-6 py-24">{EXPERIENCE.map((job) => <article key={job.role + job.company} className="relative overflow-hidden rounded-3xl bg-card p-8 pl-10 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"><span className="absolute inset-y-0 left-0 w-2 bg-primary" /><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-headline text-2xl uppercase">{job.role}</h3><p className="mt-1 font-medium text-primary">{job.company}</p></div><span className="rounded-full bg-tag px-4 py-1.5 text-sm font-semibold text-tag-foreground">{job.period}</span></div><ul className="mt-6 space-y-3">{job.points.map((point) => <li key={point} className="flex gap-3 text-muted-foreground"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" /><span className="leading-relaxed">{point}</span></li>)}</ul></article>)}</section></>;
}

export function ProjectsSection() {
  return <><div id="projects" className="scroll-mt-16"><PageHeader eyebrow="Projects" title="My Brain, in Marketing" script="Mode." /></div><section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-6 md:grid-cols-2">{PROJECTS.map((p) => <article key={p.title} className={card}><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-tag px-3 py-1 text-xs font-semibold text-tag-foreground">{p.category}</span><span className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</span></div><h3 className="mt-5 font-headline text-2xl uppercase">{p.title}</h3><p className="mt-1 text-primary">{p.org}</p><p className="mt-4 leading-relaxed text-muted-foreground">{p.outcome}</p></article>)}</div></section><section className="bg-secondary"><div className="mx-auto max-w-6xl px-6 py-24"><SectionTitle eyebrow="Self-initiated">Creative <span className="font-script normal-case text-primary">concepts</span></SectionTitle><div className="mt-12 grid gap-6 md:grid-cols-2">{CONCEPTS.map((c) => <article key={c.brand} className={card}><div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">Concept Campaign</span><span className="text-xs font-medium italic text-muted-foreground">Self-initiated</span></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{c.brand}</p><h3 className="mt-1 font-headline text-2xl uppercase">{c.title}</h3><p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{c.body}</p><a href="#" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Read Full Post <ArrowUpRight className="size-4" /></a></article>)}</div></div></section></>;
}

export function AchievementsSection() {
  return <><div id="achievements" className="scroll-mt-16"><PageHeader eyebrow="Achievements" title="Proud" script="moments" /></div><section className="mx-auto max-w-4xl px-6 py-24"><ul className="divide-y divide-border rounded-3xl border border-border bg-card">{ACHIEVEMENTS.map((achievement, i) => <li key={achievement} className="flex items-start gap-5 p-6"><span className="font-headline text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span><span className="pt-1 leading-relaxed">{achievement}</span></li>)}</ul></section><section className="bg-secondary"><div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2"><div><SectionTitle eyebrow="Education">Learning</SectionTitle><div className="mt-10 space-y-5">{EDUCATION.map((e) => <article key={e.title} className="rounded-r-2xl border-l-4 border-primary bg-card p-6"><h3 className="font-semibold">{e.title}</h3><p className="mt-1 text-primary">{e.org}</p><p className="mt-2 text-sm text-muted-foreground">{e.meta}</p></article>)}</div></div><div><SectionTitle eyebrow="Leadership">Positions of responsibility</SectionTitle><div className="mt-10 space-y-5">{LEADERSHIP.map((l) => <article key={l.title} className="rounded-r-2xl border-l-4 border-primary bg-card p-6"><h3 className="font-semibold">{l.title}</h3><p className="mt-1 text-sm text-primary">{l.meta}</p><p className="mt-2 text-muted-foreground">{l.body}</p></article>)}</div></div></div></section></>;
}

const input = "w-full rounded-xl border border-cream/25 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/50 outline-none focus:border-blush";
export function ContactSection() {
  const [sent, setSent] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const details = [
    { icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, text: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, text: "LinkedIn profile", href: CONTACT.linkedin },
    { icon: MapPin, text: CONTACT.location },
  ];
  return <section id="contact" className="scroll-mt-16 bg-primary text-cream"><div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-blush">Contact</p><h2 className="mt-4 font-headline text-5xl uppercase leading-[0.95] md:text-7xl">Let's work <span className="font-script normal-case text-blush">together</span></h2><ul className="mt-10 space-y-4">{details.map((detail) => <li key={detail.text} className="flex items-center gap-3"><detail.icon className="size-5 text-blush" />{detail.href ? <a href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:underline">{detail.text}</a> : <span>{detail.text}</span>}</li>)}</ul></div><form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-cream/20 bg-cream/5 p-8"><input name="name" required placeholder="Your name" className={input} /><input name="email" type="email" required placeholder="Your email" className={input} /><textarea name="message" required rows={5} placeholder="Your message" className={input} /><button type="submit" className="w-full rounded-full bg-cream px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90">Send message</button>{sent && <p className="text-center text-sm text-blush">Opening your email app…</p>}</form></div></section>;
}

export function WhyWorkSection() {
  const items = [
    { title: "Numbers That Convince Rooms", body: "Delivered investor-facing market research and reporting that directly informed a real fundraising and expansion decision." },
    { title: "One Brief, Eight People, Zero Confusion", body: "Coordinated an 8-member team across strategy, sales, design, and development to keep execution consistent on every account." },
    { title: "I Understood People Before I Marketed To Them", body: "600+ candidate screenings across two HR internships taught me how people really decide, trust, and disengage — the exact instinct behind every audience I've since built." },
    { title: "I Ask Real People, Not Just Dashboards", body: "Before I write a single line of strategy, I've surveyed actual consumers — not just pulled numbers off a report. 100+ people, real answers, real gaps found." },
  ];
  return <section id="why-work-with-me" className="scroll-mt-16 mx-auto max-w-6xl px-6 py-24"><SectionTitle eyebrow="Why work with me">Proof, not promises</SectionTitle><div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">{items.map((item, index) => <article key={item.title} className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15"><span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-[0.25] bg-primary transition-transform duration-500 group-hover:scale-x-100" /><span className="absolute right-0 top-0 size-10 rounded-tr-3xl border-r-2 border-t-2 border-primary/30" /><p className="font-headline text-3xl text-primary/25 transition-colors group-hover:text-primary">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-headline text-lg uppercase leading-tight text-primary md:text-xl">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p></article>)}</div></section>;
}
