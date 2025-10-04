"use client";

export type SessionViewProps = {
  appConfig?: any;
  sessionStarted?: boolean;
  disabled?: boolean;
};

export default function SessionView({ sessionStarted, disabled }: SessionViewProps) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold tracking-tight">MedVoice — In Session</h1>
          <span
            className={`text-sm ${
              sessionStarted ? "text-cyan-400" : "text-slate-400"
            }`}
          >
            {sessionStarted ? "Connected" : "Disconnected"}
          </span>
        </header>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold mb-3">Conversation</h2>
            <p className="text-sm text-slate-300/90">
              The transcript and AI agent responses will appear here.
            </p>
          </div>

          {/* Right Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold mb-3">Audio</h2>
            <p className="text-sm text-slate-300/90 mb-2">
              Audio visualization, agent avatar, and controls go here.
            </p>
            <button
              disabled={disabled}
              className="rounded-lg px-4 py-2 bg-white text-slate-900 font-medium shadow hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              End Session
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400 flex justify-between items-center">
          <span>HIPAA-aware patterns • Secure • Works on all devices</span>
          <button
            disabled={disabled}
            className="rounded-lg px-4 py-2 border border-white/15 text-slate-100 hover:bg-white/5"
          >
            Save Summary
          </button>
        </footer>
      </div>
    </div>
  );
}
