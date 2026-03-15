# iOS Web ShadCN

<p align="center">
  <strong>Prototype iOS-style interfaces on the web with a fast React workflow.</strong>
</p>

<p align="center">
  Built for quick UI exploration, clickable flows, and lightweight mobile product demos.
</p>

![Workbench Preview](../../docs/images/workbench-ios-web-shadcn.png)

![App Preview](../../docs/images/ios-web-shadcn.png)

## Overview

`ios-web-shadcn` is a compact iOS-inspired web prototype built with React, React Router, Tailwind CSS, and Motion.

It is a strong fit when you want to:

- prototype mobile screens directly in code
- iterate faster than a native iOS setup
- share a working flow with teammates or clients
- explore iOS-like UI patterns for web apps or Telegram Mini Apps

## Contain

- Messages screen with searchable conversation list
- Chat screen with animated mock messages
- Profile screen with iOS-style grouped settings
- Ready-to-edit mock data in `src/app/data/mockData.ts`
- Lightweight app structure with React Router navigation

## Screens

| Screen     | Description                                         |
| ---------- | --------------------------------------------------- |
| `Messages` | Main inbox with avatars, unread badges, and search  |
| `Chat`     | Conversation view with message bubbles and composer |
| `Profile`  | Simple account page with grouped settings rows      |

## Why web-first

- One prototype source is easier to maintain than designing in one tool and rebuilding in another
- You can iterate on real UI states, flows, and interactions instead of static mockups
- Web prototypes are fast to launch, easy to share, and simple to host
- Not every builder wants the overhead of SwiftUI, UIKit, or a full native toolchain
- The visual language transfers well to web products that want an iOS feel

## Stack

- `React`
- `React Router`
- `Tailwind CSS`
- `Motion`
- `TypeScript`

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git
cd ton-design-system/registry/ios-web-shadcn

pnpm install
pnpm dev
```

## Production Preview

```bash
pnpm build
pnpm preview
```
