import { createFileRoute } from "@tanstack/react-router";
import { Download, MapPin } from "lucide-react";
import headshotAsset from "../assets/bhoomi-headshot.webp.asset.json";
import { SocialRow } from "@/components/site/SiteChrome";
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  WhyWorkSection,
} from "@/components/site/PortfolioSections";
import { CONTACT, STATS } from "@/lib/portfolio-data";

const TITLE = "Bhoomi Rastogi — Brand & Digital Marketing Portfolio";
const DESC =
  "Brand & digital marketer in New Delhi — 100+ paid campaigns, 5 to 7 D2C accounts a month, and 50K+ Instagram views driven on a new vertical.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section id="home" className="grid scroll-mt-16 md:grid-cols-2">
        <div className="flex items-center justify-center bg-background px-6 py-14 md:py-20">
          <img
            src={headshotAsset.url}
            alt="Bhoomi Rastogi — professional headshot"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            className="fade-up aspect-square w-full max-w-md rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
          />
        </div>
        <div className="flex flex-col justify-center bg-primary px-6 py-16 text-cream md:px-14">
          <h1 className="fade-up mt-5 font-headline text-6xl uppercase leading-[0.9] lg:text-8xl">
            Brand &amp;
            <br />
            Digital
            <br />
            <span className="font-script text-7xl normal-case text-blush lg:text-8xl">Marketing</span>
          </h1>
          <p className="fade-up mt-6 flex items-center gap-2 text-sm text-cream/80">
            <MapPin className="size-4" /> PGDM Marketing Candidate · {CONTACT.location}
          </p>
          <div className="fade-up mt-8 flex flex-wrap items-center gap-5">
            <SocialRow />
            <a
              href={CONTACT.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <Download className="size-4" /> Resume
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-headline text-5xl text-primary md:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em]">{s.label}</p>
              {s.note && <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <WhyWorkSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
