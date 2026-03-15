# iOS Web ShadCN

Great for prototyping iOS apps design in Web.

![Screenshot](../../docs/images/ios-web-shadcn.png)

# Contains

- iOS-style messaging prototype for Web
- Conversation list screen
- Chat screen with mock messages
- Profile screen
- Mock data for fast prototyping in `src/app/data/mockData.ts`
- React + React Router + Tailwind CSS + Motion

## Why not just use SwiftUI/UIKit or Figma?

- One prototype source is easier to maintain than designing in one tool and rebuilding in another; code-to-code is also easier than going from Figma to code
- Not every solo builder has access to macOS for creating or even opening native iOS projects
- Web-based prototypes are lighter and faster to iterate on than full iOS apps
- Great for quickly testing flows, UI ideas, and interactions without the overhead of native setup
- Also works great for Telegram Mini Apps when you want an iOS-like design language

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git

cd ton-design-system/registry/ios-web-shadcn

pnpm i

# dev
pnpm run dev

# preview
pnpm run build && pnpm run preview
```
