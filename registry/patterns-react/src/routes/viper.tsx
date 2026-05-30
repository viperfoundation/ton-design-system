import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Lottie } from "@/components/Lottie";
import { LinkButton } from "@/components/LinkButton";
import { Typography } from "@/components/Typography";
import { Separator } from "@/components/Separator";

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
            <Typography
              as="a"
              href="/tds"
              target="_blank"
              rel="noreferrer"
              variant="caption"
              tone="primary"
              className="transition hover:opacity-80"
            >
              tds/v2 powered
            </Typography>
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
              <Typography as="h1" variant="display" className="mt-4">
                Viper makes TON feel like a living messenger, not a regular
                wallet.
              </Typography>
              <Typography variant="lead" tone="subtle" className="mt-6!">
                A messenger built around cryptographic identity, chat, and
                TON-native addressing.
              </Typography>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton
                  href="https://apps.apple.com/us/app/viper-messenger/id6754181968"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 items-center rounded-full border-0 bg-sky-500 px-7 text-white shadow-[0_18px_50px_rgba(14,165,233,0.4)] hover:bg-sky-400"
                >
                  Open Viper Preview
                </LinkButton>
                <LinkButton
                  href="https://docs.ton.org/blockchain-basics/whitepapers/ton"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 items-center rounded-full border border-slate-300 bg-white/80 px-7 text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  Read the TON Thesis
                </LinkButton>
              </div>
              <div className="mt-10">
                <Card className="w-fit rounded-[1.75rem] border-white/70 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <Typography variant="eyebrow" tone="primary">
                    Product posture
                  </Typography>
                  <Typography
                    as="p"
                    variant="section"
                    className="mt-3 text-3xl"
                  >
                    Chat-first
                  </Typography>
                  <Typography variant="caption" tone="subtle" className="mt-2!">
                    Viper turns protocol complexity into conversation-grade UX.
                  </Typography>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-sky-300/30 blur-2xl dark:bg-sky-500/20 lg:block" />
              <div className="absolute -right-10 bottom-10 hidden h-28 w-28 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-400/10 lg:block" />
              <Card className="relative mx-auto max-w-xl rounded-[2rem] border-white/70 bg-white/75 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <Card className="rounded-[1.6rem] border-slate-200/80 bg-[linear-gradient(180deg,#0f172a_0%,#0b2034_100%)] p-6 text-white dark:border-white/10">
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
                    <Card className="rounded-[1.4rem] border-white/10 bg-white/6 p-4">
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
                    </Card>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <Card className="rounded-[1.4rem] border-white/10 bg-white/6 p-4">
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
                        <Typography
                          variant="caption"
                          tone="subtle"
                          className="mt-1!"
                        >
                          Full E2E. Chats are end-to-end encrypted and identity
                          starts from keys and signatures.
                        </Typography>
                      </Card>
                      <Card className="rounded-[1.4rem] border-white/10 bg-white/6 p-4">
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
                        <Typography
                          variant="caption"
                          tone="subtle"
                          className="mt-1!"
                        >
                          Public-key identity can map into a TON wallet address,
                          payments still run through external services.
                        </Typography>
                      </Card>
                    </div>
                  </div>
                </Card>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card as="article" key={pillar.title} className="p-7">
              <Typography as="h2" variant="section" className="mt-4">
                {pillar.title}
              </Typography>
              <Typography variant="body" className="mt-4!" tone="subtle">
                {pillar.description}
              </Typography>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="network"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mb-10 max-w-3xl">
          <Typography variant="eyebrow" tone="primary">
            Why this platform matters
          </Typography>
          <Typography as="h2" variant="heading" className="mt-4">
            Viper works because TON was conceived as a full-service network
            stack.
          </Typography>
          <Typography variant="lead" tone="subtle" className="mt-4!">
            The whitepaper does not describe a simple coin rail. It describes a
            blockchain and a peer-to-peer network meant to support applications
            that ordinary users can actually touch.
          </Typography>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {networkLayers.map((layer) => (
            <Card
              as="article"
              key={layer.title}
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,249,255,0.92))] p-7 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
            >
              <Typography variant="eyebrow" tone="primary">
                {layer.kicker}
              </Typography>
              <Typography as="h5" variant="lead" className="mt-2!">
                {layer.title}
              </Typography>
              <Typography variant="body" className="mt-2!" tone="subtle">
                {layer.description}
              </Typography>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="h-fit bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(2,8,23,0.25)] dark:border-white/10">
            <Typography variant="eyebrow" tone="primary">
              Architecture in plain English
            </Typography>
            <Typography as="h2" variant="heading" className="mt-4! text-white">
              From whitepaper concepts to product behavior.
            </Typography>
            <Typography
              variant="body"
              tone="subtle"
              className="mt-2! text-slate-300"
            >
              Viper reframes TON into a user loop: discover, identify, message,
              continue. That is how network infrastructure becomes product
              surface.
            </Typography>
            <Card className="mt-8 rounded-[1.5rem] border-white/10 bg-white/5 p-5">
              <Typography as="p" variant="subsection" className="text-white">
                Core components from the paper
              </Typography>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>TON Blockchain for scalable state and addressing logic.</li>
                <li>
                  The Open Network for peer-to-peer transport and updates.
                </li>
                <li>Public keys that can derive into TON wallet addresses.</li>
                <li>
                  Space for messenger-native layers on top of the network.
                </li>
              </ul>
            </Card>
          </Card>
          <div className="grid gap-5">
            {timeline.map((item) => (
              <Card
                as="article"
                key={item.step}
                className="group p-6 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_50px_rgba(14,165,233,0.12)] dark:hover:border-sky-400/30"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-lg font-semibold text-white shadow-[0_14px_34px_rgba(14,165,233,0.35)]">
                    {item.step}
                  </div>
                  <div>
                    <Typography as="h5" variant="lead">
                      {item.title}
                    </Typography>
                    <Typography variant="body" tone="subtle" className="mt-1!">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="source"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <Card className="bg-[linear-gradient(135deg,#e0f2fe_0%,#ffffff_45%,#f8fafc_100%)] p-8 dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.7)_0%,rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.02)_100%)] lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <Typography variant="eyebrow" tone="primary">
                Source material
              </Typography>
              <Typography as="h2" variant="heading" className="mt-4!">
                The original TON whitepaper still reads like a product roadmap.
              </Typography>
            </div>
            <div className="space-y-5">
              <Typography variant="body" tone="subtle">
                Authors:{" "}
                <span className="font-medium text-slate-950 dark:text-white">
                  Nikolai Durov, TON Foundation, TON Core
                </span>
              </Typography>
              <Typography variant="body" tone="subtle">
                Date:{" "}
                <span className="font-medium text-slate-950 dark:text-white">
                  July 26, 2021
                </span>
              </Typography>
              <blockquote className="mt-4! border-l-2 border-sky-500 pl-5 text-xl leading-9 tracking-[-0.02em] text-slate-900 dark:text-white">
                “TON is a huge distributed superserver, intended to host and
                provide a variety of services.”
              </blockquote>
              <Typography variant="body" tone="subtle">
                Viper translates that statement into a narrower current product
                direction: a messenger where identity, TON-native addressing and
                transport stop feeling like separate layers.
              </Typography>
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Card className="bg-slate-950 px-8 py-10 text-white shadow-[0_35px_100px_rgba(2,8,23,0.35)] dark:border-white/10 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Typography variant="eyebrow" tone="primary">
                Explore Viper
              </Typography>
              <Typography
                as="h2"
                variant="heading"
                tone="inverse"
                className="mt-4 max-w-3xl"
              >
                Launch a TON experience that behaves like software people
                already want to use.
              </Typography>
              <Typography
                variant="lead"
                tone="subtle"
                className="mt-4! max-w-2xl"
              >
                Not another chain dashboard. A messenger-native entry point for
                identity, communication and TON network presence.
              </Typography>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <LinkButton
                href="https://apps.apple.com/us/app/viper-messenger/id6754181968"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center rounded-full border-0 bg-sky-500 px-7 text-white shadow-[0_16px_40px_rgba(14,165,233,0.35)] hover:bg-sky-400"
              >
                Start with Viper
              </LinkButton>
            </div>
          </div>
        </Card>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <Card className="border-t border-slate-200/70 pt-6 dark:border-white/10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <Typography variant="eyebrow" tone="primary">
                Support
              </Typography>
              <Typography
                variant="caption"
                className="mt-2! max-w-2xl leading-7"
              >
                Need help or want to contact us? Open support inside Viper with
                a direct deeplink.
                <Typography
                  variant="caption"
                  tone="subtle"
                  className="block mt-1!"
                >
                  Currently pending in Viper 1.4 for App Store release.
                </Typography>
              </Typography>
            </div>
            <div className="flex flex-col gap-2 lg:items-end">
              <Typography
                variant="eyebrow"
                tone="primary"
                className="text-[11px] tracking-[0.28em]"
              >
                Deep link
              </Typography>
              <Typography
                as="a"
                href="viper://u/support"
                variant="mono"
                tone="surface"
                className="underline-offset-4 transition hover:underline"
              >
                viper://u/support
              </Typography>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
