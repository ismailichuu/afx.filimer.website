export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <svg
            className="absolute inset-0 m-auto h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
            <circle cx="12" cy="13" r="3.5" />
          </svg>
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">
          Loading
        </p>
      </div>
    </div>
  );
}
