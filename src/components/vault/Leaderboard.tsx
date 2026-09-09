const rows = [
  { name: "ghostwalker.eth", clue: "Fragments · 12", pts: 1284, tag: "SUSPECT" },
  { name: "NoName_0x41", clue: "Keys · 3", pts: 1176, tag: "" },
  { name: "vault_janitor", clue: "Riddles · 21", pts: 1042, tag: "" },
  { name: "mila.sees.you", clue: "Timed hits · 17", pts: 968, tag: "SHIELDED" },
  { name: "3AM_raccoon", clue: "Fragments · 9", pts: 903, tag: "" },
  { name: "TheOtherGhost", clue: "Clues · 14", pts: 871, tag: "WATCHED" },
  { name: "kbd_smasher", clue: "Mini-games · 44", pts: 790, tag: "" },
  { name: "silent_lena", clue: "Silence · —", pts: 764, tag: "" },
  { name: "d0nut_thief", clue: "Invites · 28", pts: 702, tag: "" },
  { name: "??????????", clue: "Unknown", pts: 0, tag: "GHOST" },
];

export function Leaderboard() {
  return (
    <div className="vault-panel noise-veil">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="text-2xl">Who is closest to it</h3>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
          demo data
        </span>
      </div>
      <ol className="divide-y divide-border">
        {rows.map((r, i) => (
          <li
            key={r.name}
            className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-surface-2"
          >
            <span className="w-8 font-display text-xl text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-sm">{r.name}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {r.clue}
              </p>
            </div>
            {r.tag && (
              <span className="hidden border border-gold-dim/40 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-dim sm:inline">
                {r.tag}
              </span>
            )}
            <span className="w-16 text-right font-display text-xl text-gold">
              {r.pts === 0 ? "—" : r.pts.toLocaleString("en-US")}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
        Individual points feed the Vault. The Vault never belongs to one name.
      </p>
    </div>
  );
}
