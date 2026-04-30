import { ArrowRight, CheckCircle2, ClipboardList, PhoneCall, ShieldCheck, TrendingUp } from "lucide-react";
import { copy } from "@/data/copy";
import { LeadForm } from "@/components/LeadForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="text-sm font-bold tracking-tight">
            {copy.company}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#problem" className="hover:text-slate-950">Ongelma</a>
            <a href="#solution" className="hover:text-slate-950">Ratkaisu</a>
            <a href="#proof" className="hover:text-slate-950">Referenssit</a>
            <a href="#contact" className="rounded-full bg-slate-950 px-4 py-2 text-white hover:bg-slate-800">Kartoitus</a>
          </nav>
        </div>
      </header>

      <section id="top" className="bg-slate-950 px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {copy.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-slate-950 hover:bg-slate-200">
                {copy.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#solution" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-4 font-semibold text-white hover:border-slate-400">
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
              <ShieldCheck className="h-6 w-6 text-white" />
              <div>
                <p className="font-semibold">Malli rakennettu tuloksiin</p>
                <p className="text-sm text-slate-400">Ei klikkiraportointia ilman myyntiputkea.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {copy.trust.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-800/70 p-4 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ongelma</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Asiakashankinta on satunnaista.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              LVI-yrityksen osaaminen voi olla kunnossa, mutta jos tarjouspyyntövirta perustuu sattumaan, kasvua ei voi johtaa kunnolla.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.problems.map((problem) => (
              <div key={problem} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-medium leading-7 text-slate-800">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="px-6 py-20 bg-slate-100">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ratkaisu</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Systemaattinen asiakashankintajärjestelmä.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Rakennetaan selkeä prosessi, jolla oikeat ostajat tunnistetaan, kontaktoidaan ja ohjataan tarjouspyyntöön.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {copy.solutionSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
                  {index === 0 && <ClipboardList className="h-5 w-5" />}
                  {index === 1 && <TrendingUp className="h-5 w-5" />}
                  {index === 2 && <PhoneCall className="h-5 w-5" />}
                  {index === 3 && <CheckCircle2 className="h-5 w-5" />}
                </div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Referenssit</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Käytännön asiakashankintaa.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Malli perustuu B2B-myynnin, myyntiprosessien ja pienyritysten kasvun käytännön rakentamiseen.
              </p>
            </div>
            <div className="grid gap-5">
              {copy.references.map((reference) => (
                <article key={reference.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{reference.label}</p>
                  <p className="mt-3 leading-7 text-slate-700">{reference.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Yhteydenotto</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Haluatko tietää, mistä saisitte lisää tarjouspyyntöjä?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Täytä lomake. Saat 3–5 konkreettista havaintoa LVI-yrityksesi asiakashankinnasta ja tarjouspyyntöpolusta.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {copy.company}</p>
          <p>Enemmän tarjouspyyntöjä, vähemmän säätöä.</p>
        </div>
      </footer>
    </main>
  );
}
