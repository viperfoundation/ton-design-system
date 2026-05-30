import React from "react";

const ComponentsSection = () => {
  const [active, setActive] = React.useState("Overview");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [sliderVal, setSliderVal] = React.useState(42);
  const [prog, setProg] = React.useState(62);
  const [accordion, setAccordion] = React.useState(0);
  const [toggled, setToggled] = React.useState(true);
  const [checks, setChecks] = React.useState({ a: true, b: false, c: true });
  const [radio, setRadio] = React.useState("fast");
  const push = useToast();

  return (
    <>
      <section id="buttons" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Buttons</h2>
          <p className="section-lead">Eight variants × three sizes. Minimal chrome, precise hit areas, subtle affordance.</p>
        </div>

        <div className="stack">
          <div className="well">
            <Button variant="primary">Continue</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="link">Read docs →</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" icon={<I.Zap/>}>With icon</Button>
          </div>
          <div className="well">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="outline" iconOnly icon={<I.Plus/>}/>
            <Button variant="outline" iconOnly size="sm" icon={<I.Copy/>}/>
            <Button variant="primary" icon={<I.Spinner/>} disabled>Loading</Button>
          </div>
        </div>
      </section>

      <section id="forms" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Form controls</h2>
          <p className="section-lead">Input, textarea, select, checkbox, radio, switch, and slider. Every state wired — focus, error, disabled.</p>
        </div>

        <div className="grid-2">
          <Card title="Text inputs">
            <div className="stack" style={{ gap: 14 }}>
              <Field label="Wallet name">
                <Input placeholder="Main wallet" defaultValue="Personal · Treasury"/>
              </Field>
              <Field label="Search">
                <Input prefix={<I.Search/>} placeholder="Search transactions, addresses..."/>
              </Field>
              <Field label="Send amount" help="Available: 1,204.58 TON">
                <Input prefix={<span className="mono" style={{ fontSize: 12 }}>TON</span>} suffix={<button className="btn-link" style={{ fontSize: 11, fontWeight: 600 }}>MAX</button>} placeholder="0.00"/>
              </Field>
              <Field label="Recipient" error="Invalid address format">
                <Input invalid defaultValue="UQAx...9zQk invalid"/>
              </Field>
              <Field label="Memo">
                <textarea className="textarea" placeholder="Optional note attached to this transaction..."/>
              </Field>
            </div>
          </Card>

          <Card title="Selectors">
            <div className="stack" style={{ gap: 18 }}>
              <Field label="Network">
                <select className="select" defaultValue="main">
                  <option value="main">Mainnet</option>
                  <option value="test">Testnet</option>
                  <option value="dev">Devnet</option>
                </select>
              </Field>

              <div>
                <div style={{ fontSize: 14, fontWeight: 550, marginBottom: 8 }}>Notifications</div>
                <div className="stack" style={{ gap: 8 }}>
                  <Checkbox label="Incoming transactions" checked={checks.a} onChange={e => setChecks({ ...checks, a: e.target.checked })}/>
                  <Checkbox label="Price alerts" checked={checks.b} onChange={e => setChecks({ ...checks, b: e.target.checked })}/>
                  <Checkbox label="Weekly digest" checked={checks.c} onChange={e => setChecks({ ...checks, c: e.target.checked })}/>
                </div>
              </div>

              <div className="row" style={{ justifyContent: "space-between" }}>
                <span style={{ fontSize: 14, fontWeight: 550 }}>Two-factor auth</span>
                <Switch checked={toggled} onChange={e => setToggled(e.target.checked)}/>
              </div>

              <div>
                <div className="row" style={{ justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 550 }}>Gas limit</span>
                  <span className="mono subtle" style={{ fontSize: 12 }}>{sliderVal}k</span>
                </div>
                <input className="slider" type="range" min="0" max="100" value={sliderVal} onChange={e => setSliderVal(+e.target.value)}/>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="feedback" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Badges, alerts &amp; tooltips</h2>
          <p className="section-lead">Small signals for status, state, and guidance.</p>
        </div>

        <div className="stack">
          <div className="well">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary" dot>Live</Badge>
            <Badge variant="success" dot>Confirmed</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="danger" dot>Failed</Badge>
            <Badge variant="outline">v2.4.1</Badge>
            <Badge variant="outline">Testnet</Badge>
          </div>

          <div className="grid-2">
            <Alert variant="info" title="New epoch is live">
              Validator rewards for epoch #4,217 have been distributed to all stakers.
            </Alert>
            <Alert variant="success" title="Transfer confirmed">
              0.5 TON was sent to UQAx...2mR7, included in a block, and finalized on TON Blockchain.
            </Alert>
            <Alert variant="warning" title="Slippage threshold too low">
              The swap may fail if the price moves before execution. Increase slippage or reduce size.
            </Alert>
            <Alert variant="danger" title="Not enough gas">
              Add a small TON balance for fees and try the transaction again.
            </Alert>
          </div>

          <div className="well">
            <Tooltip content="Copy to clipboard"><Button variant="outline" iconOnly icon={<I.Copy/>}/></Tooltip>
            <Tooltip content="View on explorer"><Button variant="outline" iconOnly icon={<I.ArrowRight/>}/></Tooltip>
            <Tooltip content="Download backup file (.json)"><Button variant="outline" icon={<I.Download/>}>Backup</Button></Tooltip>
          </div>
        </div>
      </section>

      <section id="surfaces" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Cards, tabs &amp; accordion</h2>
          <p className="section-lead">Containers and disclosure.</p>
        </div>

        <div className="grid-2">
          <Card
            title="Validator #0x2A"
            desc="Delegated stake · 245,000 TON"
            footer={<><span className="muted" style={{ fontSize: 12 }}>Commission 5%</span><span className="spacer"/><Button variant="outline" size="sm">Unstake</Button><Button variant="primary" size="sm">Stake more</Button></>}>
            <div className="stack">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="muted t-sm">APR</span>
                <span className="mono" style={{ fontWeight: 550 }}>4.82%</span>
              </div>
              <div className="row" style={{ justifyContent: "space-between" }}>
                <span className="muted t-sm">Uptime (30d)</span>
                <span className="mono" style={{ fontWeight: 550 }}>99.98%</span>
              </div>
              <div>
                <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}>
                  <span className="muted t-sm">Epoch progress</span>
                  <span className="mono subtle" style={{ fontSize: 11 }}>{prog}%</span>
                </div>
                <Progress value={prog}/>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setProg(p => (p >= 100 ? 12 : p + 12))}>Simulate progress →</Button>
            </div>
          </Card>

          <Card title="View" desc="Toggle between different representations">
            <div className="stack">
              <Tabs tabs={["Overview", "Activity", "Analytics", "Settings"]} active={active} onChange={setActive}/>
              <div style={{
                padding: 16, background: "var(--bg-subtle)",
                borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)",
                minHeight: 140, fontSize: 14,
              }}>
                {active === "Overview" && <><strong>Overview</strong><p className="muted" style={{ marginTop: 6 }}>A glanceable summary of account health, recent activity, and delegations.</p></>}
                {active === "Activity" && <><strong>Activity</strong><p className="muted" style={{ marginTop: 6 }}>Timeline of transfers, swaps, and contract interactions.</p></>}
                {active === "Analytics" && <><strong>Analytics</strong><p className="muted" style={{ marginTop: 6 }}>Flow of funds, net position, realized yield over time.</p></>}
                {active === "Settings" && <><strong>Settings</strong><p className="muted" style={{ marginTop: 6 }}>Notifications, devices, and keys.</p></>}
              </div>
            </div>
          </Card>
        </div>

        <div style={{ marginTop: 16 }}>
          <Card title="Accordion" desc="Disclosure pattern">
            <div className="stack" style={{ gap: 0 }}>
              {[
                ["What is a seed phrase?", "A seed phrase is a human-readable backup of your wallet's private key. Keep it offline, keep it private — whoever holds the seed holds the funds."],
                ["How long do confirmations take?", "Most transfers settle in under 5 seconds. During high-load periods, expect 10-30 seconds."],
                ["Why did my transaction fail?", "Common causes: insufficient gas, incorrect destination format, or a contract-level revert. The explorer will show the exact error."],
                ["Can I export my keys?", "Yes — but we strongly recommend using the encrypted backup flow instead of raw key export."],
              ].map(([q, a], i) => (
                <div key={q} style={{ borderTop: i === 0 ? 0 : "1px solid var(--border-subtle)" }}>
                  <button onClick={() => setAccordion(accordion === i ? -1 : i)} style={{
                    width: "100%", textAlign: "left", padding: "14px 2px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    fontSize: 14, fontWeight: 550, cursor: "pointer", background: "transparent", border: 0,
                  }}>
                    {q}
                    <span style={{ transition: "transform 200ms", transform: accordion === i ? "rotate(90deg)" : "none", color: "var(--fg-muted)" }}>
                      <I.ArrowRight width="14" height="14"/>
                    </span>
                  </button>
                  {accordion === i && (
                    <div style={{ padding: "0 2px 16px", color: "var(--fg-muted)", fontSize: 14 }}>{a}</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="overlays" className="content-section">
        <div className="section-head">
          <h2 className="section-title">Dialog, dropdown &amp; toast</h2>
          <p className="section-lead">Transient UI that appears on top of the page.</p>
        </div>

        <div className="well">
          <Button variant="primary" onClick={() => setDialogOpen(true)}>Open dialog</Button>
          <Dropdown
            trigger={<Button variant="outline" icon={<I.MoreHorizontal/>}>Actions</Button>}
          >
            <div className="menu-label">Account</div>
            <MenuItem icon={<I.Copy/>} kbd="⌘C">Copy address</MenuItem>
            <MenuItem icon={<I.Download/>} kbd="⌘S">Export keys</MenuItem>
            <div className="menu-sep"/>
            <MenuItem icon={<I.Send/>}>Send TON…</MenuItem>
            <MenuItem icon={<I.Zap/>}>Stake</MenuItem>
            <div className="menu-sep"/>
            <MenuItem icon={<I.X/>} danger>Disconnect wallet</MenuItem>
          </Dropdown>
          <Button variant="secondary" onClick={() => push?.({ variant: "success", title: "Block confirmed", desc: "Settled in 3.2s · fee 0.004 TON" })}>Show toast</Button>
          <Button variant="secondary" onClick={() => push?.({ variant: "error", title: "Network error", desc: "Retrying in 5s…" })}>Error toast</Button>
        </div>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Send transaction"
          desc="Review the details below. This action cannot be undone."
          footer={<><Button variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</Button><Button variant="primary" onClick={() => { setDialogOpen(false); push?.({ variant: "success", title: "Transaction signed", desc: "Broadcast to mempool" }); }}>Sign &amp; send</Button></>}
        >
          <div className="stack">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted t-sm">From</span>
              <AddressPill address="UQBk...3mTx"/>
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted t-sm">To</span>
              <AddressPill address="UQAx...9zQk"/>
            </div>
            <Separator/>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted t-sm">Amount</span>
              <span className="mono" style={{ fontSize: 20, fontWeight: 600 }}>12.500 TON</span>
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted t-sm">Network fee</span>
              <span className="mono" style={{ fontSize: 14 }}>0.0081 TON</span>
            </div>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted t-sm">USD equivalent</span>
              <span className="mono subtle" style={{ fontSize: 14 }}>~$63.72</span>
            </div>
          </div>
        </Dialog>
      </section>
    </>
  );
};

window.ComponentsSection = ComponentsSection;
