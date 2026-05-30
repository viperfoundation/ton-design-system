import { Button } from "@/components/Button";
import { Lottie } from "@/components/Lottie";

const pillars = [
  {
    title: "Messenger-native UX",
    description:
      "Viper treats TON as a communication layer, not a hidden backend. Wallet, identity, and actions live inside a fluent chat flow.",
  },
  {
    title: "Mass-scale architecture",
    description:
      "TON was designed for millions of transactions per second through workchains, shardchains and tight inter-chain messaging.",
  },
  {
    title: "Real network primitives",
    description:
      "TON based. Viper focuses on the messenger surface that can grow on top of that foundation.",
  },
];

const networkLayers = [
  {
    kicker: "TON Blockchain",
    title: "Fast shards, one coherent state",
    description:
      "Masterchain, workchains and shardchains explain why TON can support fast, large-scale products instead of acting like a narrow settlement rail.",
  },
  {
    kicker: "TON Network",
    title: "Peer-to-peer delivery for real apps",
    description:
      "TON Network is the communication substrate around the chain. That makes a messenger-native product direction technically coherent.",
  },
  {
    kicker: "Public key model",
    title: "Identity can become a wallet address",
    description:
      "In TON, public-key based identities can be turned into wallet addresses. Viper starts from communication identity first, not from a wallet dashboard.",
  },
  {
    kicker: "Whitepaper DNA",
    title: "Current scope, clearly framed",
    description:
      "Right now the product surface is narrower: TON as the network foundation, plus identities that can resolve into wallet addresses.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Open Viper",
    description:
      "Identity and conversation context live in one interface instead of being split across tabs, extensions and external dapps.",
  },
  {
    step: "02",
    title: "Resolve a TON destination",
    description:
      "Resolve a public key or username, then derive the TON destination in the background.",
  },
  {
    step: "03",
    title: "Send value or intent",
    description:
      "Transfers, service calls, file access or channel actions behave like conversations, but execute on TON's routing and smart-contract model.",
  },
  {
    step: "04",
    title: "Stay in motion",
    description:
      "Because TON is designed as a complete platform, Viper can keep users inside one continuous product loop instead of ejecting them into tooling.",
  },
];

export function ViperComponent() {
  return (
    <div className="w-full min-h-dvh overflow-x-hidden bg-[linear-gradient(180deg,#f4fbff_0%,#dff4ff_18%,#ffffff_44%,#f3f7fb_100%)] text-slate-950 dark:bg-[linear-gradient(180deg,#04131d_0%,#071d29_20%,#0a1520_52%,#030711_100%)] dark:text-white">
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(0,163,255,0.28),_transparent_48%),radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.92),_transparent_38%)] dark:bg-[radial-gradient(circle_at_top,_rgba(0,180,255,0.24),_transparent_40%),radial-gradient(circle_at_20%_20%,_rgba(32,91,255,0.22),_transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <header className="mb-12 flex items-center justify-between rounded-full py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Messenger-first landing based on the v2 visual direction
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
              <a
                href="#architecture"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                Architecture
              </a>
              <a
                href="#network"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                Network
              </a>
              <a
                href="#source"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                Source
              </a>
              <a
                href="#contact"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
          </header>

          <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                Viper makes TON feel like a living messenger, not a cold wallet.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                A landing page for a product vision where identity, chat and
                TON-native addressing sit on top of The Open Network without
                pretending the whole stack is already shipped.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://apps.apple.com/us/app/viper-messenger/id6754181968"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center h-12 rounded-full border-0 bg-sky-500 px-7 text-white shadow-[0_18px_50px_rgba(14,165,233,0.4)] hover:bg-sky-400"
                >
                  Open Viper Preview
                </a>
                <a
                  href="https://docs.ton.org/blockchain-basics/whitepapers/ton"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center h-12 rounded-full border border-slate-300 bg-white/80 px-7 text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  Read the TON Thesis
                </a>
              </div>
              <div className="mt-10">
                <div className="w-fit rounded-[1.75rem] border border-white/70 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                    Product posture
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                    Chat-first
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Viper turns protocol complexity into conversation-grade UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-sky-300/30 blur-2xl dark:bg-sky-500/20 lg:block" />
              <div className="absolute -right-10 bottom-10 hidden h-28 w-28 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10 lg:block" />
              <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#0f172a_0%,#0b2034_100%)] p-6 text-white dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-sky-200/80">
                        Viper session
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                        Your TON graph in motion
                      </p>
                    </div>
                    <div className="h-16 w-16">
                      <Lottie
                        src="/lotties/ton-pack/light.json"
                        className="h-16 w-16"
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-sky-200/75">
                            Conversation
                          </p>
                          <p className="mt-1 text-lg font-medium">No Name</p>
                        </div>
                        <div className="h-12 w-12">
                          <Lottie
                            src="/lotties/ton-pack/mailbox.json"
                            className="h-12 w-12"
                            loop
                            autoplay
                          />
                        </div>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="max-w-[80%] w-fit rounded-2xl bg-white/10 px-4 py-3 text-slate-100">
                          Send 12 TON to my account. Resolve via TON address in
                          my profile.
                        </div>
                        <div className="max-w-[80%] w-fit ml-auto rounded-2xl bg-sky-500 px-4 py-3 text-white">
                          Approved.
                        </div>
                        <div className="max-w-[80%] w-fit rounded-2xl bg-white/10 px-4 py-3 text-slate-100">
                          Viper created the route, funded the action and kept
                          the flow inside chat.
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                        <div className="h-12 w-12">
                          <Lottie
                            src="/lotties/ton-pack/lock.json"
                            className="h-12 w-12"
                            loop
                            autoplay
                          />
                        </div>
                        <p className="mt-3 text-sm font-medium">
                          Private by design
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">
                          Full E2E. Chats are end-to-end encrypted and identity
                          starts from keys and signatures.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                        <div className="h-12 w-12">
                          <Lottie
                            src="/lotties/ton-pack/wallet.json"
                            className="h-12 w-12"
                            loop
                            autoplay
                          />
                        </div>
                        <p className="mt-3 text-sm font-medium">
                          Wallet-aware identity
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">
                          Public-key identity can map into a TON wallet address,
                          payments still run through external services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
                Viper thesis
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {pillar.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="network"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 dark:text-sky-300">
            Why this platform matters
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
            Viper works because TON was conceived as a full-service network
            stack.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The whitepaper does not describe a simple coin rail. It describes a
            blockchain and a peer-to-peer network meant to support applications
            that ordinary users can actually touch.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {networkLayers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,249,255,0.92))] p-7 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
                {layer.kicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {layer.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {layer.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] h-fit border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(2,8,23,0.25)] dark:border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Architecture in plain English
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              From whitepaper concepts to product behavior.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Viper reframes TON into a user loop: discover, identify, message,
              continue. That is how network infrastructure becomes product
              surface.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">
                Core components from the paper
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>TON Blockchain for scalable state and addressing logic.</li>
                <li>TON Network for peer-to-peer transport and updates.</li>
                <li>Public keys that can derive into TON wallet addresses.</li>
                <li>
                  Space for messenger-native layers on top of the network.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-5">
            {timeline.map((item) => (
              <div
                key={item.step}
                className="group rounded-[2rem] border border-slate-200 bg-white/85 p-6 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_50px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-400/30"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-lg font-semibold text-white shadow-[0_14px_34px_rgba(14,165,233,0.35)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="source"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2.2rem] border border-slate-200 bg-[linear-gradient(135deg,#e0f2fe_0%,#ffffff_45%,#f8fafc_100%)] p-8 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.7)_0%,rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.02)_100%)] lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 dark:text-sky-300">
                Source material
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                The original TON whitepaper still reads like a product roadmap.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300">
              <p>
                Authors:{" "}
                <span className="font-medium text-slate-950 dark:text-white">
                  Nikolai Durov
                </span>
              </p>
              <p>
                Date:{" "}
                <span className="font-medium text-slate-950 dark:text-white">
                  July 26, 2021
                </span>
              </p>
              <blockquote className="border-l-2 border-sky-500 pl-5 text-xl leading-9 tracking-[-0.02em] text-slate-900 dark:text-white">
                “TON is a huge distributed superserver, intended to host and
                provide a variety of services.”
              </blockquote>
              <p>
                Viper translates that statement into a narrower current product
                direction: a messenger where identity, TON-native addressing and
                transport stop feeling like separate layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.4rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-[0_35px_100px_rgba(2,8,23,0.35)] dark:border-white/10 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
                Explore Viper
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em]">
                Launch a TON experience that behaves like software people
                already want to use.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Not another chain dashboard. A messenger-native entry point for
                identity, communication and TON network presence.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="https://apps.apple.com/us/app/viper-messenger/id6754181968"
                target="_blank"
                rel="noreferrer"
                className="flex items-center h-12 rounded-full border-0 bg-sky-500 px-7 text-white shadow-[0_16px_40px_rgba(14,165,233,0.35)] hover:bg-sky-400"
              >
                Start with Viper
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="border-t border-slate-200/70 pt-6 dark:border-white/10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                Support
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Need help or want to contact us? Open support inside Viper with
                a direct deeplink.
                <span className="block mt-1 text-slate-500 dark:text-slate-400">
                  Currently pending in Viper 1.4 for App Store release.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:items-end">
              <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Deep link
              </span>
              <a
                href="viper://u/support"
                className="font-mono text-sm text-sky-700 underline-offset-4 transition hover:underline dark:text-sky-300"
              >
                viper://u/support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
