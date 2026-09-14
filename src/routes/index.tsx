import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Eye, LockKeyhole, Radio, Users } from "lucide-react";
import { VaultProgress } from "@/components/vault/ProgressBar";
import { Leaderboard } from "@/components/vault/Leaderboard";
import { Button } from "@/components/ui/button";
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
          "Follow the latest signal, help the community unlock the Vault, and watch for the Ghost.",
      },
      { property: "og:title", content: "The Vault × The Ghost" },
      {
        property: "og:description",
        content:
          "7,842 / 10,000. Something is waiting inside. Follow the latest signal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VaultPage,
});

const activity = [
  { time: "12 MIN AGO", title: "A fragment was recovered", detail: "North corridor · +240 Vault progress" },
  { time: "46 MIN AGO", title: "The room solved Signal 07", detail: "18 hunters contributed" },
  { time: "2 HRS AGO", title: "A shield changed hands", detail: "Holder identity concealed" },
];

const waysIn = [
  { icon: Radio, title: "Follow the signal", detail: "Watch the live channels. The next move may not wait." },
  { icon: Eye, title: "Solve together", detail: "Share what you notice. One detail can move the whole room." },
  { icon: Users, title: "Show up", detail: "Take part in live events and help push the Vault forward." },
];

function VaultPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-display text-xl tracking-[0.2em]">
            VAULT <span className="text-gold">×</span> GHOST
          </span>
          <a href="#current-signal" className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground">
            <span className="mr-2 inline-block size-1.5 animate-pulse-soft rounded-full bg-gold align-middle" />
            Ghost activity detected
          </a>
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
            <Button asChild size="lg" className="mt-8 h-12 rounded-none border border-gold/60 font-display text-lg tracking-[0.18em] transition-transform hover:-translate-y-0.5">
              <a href="#current-signal">ENTER THE SERVER <ArrowRight aria-hidden="true" /></a>
            </Button>
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

      {/* CURRENT SIGNAL */}
      <section id="current-signal" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
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
            <p className="eyebrow"><span className="mr-2 inline-block size-1.5 animate-pulse-soft rounded-full bg-gold align-middle" />Ghost activity · active</p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              A NEW SIGNAL HAS <span className="gold-text">APPEARED.</span>
            </h2>
            <div className="mt-8 border-l-2 border-gold bg-surface px-5 py-5 font-mono">
              <p className="text-sm tracking-[0.14em] text-gold">I LEFT SOMETHING BEHIND.</p>
              <p className="mt-2 text-sm text-muted-foreground">Somewhere in the server. Find it.</p>
              <p className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Signal 08 · transmission received 12 minutes ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO HELP */}
      <section className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Your move</p>
              <h2 className="mt-3 text-4xl md:text-5xl">HELP OPEN THE VAULT.</h2>
              <p className="mt-4 max-w-md text-muted-foreground">No one gets there alone. Join the room, follow what is happening now, and help connect the pieces.</p>
              <img src={heist.url} alt="The Ghost surrounded by falling gold coins" className="mt-8 hidden max-h-72 w-full border border-border object-cover md:block" />
            </div>
            <div className="grid gap-px border border-border bg-border">
              {waysIn.map(({ icon: Icon, title, detail }) => (
                <article key={title} className="flex gap-5 bg-background p-6">
                  <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold" />
                  <div><h3 className="text-2xl">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">The board</p>
            <h2 className="mt-3 text-4xl md:text-5xl">THE ROOM IS <span className="gold-text">KEEPING SCORE.</span></h2>
            <p className="mt-4 max-w-md text-muted-foreground">Every solved signal and completed event brings the community closer.</p>
            <img src={tuxedo.url} alt="The Ghost in a tuxedo with arms crossed" className="mt-8 hidden w-56 lg:block" />
          </div>
          <Leaderboard />
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">From the room</p>
            <h2 className="mt-3 text-4xl md:text-5xl">RECENT ACTIVITY.</h2>
            <img
              src={fury.url}
              alt="The Ghost carrying a loot sack"
              className="mt-8 hidden w-64 md:block"
            />
          </div>
          <div className="border-t border-border">
            {activity.map((item) => (
              <article key={item.title} className="grid gap-2 border-b border-border py-6 sm:grid-cols-[8rem_1fr]">
                <time className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold-dim">{item.time}</time>
                <div><h3 className="text-2xl">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="font-display text-3xl tracking-[0.2em]">
            VAULT <span className="text-gold">×</span> GHOST
          </p>
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
             Stay close. Watch the signal.
          </p>
        </div>
      </footer>
    </div>
  );
}
