"use client";
/* eslint-disable @next/next/no-img-element */

type WelcomeProps = {
  startButtonText?: string;
  onStartCall: () => void; // ✅ must match app.tsx
  disabled?: boolean;
};

export default function Welcome({
  startButtonText = "Talk to Agent",
  onStartCall,
  disabled,
}: WelcomeProps) {
  return (
    <main className="min-h-dvh text-slate-100 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_55%),linear-gradient(to_bottom,#0b1220,#0b1220)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
              <span className="text-xs font-bold tracking-wide">MV</span>
            </div>
            <span className="font-semibold tracking-tight">MedVoice</span>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-white text-slate-900 shadow hover:shadow-lg transition focus:ring-4 focus:ring-cyan-500 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {startButtonText}
              </button>

              <a
                href="#how-it-works"
                className="text-slate-300 hover:text-white underline-offset-4 hover:underline"
              >
                How it works
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              HIPAA-aware patterns • No data sold • Works on mobile/desktop
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="h-full w-full rounded-xl grid place-items-center text-slate-300">
                Voice waveform / hero image
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { title: "Upload or Read", desc: "Share a PDF/photo or read key lines aloud." },
            { title: "Ask Anything", desc: "Symptoms, meds, risks—get clear, safe answers." },
            { title: "Follow-ups", desc: "Ask follow-ups and save a summary for later." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-9 w-9 rounded-lg bg-white/10 mb-4" />
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
