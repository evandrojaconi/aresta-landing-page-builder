import { ArestaMark } from "./Mark";

export function Wordmark({ suffix }: { suffix?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <ArestaMark className="h-6 w-7 text-primary" />
      <span className="font-display text-lg font-extrabold uppercase tracking-[0.14em]">
        Aresta
      </span>
      {suffix ? (
        <span className="meta rounded-sm border border-current/25 px-1.5 py-0.5 opacity-70">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
