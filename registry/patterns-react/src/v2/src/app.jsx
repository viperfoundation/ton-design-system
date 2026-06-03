import React, { useEffect, useState } from "react";
import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/components.css";
import "./components";
import "./overlays";
import "./section-tokens";
import "./section-components";
import "./section-patterns";

const FONT_PAIRS = {
  "Space Grotesk / JetBrains Mono": {
    sans: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
  },
  "IBM Plex": {
    sans: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, Menlo, monospace',
  },
  "Inter / JetBrains Mono": {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
  },
};

const PARAMETER_DEFAULTS = {
  primaryHue: 206,
  radiusScale: 1,
  density: 1,
  theme: "light",
  fontPair: "Space Grotesk / JetBrains Mono",
};

const {
  I,
  Button,
  Badge,
  Switch,
  ToastProvider,
  TokensSection,
  ComponentsSection,
  PatternsSection,
} = window;

const NAV = [
  {
    group: "Foundations",
    items: [
      { id: "introduction", label: "Introduction", icon: <I.ArrowRight /> },
      { id: "positioning", label: "Positioning", icon: <I.Layers /> },
      { id: "colors", label: "Color", icon: <I.Palette /> },
      { id: "type", label: "Typography", icon: <I.Type /> },
      { id: "radii", label: "Shape", icon: <I.Box /> },
      { id: "spacing", label: "Spacing", icon: <I.Layers /> },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "buttons", label: "Buttons", icon: <I.Zap /> },
      { id: "forms", label: "Forms", icon: <I.Puzzle /> },
      { id: "feedback", label: "Feedback", icon: <I.Info /> },
      { id: "surfaces", label: "Surfaces", icon: <I.Box /> },
      { id: "overlays", label: "Overlays", icon: <I.Layers /> },
      { id: "data", label: "Data", icon: <I.Code /> },
    ],
  },
  {
    group: "Patterns",
    items: [
      { id: "patterns", label: "Crypto-native", icon: <I.Wallet /> },
      { id: "dashboard", label: "Dashboard", icon: <I.Layers /> },
    ],
  },
];

const ParametersPanel = ({ state, onChange, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="parameters-panel open">
      <div
        className="row"
        style={{ justifyContent: "space-between", marginBottom: 10 }}
      >
        <h4>
          <span className="slash">/</span>
          Parameters
        </h4>
        <button
          className="btn btn-ghost btn-icon btn-sm"
          onClick={onClose}
          aria-label="Close"
        >
          <I.X />
        </button>
      </div>

      <div className="parameter-row">
        <label>Theme</label>
        <Switch
          checked={state.theme === "dark"}
          onChange={(e) =>
            onChange({ theme: e.target.checked ? "dark" : "light" })
          }
        />
      </div>

      <div className="parameter-row">
        <label>Primary hue</label>
        <span className="hue-preview" />
      </div>
      <input
        type="range"
        min="0"
        max="360"
        value={state.primaryHue}
        onChange={(e) => onChange({ primaryHue: Number(e.target.value) })}
        style={{ width: "100%" }}
        className="slider"
      />

      <div className="parameter-row" style={{ marginTop: 4 }}>
        <label>Radius</label>
        <span className="mono subtle" style={{ fontSize: 11 }}>
          {state.radiusScale.toFixed(2)}×
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={state.radiusScale}
        onChange={(e) => onChange({ radiusScale: Number(e.target.value) })}
        style={{ width: "100%" }}
        className="slider"
      />

      <div className="parameter-row" style={{ marginTop: 4 }}>
        <label>Density</label>
        <span className="mono subtle" style={{ fontSize: 11 }}>
          {state.density.toFixed(2)}×
        </span>
      </div>
      <input
        type="range"
        min="0.75"
        max="1.4"
        step="0.05"
        value={state.density}
        onChange={(e) => onChange({ density: Number(e.target.value) })}
        style={{ width: "100%" }}
        className="slider"
      />

      <div
        className="parameter-row"
        style={{
          marginTop: 10,
          flexDirection: "column",
          alignItems: "stretch",
          gap: 6,
        }}
      >
        <label>Font pair</label>
        <select
          className="select"
          value={state.fontPair}
          onChange={(e) => onChange({ fontPair: e.target.value })}
        >
          {Object.keys(FONT_PAIRS).map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-ghost btn-sm"
        style={{ width: "100%", marginTop: 10 }}
        onClick={() => onChange(PARAMETER_DEFAULTS)}
      >
        Reset
      </button>
    </div>
  );
};

export const V2Component = () => {
  const [parametersOpen, setParametersOpen] = useState(false);
  const [active, setActive] = useState("introduction");
  const [parameters, setParameters] = useState(() => {
    try {
      const saved = localStorage.getItem("tondesignsystem.parameters");
      return saved
        ? { ...PARAMETER_DEFAULTS, ...JSON.parse(saved) }
        : PARAMETER_DEFAULTS;
    } catch {
      return PARAMETER_DEFAULTS;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const pair =
      FONT_PAIRS[parameters.fontPair] || FONT_PAIRS["Space Grotesk / JetBrains Mono"];
    root.style.setProperty("--primary-h", String(parameters.primaryHue));
    root.style.setProperty("--radius-scale", String(parameters.radiusScale));
    root.style.setProperty("--density", String(parameters.density));
    root.style.setProperty("--font-sans", pair.sans);
    root.style.setProperty("--font-mono", pair.mono);
    root.setAttribute("data-theme", parameters.theme);
    localStorage.setItem("tondesignsystem.parameters", JSON.stringify(parameters));
  }, [parameters]);

  useEffect(() => {
    const ids = NAV.flatMap((group) => group.items.map((item) => item.id));
    const onScroll = () => {
      const y = window.scrollY + 100;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setParametersOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setParametersOpen(false);
    };

    window.addEventListener("message", handler);
    if (window.parent) {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    }
    return () => window.removeEventListener("message", handler);
  }, []);

  const updateParameters = (patch) => {
    setParameters((prev) => {
      const next = { ...prev, ...patch };
      if (window.parent) {
        window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
      }
      return next;
    });
  };

  const activeItem =
    NAV.flatMap((group) => group.items).find((item) => item.id === active) ??
    NAV[0].items[0];

  return (
    <ToastProvider>
      <div className="app">
        <main className="main" id="top">
          <div className="topbar">
            <div className="crumbs">
              <span>tondesignsystem</span>
              <span className="sep">/</span>
              <span>Foundations</span>
              <span className="sep">/</span>
              <span className="cur">{activeItem.label}</span>
            </div>
            <span className="spacer" />
            <Button
              variant="ghost"
              iconOnly
              icon={parameters.theme === "dark" ? <I.Sun /> : <I.Moon />}
              onClick={() =>
                updateParameters({
                  theme: parameters.theme === "dark" ? "light" : "dark",
                })
              }
              aria-label="Toggle theme"
            />
            <Button
              variant="outline"
              icon={<I.Sliders />}
              size="sm"
              onClick={() => setParametersOpen((open) => !open)}
            >
              Parameters
            </Button>
            <a
              className="btn btn-primary btn-sm"
              href="https://github.com/viperfoundation/ton-design-system"
              target="_blank"
              rel="noreferrer"
            >
              <I.Github />
              Source
            </a>
          </div>

          <div className="content">
            <header className="hero" id="introduction">
              <Badge variant="outline" style={{ marginBottom: 16 }}>
                <span className="mono">v2 / original design system</span>
              </Badge>
              <h1>
                An open design system for the <span className="accent">open network.</span>
              </h1>
              <p className="hero-sub">
                A component library and token set for building wallets, explorers, and
                dapps. Inspired by TON&apos;s palette, tuned for dense technical interfaces.
              </p>
              <div className="row">
                <Button variant="primary" size="lg" icon={<I.ArrowRight />}>
                  Get started
                </Button>
                <a
                  className="btn btn-outline btn-lg"
                  href="https://github.com/viperfoundation/ton-design-system"
                  target="_blank"
                  rel="noreferrer"
                >
                  <I.Github />
                  View on GitHub
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <strong>25</strong> components
                </span>
                <span>
                  <strong>94</strong> tokens
                </span>
                <span>
                  <strong>2</strong> themes
                </span>
                <span>
                  <strong>MIT</strong> licensed
                </span>
              </div>
            </header>

            <TokensSection />
            <ComponentsSection />
            <PatternsSection />

            <footer
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: 32,
                marginTop: 32,
                display: "flex",
                justifyContent: "space-between",
                color: "var(--fg-muted)",
                fontSize: 13,
              }}
            >
              <span>tondesignsystem / original design inspired by TON palette</span>
              <span className="mono">built with care / {new Date().getFullYear()}</span>
            </footer>
          </div>
        </main>

        <ParametersPanel
          state={parameters}
          onChange={updateParameters}
          open={parametersOpen}
          onClose={() => setParametersOpen(false)}
        />
      </div>
    </ToastProvider>
  );
};

export default V2Component;
