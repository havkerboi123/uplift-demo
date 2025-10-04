'use client';

export type SessionViewProps = {
  appConfig?: any;
  sessionStarted?: boolean;
  disabled?: boolean;
};

export default function SessionView({ sessionStarted, disabled }: SessionViewProps) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">MedVoice — In Session</h1>
          <span className={`text-sm ${sessionStarted ? 'text-cyan-400' : 'text-slate-400'}`}>
            {sessionStarted ? 'Connected' : 'Disconnected'}
          </span>
        </header>

        {/* Main grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 font-semibold">Conversation</h2>
            <p className="text-sm text-slate-300/90">
              The transcript and AI agent responses will appear here.
            </p>
          </div>

          {/* Right Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 font-semibold">Audio</h2>
            <p className="mb-2 text-sm text-slate-300/90">
              Audio visualization, agent avatar, and controls go here.
            </p>
            <button
              disabled={disabled}
              className="rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              End Session
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">
          <span>HIPAA-aware patterns • Secure • Works on all devices</span>
          <button
            disabled={disabled}
            className="rounded-lg border border-white/15 px-4 py-2 text-slate-100 hover:bg-white/5"
          >
            Save Summary
          </button>
        </footer>
      </div>
    </div>
  );
}
