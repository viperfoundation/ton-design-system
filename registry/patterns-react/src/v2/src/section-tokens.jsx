import React from "react";
// Section content for the design-system showcase

const ColorSwatch = ({ name, val, chipStyle }) => (
  <div className="swatch">
    <div className="swatch-chip" style={chipStyle} data-label={val}/>
    <div className="swatch-meta"><span className="name">{name}</span><span className="val mono">{val}</span></div>
  </div>
);

const TokensSection = () => {
  const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const radii = [
    { n: "xs", v: "2px", var: "--radius-xs" },
    { n: "sm", v: "4px", var: "--radius-sm" },
    { n: "md", v: "6px", var: "--radius-md" },
    { n: "lg", v: "8px", var: "--radius-lg" },
    { n: "xl", v: "12px", var: "--radius-xl" },
    { n: "2xl", v: "16px", var: "--radius-2xl" },
    { n: "full", v: "9999px", var: "--radius-full" },
  ];
  const shadows = [
    { n: "xs", var: "--shadow-xs" },
    { n: "sm", var: "--shadow-sm" },
    { n: "md", var: "--shadow-md" },
    { n: "lg", var: "--shadow-lg" },
    { n: "xl", var: "--shadow-xl" },
  ];

  return (
    <>
      <section id="colors" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Color system</h2>
          <p className="section-lead">A cool, near-neutral canvas with a single decisive accent. The primary hue is sampled from the reference blue (#4DB8FF) and expanded into a 10-step scale that reads cleanly on both themes.</p>
        </div>

        <div className="subsection">
          <div className="subsection-title">Primary scale</div>
          <div className="subsection-desc">Ramp from 50 → 900. 500 is the brand anchor.</div>
          <div className="grid-4" style={{ gap: 12 }}>
            {scale.map(s => (
              <ColorSwatch key={s} name={`primary/${s}`} val={`--ton-blue-${s}`}
                chipStyle={{ background: `var(--ton-blue-${s})` }}/>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection-title">Semantic</div>
          <div className="subsection-desc">Surface, text, border, feedback.</div>
          <div className="grid-4" style={{ gap: 12 }}>
            <ColorSwatch name="bg"        val="--bg"        chipStyle={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1px var(--border)" }}/>
            <ColorSwatch name="surface"   val="--surface"   chipStyle={{ background: "var(--surface)", boxShadow: "inset 0 0 0 1px var(--border)" }}/>
            <ColorSwatch name="bg-subtle" val="--bg-subtle" chipStyle={{ background: "var(--bg-subtle)", boxShadow: "inset 0 0 0 1px var(--border)" }}/>
            <ColorSwatch name="bg-muted"  val="--bg-muted"  chipStyle={{ background: "var(--bg-muted)", boxShadow: "inset 0 0 0 1px var(--border)" }}/>
            <ColorSwatch name="fg"        val="--fg"        chipStyle={{ background: "var(--fg)" }}/>
            <ColorSwatch name="fg-muted"  val="--fg-muted"  chipStyle={{ background: "var(--fg-muted)" }}/>
            <ColorSwatch name="border"    val="--border"    chipStyle={{ background: "var(--border)" }}/>
            <ColorSwatch name="primary"   val="--primary"   chipStyle={{ background: "var(--primary)" }}/>
            <ColorSwatch name="success"   val="--success"   chipStyle={{ background: "var(--success)" }}/>
            <ColorSwatch name="warning"   val="--warning"   chipStyle={{ background: "var(--warning)" }}/>
            <ColorSwatch name="danger"    val="--danger"    chipStyle={{ background: "var(--danger)" }}/>
            <ColorSwatch name="info"      val="--info"      chipStyle={{ background: "var(--info)" }}/>
          </div>
        </div>
      </section>

      <section id="type" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Typography</h2>
          <p className="section-lead">Geist Sans for UI and copy, Geist Mono for addresses, amounts, and code. Tight tracking on display sizes; neutral on body.</p>
        </div>

        <div className="card">
          <div className="card-body" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, rowGap: 28, alignItems: "baseline" }}>
            {[
              ["Display / 5xl", "t-5xl", "The Open Network"],
              ["Display / 4xl", "t-4xl", "Build for millions"],
              ["Heading / 3xl", "t-3xl", "Fast. Scalable. Open."],
              ["Heading / 2xl", "t-2xl", "A decentralized future"],
              ["Title / xl",    "t-xl",  "Primitives you can trust"],
              ["Body / base",   "t-base", "The system favors calm surfaces and restrained accents so the work on top can breathe."],
              ["Caption / sm",  "t-sm muted", "Muted copy for secondary detail"],
              ["Micro / xs",    "t-xs subtle mono", "MONO · BALANCE · 1,204.58 TON"],
            ].map(([label, cls, sample]) => (
              <React.Fragment key={label}>
                <div className="mono subtle" style={{ fontSize: 11 }}>{label}</div>
                <div className={cls}>{sample}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="radii" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Radii &amp; shadows</h2>
          <p className="section-lead">Corners are consistent but deliberate: sharp for keys, soft for surfaces, pill for pills. Shadows stay soft and layered — never heavy.</p>
        </div>

        <div className="grid-2">
          <Card title="Radii" desc="7-step scale">
            <div className="grid-4" style={{ gap: 12 }}>
              {radii.map(r => (
                <div key={r.n} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                  <div style={{
                    width: 56, height: 56,
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: `var(${r.var})`,
                  }}/>
                  <div style={{ fontSize: 12, fontWeight: 550 }}>{r.n}</div>
                  <div className="mono subtle" style={{ fontSize: 10 }}>{r.v}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card title="Shadows" desc="Elevation scale">
            <div className="stack">
              {shadows.map(s => (
                <div key={s.n} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 16px", background: "var(--surface)", borderRadius: "var(--radius-lg)", boxShadow: `var(${s.var})`, border: "1px solid var(--border-subtle)" }}>
                  <span style={{ fontWeight: 550, fontSize: 14 }}>shadow/{s.n}</span>
                  <span className="mono subtle" style={{ fontSize: 11 }}>{s.var}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="spacing" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Spacing scale</h2>
          <p className="section-lead">A 4px base ladder. Density-aware via <span className="mono">--density</span>.</p>
        </div>

        <div className="card"><div className="card-body">
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 100 }}>
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map(n => (
              <div key={n} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: "100%", height: `${n * 4}px`, background: "var(--primary)", borderRadius: 2, opacity: 0.85 }}/>
                <span className="mono subtle" style={{ fontSize: 10 }}>{n}</span>
              </div>
            ))}
          </div>
          <div className="row-wrap subtle mono" style={{ fontSize: 11, marginTop: 16, justifyContent: "space-between" }}>
            <span>4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 px</span>
            <span>--space-1 … --space-16</span>
          </div>
        </div></div>
      </section>
    </>
  );
};

window.TokensSection = TokensSection;
