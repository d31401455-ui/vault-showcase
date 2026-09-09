import { createFileRoute } from "@tanstack/react-router";
import { VaultProgress } from "@/components/vault/ProgressBar";
import { Leaderboard } from "@/components/vault/Leaderboard";
import ghostVault from "@/assets/ghost-vault.png.asset.json";
import heist from "@/assets/heist.png.asset.json";
import fury from "@/assets/fury.png.asset.json";
import tuxedo from "@/assets/tuxedo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Vault × The Ghost — Nobody Knows What's Inside" },
      {
        name: "description",
        content:
          "A lock the whole server shares. Community progress, unscheduled Ghost drops, clues in the walls. You don't find the Vault — the Vault finds you.",
      },
      { property: "og:title", content: "The Vault × The Ghost" },
      {
        property: "og:description",
        content:
          "7,842 / 10,000. Something is waiting inside. The Ghost appears without a schedule.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VaultPage,
});

const barMovers = [
  { n: "01", t: "Discord activity", d: "Presence, conversation, reactions — living in the server counts." },
  { n: "02", t: "Mini-games", d: "Short in-server games that feed the Vault, not a separate lobby." },
  { n: "03", t: "Ghost challenges", d: "Unscheduled tasks dropped by the Ghost. Fast, public, messy." },
  { n: "04", t: "Daily events", d: "A reason to check in even when the Ghost is silent." },
  { n: "05", t: "Invites", d: "Growth is part of the lock. New members push the bar." },
  { n: "06", t: "Community challenges", d: "Server-wide goals that need coordination, not just clicks." },
  { n: "07", t: "Special events", d: "Bigger drops. Rare windows. Campaign set-pieces." },
];

const triggers = [
  { t: "Fragments", d: "Pieces of a larger Vault puzzle." },
  { t: "Keys", d: "Rare drops that matter later." },
  { t: "Shields", d: "Protective tokens. Team advantages." },
  { t: "Rewards", d: "Immediate, small, surprising." },
  { t: "Clues", d: "Hints planted across channels." },
  { t: "Riddles", d: "Language games the room solves together." },
  { t: "Timed hits", d: "Seconds, not hours. Pressure is the point." },
  { t: "Silence", d: "Sometimes it only watches." },
];

const clueTypes = [
  "Hidden codes — buried in bios, topics, pins, old messages.",
  "Riddles — language first, tools second.",
  "Emoji combinations — a sequence that only makes sense in-channel.",
  "Numbers — dates, IDs, counts, always slightly off.",
  "Image fragments — one picture split across posts.",
  "Channel clues — the map is the server itself.",
  "Time-limited hits — if you weren't there, you missed it.",
  "Multi-step puzzles — one answer unlocks the next room.",
];

const tone = [
  { t: "Mysterious", d: "Always one detail short of an explanation." },
  { t: "Dark", d: "Night palette. Quiet type. Gold, not neon carnival." },
  { t: "Playful", d: "The Ghost teases. It never lectures." },
  { t: "Chaotic", d: "Events collide. Plans fail on purpose." },
  { t: "Exclusive", d: "If you weren't in the room, you don't get the lore." },
  { t: "Unpredictable", d: "The only schedule is that there isn't one." },
];

function VaultPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-display text-xl tracking-[0.2em]">
            VAULT <span className="text-gold">×</span> GHOST
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="mr-2 inline-block size-1.5 animate-pulse-soft rounded-full bg-gold align-middle" />
            78% locked
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-border">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(80% 90% at 70% 20%, oklch(0.38 0.16 16 / 60%), transparent 70%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:py-24">
          <div>
            <p className="eyebrow">Something is waiting inside</p>
            <h1 className="mt-4 text-6xl leading-[0.85] sm:text-7xl md:text-8xl">
              YOU DON'T FIND
              <br />
              THE <span className="gold-text">VAULT.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg italic text-muted-foreground">
              The Vault finds you.
            </p>
            <div className="mt-9 max-w-lg">
              <VaultProgress />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#the-ghost"
                className="group relative overflow-hidden border border-gold/60 bg-gold px-7 py-3 font-display text-lg tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                ENTER THE SERVER
              </a>
              <a
                href="#clues"
                className="border border-border px-7 py-3 font-display text-lg tracking-[0.18em] text-muted-foreground transition-colors hover:border-gold-dim hover:text-foreground"
              >
                READ THE CLUES
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={ghostVault.url}
              alt="The Ghost climbing out of the Vault with a sack of coins"
              className="relative z-10 w-full animate-drift drop-shadow-[0_30px_60px_oklch(0_0_0/60%)]"
            />
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">01 — The concept</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
          MORE THAN A DISCORD INVITE.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="vault-panel noise-veil p-7">
            <p className="eyebrow">Collective objective</p>
            <h3 className="mt-2 text-3xl text-gold">THE VAULT</h3>
            <p className="mt-3 text-muted-foreground">
              A mysterious Vault the entire community works together to unlock. Shared
              progress. Shared reward. Nobody opens it alone.
            </p>
          </article>
          <article className="vault-panel noise-veil p-7">
            <p className="eyebrow">Living character</p>
            <h3 className="mt-2 text-3xl text-gold">THE GHOST</h3>
            <p className="mt-3 text-muted-foreground">
              A character who appears without a schedule. Leaves clues. Starts challenges.
              Guards the Vault. Unpredictable on purpose.
            </p>
          </article>
        </div>

        <div className="mt-5 grid items-center gap-6 border border-border bg-surface p-7 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="eyebrow">Instead of</p>
            <p className="mt-2 text-xl text-muted-foreground line-through">
              “Join Discord to get rewards.”
            </p>
          </div>
          <span className="font-display text-3xl text-gold">→</span>
          <div>
            <p className="eyebrow">It becomes</p>
            <p className="mt-2 text-xl">“Join because something is happening there.”</p>
          </div>
        </div>
      </section>

      {/* THE BAR */}
      <section className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">02 — The Vault</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            A LOCK THE WHOLE SERVER SHARES.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The bar only moves if the community moves. Seven ways in.
          </p>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {barMovers.map((m) => (
              <div key={m.n} className="bg-background p-6">
                <span className="font-mono text-xs text-gold-dim">{m.n}</span>
                <h3 className="mt-3 text-2xl">{m.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
            <div className="flex items-center bg-crimson/20 p-6">
              <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-gold">
                Rule — the Vault never belongs to a single winner. Progress is communal.
                Glory is communal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GHOST */}
      <section id="the-ghost" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-x-8 bottom-8 top-8 rounded-full bg-crimson/25 blur-3xl" />
            <img
              src={fury.url}
              alt="The Ghost in a black beanie carrying a loot sack"
              className="relative mx-auto w-72 md:w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">03 — The Ghost</p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              GUARDIAN. INSTIGATOR. <span className="gold-text">UNSCHEDULED.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              There is no timetable. If people can plan around it, the spell breaks.
            </p>
            <div className="mt-8 space-y-3">
              {[
                ["THE GHOST HAS APPEARED", "You have 60 seconds. Find me."],
                ["I LEFT SOMETHING BEHIND.", "Somewhere in this server. Find it."],
                ["THE VAULT IS WATCHING.", "—"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="border-l-2 border-gold bg-surface px-5 py-4 font-mono text-sm"
                >
                  <p className="tracking-[0.14em] text-gold">{a}</p>
                  <p className="mt-1 text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {triggers.map((t) => (
            <div key={t.t} className="group bg-background p-6 transition-colors hover:bg-surface-2">
              <h3 className="text-2xl text-gold-dim transition-colors group-hover:text-gold">
                {t.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLUES */}
      <section id="clues" className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">04 — The clues</p>
            <h2 className="mt-3 text-4xl md:text-5xl">CLUES IN THE WALLS OF THE SERVER.</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Not a solo speedrun. The room investigates, argues, and helps out loud.
            </p>
            <ul className="mt-8 space-y-3">
              {clueTypes.map((c) => (
                <li key={c} className="flex gap-3 border-b border-border pb-3 text-sm">
                  <span className="mt-1 size-1.5 shrink-0 rotate-45 bg-gold" />
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="vault-panel glow-ring flex flex-col items-center px-6 py-12 text-center">
              <p className="eyebrow">How a drop feels</p>
              <p className="mt-5 font-display text-5xl tracking-[0.15em] text-gold">
                7 — 3 — 9 — ?
              </p>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                you have 30 seconds
              </p>
            </div>
            <div className="border border-border bg-background p-6">
              <h3 className="text-2xl">I WAS HERE. BUT WHERE?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Absence is also a clue. The Ghost leaves holes on purpose.
              </p>
            </div>
            <img
              src={heist.url}
              alt="The Ghost surrounded by falling gold coins"
              className="w-full border border-border object-cover"
            />
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">05 — The board</p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              THE ROOM IS <span className="gold-text">KEEPING SCORE.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A public board of who is feeding the Vault. Names are placeholders until the
              hunt goes live.
            </p>
            <img
              src={tuxedo.url}
              alt="The Ghost in a tuxedo with arms crossed"
              className="mt-8 hidden w-56 lg:block"
            />
          </div>
          <Leaderboard />
        </div>
      </section>

      {/* TWIST */}
      <section className="relative border-y border-border py-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 80% at 50% 50%, oklch(0.4 0.18 16 / 45%), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow">06 — The twist</p>
          <h2 className="mt-4 text-5xl md:text-7xl">
            100% IS NOT <span className="gold-text">THE ENDING.</span>
          </h2>
          <div className="mx-auto mt-10 max-w-md border border-gold/40 bg-background/70 p-8 backdrop-blur">
            <p className="font-display text-3xl tracking-[0.16em] text-gold">VAULT COMPLETE</p>
            <p className="mt-3">Thank you.</p>
            <p className="mt-1 italic text-muted-foreground">But you don't have the key.</p>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
            The bar filling triggers the Final Ghost Hunt. Nobody is told what is inside.
            Curiosity is the campaign.
          </p>
        </div>
      </section>

      {/* TONE */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">07 — Tone</p>
        <h2 className="mt-3 text-4xl md:text-5xl">A GAME, NOT ANOTHER LOBBY.</h2>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {tone.map((t) => (
            <div key={t.t} className="bg-background p-6">
              <h3 className="text-2xl">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-display text-3xl tracking-[0.2em]">
            VAULT <span className="text-gold">×</span> GHOST
          </p>
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            The Ghost knows. Nobody else does.
          </p>
        </div>
      </footer>
    </div>
  );
}
