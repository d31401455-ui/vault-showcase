import { useEffect, useState } from "react";

const GOAL = 10000;
const CURRENT = 7842;

export function VaultProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setValue(CURRENT), 250);
    return () => clearTimeout(t);
  }, []);

  const pct = Math.round((value / GOAL) * 100);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-4">
        <span className="eyebrow">Community progress</span>
        <span className="font-mono text-xs text-muted-foreground">{pct}%</span>
      </div>

      <div className="relative mt-3 h-7 overflow-hidden border border-border bg-secondary">
        <div
          className="relative h-full bg-gradient-to-r from-crimson via-gold-dim to-gold transition-[width] duration-[2200ms] ease-out"
          style={{ width: `${(value / GOAL) * 100}%` }}
        >
          <div className="absolute inset-y-0 w-1/4 animate-sheen bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-background/40 last:border-0" />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-3xl leading-none tracking-wide">
          <span className="gold-text">{CURRENT.toLocaleString("en-US")}</span>
          <span className="text-muted-foreground"> / {GOAL.toLocaleString("en-US")}</span>
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {(GOAL - CURRENT).toLocaleString("en-US")} until the Vault opens
        </p>
      </div>
    </div>
  );
}
