import { Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { CONTACT } from "@/lib/portfolio-data";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "why-work-with-me", label: "Why Work With Me" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const offset = window.scrollY + 96;
      let current = "home";
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) current = "contact";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-background"}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-headline text-lg uppercase tracking-tight">
          Bhoomi Rastogi
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`border-b-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                active === n.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>
        <button
          className="text-xs font-semibold uppercase tracking-widest lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm font-semibold uppercase tracking-widest ${active === n.id ? "text-primary" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-headline text-xl uppercase">
          Bhoomi Rastogi
        </p>
        <SocialRow tone="dark" />
        <p className="text-xs text-ink-foreground/60">© 2026 Bhoomi Rastogi · New Delhi</p>
      </div>
    </footer>
  );
}

export function SocialRow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const cls =
    tone === "dark"
      ? "border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
      : "border-current/30 hover:bg-cream hover:text-primary";
  const items = [
    { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn", ext: true },
    { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
    { href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
  ];
  return (
    <div className="flex gap-3">
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          aria-label={i.label}
          target={i.ext ? "_blank" : undefined}
          rel={i.ext ? "noopener noreferrer" : undefined}
          className={`grid size-10 place-items-center rounded-full border transition-colors ${cls}`}
        >
          <i.icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export function SectionTitle({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-headline text-4xl uppercase leading-none md:text-5xl">{children}</h2>
    </div>
  );
}
