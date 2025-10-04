'use client';
/* eslint-disable @next/next/no-img-element */

type WelcomeProps = {
  startButtonText?: string;
  onStartCall: () => void; // ✅ must match app.tsx
  disabled?: boolean;
};

export default function Welcome({
  startButtonText = 'Talk to Agent',
  onStartCall,
  disabled,
}: WelcomeProps) {
  return (
    <main className="min-h-dvh bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_55%),linear-gradient(to_bottom,#0b1220,#0b1220)] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
              <span className="text-xs font-bold tracking-wide">MV</span>
            </div>
            <span className="font-semibold tracking-tight">MedVoice</span>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-tight font-bold md:text-5xl">
              Understand your <span className="text-cyan-300">medical documents</span>
            </h1>
            <p className="mt-5 text-slate-300/90">
              A voice agent that explains labs, prescriptions, and doctor notes—in plain language.
              Private, simple, and secure.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {/* ✅ Correct click handler + disabled state */}
              <button
                onClick={onStartCall}
                disabled={disabled}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-slate-900 shadow transition hover:shadow-lg focus:ring-4 focus:ring-cyan-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              >
                {startButtonText}
              </button>

              <a
                href="#how-it-works"
                className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                How it works
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              HIPAA-aware patterns • No data sold • Works on mobile/desktop
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid h-full w-full place-items-center rounded-xl text-slate-300">
                Voice waveform / hero image
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Upload or Read', desc: 'Share a PDF/photo or read key lines aloud.' },
            { title: 'Ask Anything', desc: 'Symptoms, meds, risks—get clear, safe answers.' },
            { title: 'Follow-ups', desc: 'Ask follow-ups and save a summary for later.' },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="mb-4 h-9 w-9 rounded-lg bg-white/10" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} MedVoice. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
