import React from "react";
const { useState: _useState, useEffect: _useEffect, useRef: _useRef } = React;

// ============================================================
// Overlays: Dialog, Dropdown, Toast
// ============================================================
const Dialog = ({ open, onClose, title, desc, children, footer }) => {
  _useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()} role="dialog">
        <div className="dialog-header">
          <div className="dialog-title">{title}</div>
          {desc && <div className="dialog-desc">{desc}</div>}
        </div>
        <div className="dialog-body">{children}</div>
        {footer && <div className="dialog-footer">{footer}</div>}
      </div>
    </div>
  );
};

const Dropdown = ({ trigger, children, align = "start" }) => {
  const [open, setOpen] = _useState(false);
  const ref = _useRef(null);
  _useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    window.addEventListener("mousedown", h);
    return () => window.removeEventListener("mousedown", h);
  }, [open]);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <span onClick={() => setOpen(o => !o)}>{trigger}</span>
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          [align === "end" ? "right" : "left"]: 0,
          zIndex: 30,
        }}>
          <div className="menu" onClick={() => setOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, children, kbd, danger, onClick }) => (
  <div className={`menu-item ${danger ? "danger" : ""}`} onClick={onClick}>
    {icon && <span style={{ display: "inline-flex", width: 16, height: 16 }}>{icon}</span>}
    <span>{children}</span>
    {kbd && <span className="kbd">{kbd}</span>}
  </div>
);

// ============================================================
// Toast system
// ============================================================
const ToastCtx = React.createContext(null);
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = _useState([]);
  const push = (t) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(ts => [...ts, { id, ...t }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), t.duration || 3200);
  };
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="toast-stack">
        {toasts.map(t => (
          <div key={t.id} className={`toast ${t.variant || "info"}`}>
            {t.variant === "success" && <I.Check style={{ color: "var(--success)", width: 16, height: 16 }}/>}
            {t.variant === "error" && <I.AlertTriangle style={{ color: "var(--danger)", width: 16, height: 16 }}/>}
            {(!t.variant || t.variant === "info") && <I.Info style={{ color: "var(--primary)", width: 16, height: 16 }}/>}
            <div>
              <div style={{ fontWeight: 550 }}>{t.title}</div>
              {t.desc && <div style={{ color: "var(--fg-muted)", fontSize: 12 }}>{t.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
};
const useToast = () => React.useContext(ToastCtx);

// ============================================================
// Code block
// ============================================================
const CodeBlock = ({ lang = "tsx", code }) => {
  const [copied, setCopied] = _useState(false);
  const push = useToast();
  const copy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    push?.({ variant: "success", title: "Copied to clipboard" });
    setTimeout(() => setCopied(false), 1500);
  };
  // very lightweight token highlighting
  const highlight = (src) => {
    const placeholders = [];
    const stash = (value, cls) => {
      const key = `§${placeholders.length}§`;
      placeholders.push({
        key,
        html: `<span class="${cls}">${value}</span>`,
      });
      return key;
    };

    let escaped = src.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    escaped = escaped.replace(/(\/\/[^\n]*)/g, (match) => stash(match, "tok-c"));
    escaped = escaped.replace(
      /(["'`])(?:\\.|(?!\1)[\s\S])*?\1/g,
      (match) => stash(match, "tok-s"),
    );
    escaped = escaped.replace(
      /\b(const|let|var|function|return|import|from|export|if|else|async|await|new|class|this|default)\b/g,
      '<span class="tok-k">$1</span>',
    );
    escaped = escaped.replace(
      /\b([A-Z][A-Za-z0-9]+)\b/g,
      '<span class="tok-n">$1</span>',
    );

    return placeholders.reduce(
      (result, token) => result.replaceAll(token.key, token.html),
      escaped,
    );
  };
  return (
    <div className="codeblock">
      <div className="codeblock-head">
        <span className="lang mono">{lang}</span>
        <button className="copy-btn" onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: highlight(code) }}/>
    </div>
  );
};

// ============================================================
// TON-flavored patterns
// ============================================================
const AddressPill = ({ address = "UQAx...2mR7" }) => {
  const [copied, setCopied] = _useState(false);
  const push = useToast();
  const copy = () => {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    push?.({ variant: "success", title: "Address copied" });
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <span className={`address-pill ${copied ? "copied" : ""}`}>
      <span className="avatar"/>
      {address}
      <span className="copy" onClick={copy}>{copied ? <I.Check width="12" height="12"/> : <I.Copy width="12" height="12"/>}</span>
    </span>
  );
};

const Balance = ({ amount = "1,204.58", unit = "TON", usd = "$6,142.39", change = "+2.41%", dir = "up" }) => (
  <div className="balance">
    <div className="balance-amount">{amount}<span className="unit">{unit}</span></div>
    <div className="row" style={{ gap: 10 }}>
      <span className="balance-usd">{usd}</span>
      <span className={`balance-change ${dir}`}>
        {dir === "up" ? <I.ArrowUp width="10" height="10"/> : <I.ArrowDown width="10" height="10"/>}
        {change}
      </span>
    </div>
  </div>
);

const TxRow = ({ dir, label, sub, amount, usd }) => (
  <div className="tx-row">
    <div className={`tx-icon ${dir}`}>
      {dir === "in" ? <I.ArrowDown width="16" height="16"/> : <I.ArrowUp width="16" height="16"/>}
    </div>
    <div className="tx-meta">
      <span className="label">{label}</span>
      <span className="sub">{sub}</span>
    </div>
    <div className={`tx-amount ${dir}`}>
      {dir === "in" ? "+" : "−"}{amount}
      <span className="usd">{usd}</span>
    </div>
  </div>
);

const WalletButton = ({ connected, address, onClick }) => (
  <button className={`wallet-btn ${connected ? "connected" : ""}`} onClick={onClick}>
    <span className="diamond"/>
    {connected ? address : "Connect Wallet"}
  </button>
);

const TokenRow = ({ sym, name, amount, price, change, dir, bg }) => (
  <div className="token-row">
    <span className="token-icon" style={{ background: bg }}>{sym[0]}</span>
    <div className="token-meta">
      <span className="name">{name}</span>
      <span className="sym">{sym}</span>
    </div>
    <div className="token-price">
      <div>{amount}</div>
      <div style={{ fontSize: 11, color: "var(--fg-subtle)" }}>{price}</div>
    </div>
    <span className={`balance-change ${dir}`}>{change}</span>
  </div>
);

Object.assign(window, {
  Dialog, Dropdown, MenuItem, ToastProvider, useToast, CodeBlock,
  AddressPill, Balance, TxRow, WalletButton, TokenRow
});
