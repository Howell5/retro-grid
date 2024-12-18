# Retro Grid

A simple and customizable retro grid background component for Vue 3.

## Features

- 🎨 Customizable grid colors and angles
- 🌓 Dark mode support
- ✨ Optional neon glow effects
- 📱 Fully responsive
- 🔧 TypeScript support

## Installation

```bash
npm install @howell5/retro-grid
# or
pnpm add @howell5/retro-grid
# or
yarn add @howell5/retro-grid
```

## Basic Usage

```vue
<template>
  <RetroGrid />
</template>

<script setup>
import { RetroGrid } from '@howell5/retro-grid'
</script>
```

## Props

| Prop           | Type   | Default              | Description                                           |
| -------------- | ------ | -------------------- | ----------------------------------------------------- |
| angle          | number | 65                   | Grid angle in degrees                                 |
| lineColor      | string | 'rgba(0, 0, 0, 0.3)' | Grid line color (dark mode: rgba(255, 255, 255, 0.2)) |
| glowSize       | number | 0                    | Glow effect size in pixels                            |
| opacity        | number | 0.5                  | Grid opacity                                          |
| bgGradientFrom | string | 'white'              | Background gradient start color (dark mode: black)    |
| bgGradientTo   | string | 'transparent'        | Background gradient end color                         |

## Examples

### Basic Grid

```vue
<RetroGrid />
```

### Custom Angle

```vue
<RetroGrid :angle="45" />
```

### Cyberpunk Theme

```vue
<RetroGrid
  lineColor="rgba(255, 0, 255, 0.5)"
  :glowSize="5"
  :opacity="0.5"
  bgGradientFrom="rgba(20, 0, 40, 0.8)"
  bgGradientTo="rgba(0, 0, 0, 0)"
/>
```

### Neon Blue Theme

```vue
<RetroGrid
  lineColor="rgba(0, 255, 255, 0.5)"
  :glowSize="5"
  :opacity="0.5"
  bgGradientFrom="rgba(0, 20, 40, 0.8)"
  bgGradientTo="rgba(0, 0, 0, 0)"
/>
```

## Dark Mode Support

The component automatically adapts to dark mode when your app uses the 'dark' class on the html element. You can toggle dark mode using:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark')
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## License

MIT
