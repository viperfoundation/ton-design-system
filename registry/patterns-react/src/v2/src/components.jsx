/* global React */
import { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';

// ============================================================
// Icon set (original inline SVGs)
// ============================================================
const I = {
  Check: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="3.5 8.5 6.5 11.5 12.5 5"/></svg>,
  Copy: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2H3.5A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/></svg>,
  Search: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><circle cx="7" cy="7" r="4.5"/><path d="m11 11 3 3"/></svg>,
  ArrowUp: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 13V3m0 0-4 4m4-4 4 4"/></svg>,
  ArrowDown: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 3v10m0 0 4-4m-4 4-4-4"/></svg>,
  ArrowRight: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 8h10m0 0-4-4m4 4-4 4"/></svg>,
  Plus: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" {...p}><path d="M8 3v10M3 8h10"/></svg>,
  X: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" {...p}><path d="m4 4 8 8M12 4l-8 8"/></svg>,
  Info: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="8" cy="8" r="6"/><path d="M8 7.5v3.5M8 5.5v.01" strokeLinecap="round"/></svg>,
  AlertTriangle: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m8 2 6.5 11h-13L8 2z"/><path d="M8 7v3M8 12v.01"/></svg>,
  Zap: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><path d="M9 2 3 9h4l-1 5 6-7H8l1-5z"/></svg>,
  Sun: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5 13 13M3 13l1.5-1.5M11.5 4.5 13 3"/></svg>,
  Moon: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><path d="M13.5 9.5a5.5 5.5 0 1 1-7-7 4.5 4.5 0 0 0 7 7z"/></svg>,
  Sliders: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><path d="M3 4h6M12 4h1M3 8h1M7 8h6M3 12h9M14 12h-1"/><circle cx="10.5" cy="4" r="1.5"/><circle cx="5.5" cy="8" r="1.5"/><circle cx="13.5" cy="12" r="1.5"/></svg>,
  Wallet: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><rect x="1.75" y="3.5" width="12.5" height="9" rx="1.5"/><path d="M11 8h2"/></svg>,
  Send: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" {...p}><path d="M14 2 7 9m7-7-4.5 12L7 9 2 6.5 14 2z"/></svg>,
  Download: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 2v8m0 0 3-3m-3 3-3-3M2.5 13h11"/></svg>,
  MoreHorizontal: (p) => <svg viewBox="0 0 16 16" fill="currentColor" {...p}><circle cx="3" cy="8" r="1.25"/><circle cx="8" cy="8" r="1.25"/><circle cx="13" cy="8" r="1.25"/></svg>,
  Github: (p) => <svg viewBox="0 0 16 16" fill="currentColor" {...p}><path d="M8 .2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.7-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.1 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.9 3.7-3.6 3.9.3.2.5.7.5 1.4v2.1c0 .2.1.5.5.4A8 8 0 0 0 8 .2z"/></svg>,
  Layers: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><path d="m8 1.5 6.5 3.5L8 8.5 1.5 5 8 1.5z"/><path d="m1.5 8 6.5 3.5L14.5 8M1.5 11l6.5 3.5L14.5 11"/></svg>,
  Palette: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M8 14.5a6.5 6.5 0 1 1 6.5-6.5c0 1.7-1.3 2.5-2.5 2.5H10c-.8 0-1.5.7-1.5 1.5 0 .4.2.8.5 1.1.3.3.5.7.5 1.1 0 .8-.7 1.3-1.5 1.3z"/><circle cx="5" cy="6.5" r=".75" fill="currentColor"/><circle cx="8" cy="4.5" r=".75" fill="currentColor"/><circle cx="11" cy="6.5" r=".75" fill="currentColor"/></svg>,
  Type: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><path d="M3 3h10M8 3v11M5 14h6"/></svg>,
  Box: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><rect x="2" y="2" width="12" height="12" rx="2"/></svg>,
  Code: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m5 4-3 4 3 4M11 4l3 4-3 4M9.5 3l-3 10"/></svg>,
  Puzzle: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...p}><path d="M4 3h3v1.5a1 1 0 0 0 2 0V3h3v3h-1.5a1 1 0 0 0 0 2H14v5H9v-1.5a1 1 0 0 0-2 0V13H4V3z"/></svg>,
  Spinner: (p) => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M8 2a6 6 0 0 1 6 6" style={{ transformOrigin: '50% 50%', animation: 'spin 800ms linear infinite' }}/></svg>,
};

// ============================================================
// Base Components
// ============================================================
const Button = ({ variant = "primary", size, icon, iconOnly, children, ...rest }) => {
  const cls = ["btn", `btn-${variant}`, size && `btn-${size}`, iconOnly && "btn-icon"].filter(Boolean).join(" ");
  return <button className={cls} {...rest}>{icon}{children}</button>;
};

const Badge = ({ variant = "default", dot, children }) => (
  <span className={`badge badge-${variant}`}>
    {dot && <span className="dot">•</span>}
    {children}
  </span>
);

const Card = ({ title, desc, footer, hoverable, children }) => (
  <div className={`card ${hoverable ? "hoverable" : ""}`}>
    {(title || desc) && (
      <div className="card-header">
        {title && <div className="title">{title}</div>}
        {desc && <div className="desc">{desc}</div>}
      </div>
    )}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

const Input = ({ prefix, suffix, invalid, ...rest }) => {
  if (prefix || suffix) {
    return (
      <div className="input-group">
        {prefix && <span className="prefix">{prefix}</span>}
        <input className={`input ${suffix ? "has-right" : ""}`} aria-invalid={invalid} {...rest}/>
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
    );
  }
  return <input className="input" aria-invalid={invalid} {...rest}/>;
};

const Field = ({ label, help, error, children }) => (
  <div className="field">
    {label && <label>{label}</label>}
    {children}
    {error ? <span className="error">{error}</span> : help && <span className="help">{help}</span>}
  </div>
);

const Checkbox = ({ checked, onChange, label, defaultChecked }) => (
  <label className="checkbox">
    <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange}/>
    <span className="box"><I.Check/></span>
    {label}
  </label>
);

const Radio = ({ checked, onChange, label, name, value, defaultChecked }) => (
  <label className="radio">
    <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} onChange={onChange}/>
    <span className="radio-mark"/>
    {label}
  </label>
);

const Switch = ({ checked, onChange, label, defaultChecked }) => (
  <label className="switch">
    <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange}/>
    <span className="track"/>
    {label && <span>{label}</span>}
  </label>
);

const Tabs = ({ tabs, active, onChange }) => (
  <div className="tabs" role="tablist">
    {tabs.map(t => (
      <div key={t} role="tab" className={`tab ${active === t ? "active" : ""}`} onClick={() => onChange(t)}>{t}</div>
    ))}
  </div>
);

const Tooltip = ({ children, content }) => (
  <span className="tooltip-wrap" tabIndex="0">
    {children}
    <span className="tooltip" role="tooltip">{content}</span>
  </span>
);

const Alert = ({ variant = "info", title, children, icon }) => {
  const defaultIcon = variant === "danger" || variant === "warning" ? <I.AlertTriangle className="icon"/> : <I.Info className="icon"/>;
  return (
    <div className={`alert alert-${variant}`}>
      {icon || defaultIcon}
      <div>
        {title && <div className="title">{title}</div>}
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

const Separator = () => <div className="separator"/>;

const Avatar = ({ initials, size, bg }) => (
  <span className={`avatar ${size === "sm" ? "avatar-sm" : size === "lg" ? "avatar-lg" : ""}`} style={bg ? { background: bg, color: "white" } : undefined}>
    {initials}
  </span>
);

const Progress = ({ value = 0 }) => (
  <div className="progress"><div className="progress-bar" style={{ width: `${value}%` }}/></div>
);

const Kbd = ({ children }) => <span className="kbd-key">{children}</span>;

Object.assign(window, {
  I, Button, Badge, Card, Input, Field, Checkbox, Radio, Switch, Tabs, Tooltip, Alert, Separator, Avatar, Progress, Kbd
});
