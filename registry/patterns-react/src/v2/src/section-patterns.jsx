import React from "react";

// A simple SVG chart for the dashboard
const AreaChart = ({ data, height = 160, color = "var(--primary)" }) => {
  const w = 600;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    height - ((v - min) / (max - min || 1)) * (height - 20) - 8
  ]);
  const path = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  const area = path + ` L${w},${height} L0,${height} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} style={{ width: "100%", height, display: "block" }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#ag)"/>
      <path d={path} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const BarChart = ({ data, height = 120 }) => {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex: 1, height: `${(v / max) * 100}%`, background: "var(--primary)", opacity: 0.4 + (v / max) * 0.6, borderRadius: 2 }}/>
      ))}
    </div>
  );
};

const Sparkline = ({ data, color = "var(--primary)" }) => {
  const w = 80, h = 24;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - ((v - min) / (max - min || 1)) * h]);
  const path = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  return <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}><path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
};

// Simple deterministic random walk
const walk = (n, start = 100, vol = 8, seed = 1) => {
  const out = [start];
  let x = start;
  let s = seed;
  for (let i = 1; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280 - 0.5;
    x += r * vol;
    out.push(x);
  }
  return out;
};

const PatternsSection = () => {
  const [connected, setConnected] = React.useState(true);
  const priceData = walk(40, 6.2, 0.25, 7);
  const volData = [4, 7, 3, 9, 6, 11, 8, 12, 6, 9, 14, 10, 13, 18, 11];

  return (
    <>
      <section id="patterns" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Crypto-native patterns</h2>
          <p className="section-lead">Purpose-built primitives that appear across wallets, explorers, and dapps — wired into the same token system.</p>
        </div>

        <div className="grid-2">
          <Card title="Wallet connect">
            <div className="stack">
              <WalletButton connected={connected} address="UQBk...3mTx" onClick={() => setConnected(c => !c)}/>
              <span className="subtle t-sm">{connected ? "Click to disconnect" : "Click to connect"}</span>
            </div>
          </Card>

          <Card title="Address pills">
            <div className="stack">
              <AddressPill address="UQBk...3mTx"/>
              <AddressPill address="UQAx...9zQk"/>
              <AddressPill address="EQD__...validator.ton"/>
            </div>
          </Card>

          <Card title="Balance display">
            <Balance amount="1,204.58" unit="TON" usd="$6,142.39" change="+2.41%" dir="up"/>
          </Card>
        </div>

        <div className="subsection" style={{ marginTop: 32 }}>
          <div className="subsection-title">Transaction list</div>
          <div className="subsection-desc">A chronological feed with directional affordances.</div>
          <div className="card">
            <TxRow dir="in"  label="Received from UQAx...9zQk" sub="3 min ago · 0x47a…2b1" amount="12.500 TON" usd="$63.72"/>
            <TxRow dir="out" label="Swap · TON → USDT"         sub="1 hr ago · via DEX"    amount="25.000 TON" usd="$127.44"/>
            <TxRow dir="in"  label="Staking reward"              sub="Epoch #4,216 · auto-claimed" amount="0.832 TON" usd="$4.24"/>
            <TxRow dir="out" label="Sent to validator.ton"       sub="Yesterday · 14:02"    amount="100.00 TON" usd="$510.00"/>
            <TxRow dir="in"  label="Received from exchange"      sub="2 days ago · memo: deposit" amount="500.00 TON" usd="$2,550.00"/>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection-title">Token list</div>
          <div className="subsection-desc">Portfolio row pattern with sparkline change indicator.</div>
          <div className="card"><div style={{ padding: 8 }}>
            <TokenRow sym="TON"   name="Toncoin"         amount="1,204.58"  price="$6,142.39" change="+2.41%" dir="up"   bg="linear-gradient(135deg, var(--ton-blue-400), var(--ton-blue-700))"/>
            <TokenRow sym="USDT"  name="Tether USD"      amount="3,400.12"  price="$3,401.80" change="+0.02%" dir="up"   bg="linear-gradient(135deg, #50AF95, #2E7D63)"/>
          </div></div>
        </div>

        <div className="subsection">
          <div className="subsection-title">Receive surface</div>
          <div className="subsection-desc">QR + address with copy affordance.</div>
          <div className="grid-2">
            <Card>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "16px 0" }}>
                <div style={{ width: 180, height: 180, background: "white", borderRadius: "var(--radius-xl)", padding: 12, border: "1px solid var(--border)" }}>
                  <QRMock/>
                </div>
                <AddressPill address="UQBk4x2sFPx...9z3mTx"/>
                <div className="row">
                  <Button variant="outline" size="sm" icon={<I.Copy/>}>Copy</Button>
                  <Button variant="outline" size="sm" icon={<I.Download/>}>Save QR</Button>
                  <Button variant="primary" size="sm" icon={<I.Send/>}>Share</Button>
                </div>
              </div>
            </Card>

            <Card title="Code snippet" desc="Copy next snippet">
              <div className="stack">
                <CodeBlock lang="tsx" code={`import { Button, AddressPill } from "@tds/react";\n\nexport default function ReceiveCard() {\n  return (\n    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "16px 0" }}>\n      <div style={{ width: 180, height: 180, background: "white", borderRadius: "var(--radius-xl)", padding: 12, border: "1px solid var(--border)" }}>\n        <QRMock />\n      </div>\n      <AddressPill address="UQBk4x2sFPx...9z3mTx" />\n      <div className="row">\n        <Button variant="outline" size="sm" icon={<I.Copy />}>Copy</Button>\n        <Button variant="outline" size="sm" icon={<I.Download />}>Save QR</Button>\n        <Button variant="primary" size="sm" icon={<I.Send />}>Share</Button>\n      </div>\n    </div>\n  );\n}`}/>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="data" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Tables &amp; charts</h2>
          <p className="section-lead">For the dense, structured stuff.</p>
        </div>

        <Card title="Top validators">
          <div className="table-scroll" style={{ margin: "-24px" }}>
            <table className="table">
              <thead>
                <tr><th>Validator</th><th>Stake</th><th>APR</th><th>Uptime</th><th>Commission</th><th></th></tr>
              </thead>
              <tbody>
                {[
                  ["Validator #1",       "4.2M TON",   "4.92%", "99.99%", "3%",  "up"],
                  ["Validator #2",    "3.8M TON",   "4.88%", "99.98%", "4%",  "up"],
                  ["Validator #3",         "3.1M TON",   "4.81%", "99.96%", "5%",  "down"],
                  ["Validator #4",  "2.9M TON",   "4.79%", "99.94%", "5%",  "up"],
                  ["Validator #5",        "2.2M TON",   "4.72%", "99.91%", "6%",  "up"],
                ].map(([name, stake, apr, up, com, dir]) => (
                  <tr key={name}>
                    <td><div className="row"><span className="avatar avatar-sm" style={{ background: "linear-gradient(135deg, var(--ton-blue-400), var(--ton-blue-700))", color: "white" }}>{name[0]}</span>{name}</div></td>
                    <td className="mono">{stake}</td>
                    <td className="mono">{apr}</td>
                    <td className="mono">{up}</td>
                    <td className="mono">{com}</td>
                    <td><Sparkline data={walk(12, 5, 0.3, name.length)} color={dir === "up" ? "var(--success)" : "var(--danger)"}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid-2" style={{ marginTop: 16 }}>
          <Card title="TON · 30d price" desc="USD">
            <div className="row" style={{ justifyContent: "space-between", marginBottom: 8 }}>
              <span className="mono" style={{ fontSize: 24, fontWeight: 600 }}>$6.14</span>
              <Badge variant="success" dot>+12.4%</Badge>
            </div>
            <AreaChart data={priceData}/>
          </Card>
          <Card title="Network volume" desc="Transactions / hour (last 15h)">
            <div className="row" style={{ justifyContent: "space-between", marginBottom: 8 }}>
              <span className="mono" style={{ fontSize: 24, fontWeight: 600 }}>1.42M</span>
              <Badge variant="primary" dot>Live</Badge>
            </div>
            <BarChart data={volData}/>
          </Card>
        </div>
      </section>

      <section id="dashboard" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Dashboard in context</h2>
          <p className="section-lead">A composition of the primitives above.</p>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
          <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24 }}>
            <div>
              <div className="row" style={{ justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <div className="muted t-sm" style={{ marginBottom: 4 }}>Total balance</div>
                  <Balance amount="1,204.58" unit="TON" usd="$6,142.39" change="+2.41%" dir="up"/>
                </div>
                <div className="row">
                  <Button variant="outline" icon={<I.Download/>} size="sm">Receive</Button>
                  <Button variant="primary" icon={<I.Send/>} size="sm">Send</Button>
                </div>
              </div>
              <AreaChart data={priceData} height={140}/>
              <div className="row" style={{ gap: 4, marginTop: 12 }}>
                {["1H", "1D", "1W", "1M", "1Y", "ALL"].map((p, i) => (
                  <button key={p} className={`tab ${i === 3 ? "active" : ""}`} style={{ flex: 1, textAlign: "center", padding: "6px 10px" }}>{p}</button>
                ))}
              </div>
            </div>
            <div style={{ borderLeft: "1px solid var(--border-subtle)", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="subsection-title" style={{ fontSize: 14 }}>Recent activity</div>
              <TxRow dir="in"  label="Received" sub="UQAx...9zQk · 3m" amount="12.5 TON" usd="$63.72"/>
              <TxRow dir="out" label="Swap"     sub="TON → USDT · 1h"  amount="25.0 TON" usd="$127.44"/>
              <TxRow dir="in"  label="Staking"  sub="Epoch #4,216"     amount="0.83 TON" usd="$4.24"/>
              <Button variant="ghost" size="sm">View all →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Abstract QR placeholder (NOT a real QR code — just a token visual)
const QRMock = () => {
  const cells = 21;
  const seed = 42;
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const grid = Array.from({ length: cells * cells }, () => rand() > 0.5 ? 1 : 0);
  const cell = 100 / cells;
  return (
    <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
      {grid.map((v, i) => {
        if (!v) return null;
        const x = (i % cells) * cell, y = Math.floor(i / cells) * cell;
        return <rect key={i} x={x} y={y} width={cell} height={cell} fill="#0F1011"/>;
      })}
      {/* Finder patterns */}
      {[[0,0],[cells-7,0],[0,cells-7]].map(([fx,fy], i) => (
        <g key={i}>
          <rect x={fx*cell} y={fy*cell} width={cell*7} height={cell*7} fill="white"/>
          <rect x={fx*cell} y={fy*cell} width={cell*7} height={cell*7} fill="none" stroke="#0F1011" strokeWidth={cell}/>
          <rect x={(fx+2)*cell} y={(fy+2)*cell} width={cell*3} height={cell*3} fill="#0F1011"/>
        </g>
      ))}
      {/* Center brand mark */}
      <rect x="42" y="42" width="16" height="16" fill="white"/>
      <rect x="44" y="44" width="12" height="12" fill="var(--ton-blue-600)" rx="2"/>
    </svg>
  );
};

window.PatternsSection = PatternsSection;
