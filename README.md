# Retro Grid

[![npm version](https://img.shields.io/npm/v/retro-grid.svg)](https://www.npmjs.com/package/retro-grid)
[![npm downloads](https://img.shields.io/npm/dm/retro-grid.svg)](https://www.npmjs.com/package/retro-grid)
[![license](https://img.shields.io/npm/l/express.svg)]()

A customizable retro grid background component for Vue 3 with built-in themes and advanced customization options.

## Features

- 🎨 Multiple built-in themes (Cyberpunk, Matrix, Vaporwave, etc.)
- 🎯 Advanced customization mode
- 🌈 Full color control with gradient support
- ✨ Configurable neon glow effects
- 📱 Fully responsive
- 🔧 TypeScript support

## Demo

[Demo](https://howell5.github.io/retro-grid/)

## Installation

```bash
npm install retro-grid
# or
pnpm add retro-grid
# or
yarn add retro-grid
```

## Basic Usage

```vue
<template>
  <RetroGrid theme="cyberpunk" />
</template>

<script setup>
import { RetroGrid } from 'retro-grid'
import 'retro-grid/style.css'
</script>
```

## Props

| Prop           | Type   | Description                                                                  |
| -------------- | ------ | ---------------------------------------------------------------------------- |
| theme          | string | Predefined theme ('cyberpunk', 'matrix', 'vaporwave', 'classic', 'midnight') |
| angle          | number | Grid angle in degrees (0-90)                                                 |
| lineColor      | string | Grid line color (supports RGB/RGBA/HEX)                                      |
| glowSize       | number | Neon glow effect size in pixels                                              |
| opacity        | number | Grid line opacity (0-1)                                                      |
| bgGradientFrom | string | Background gradient start color                                              |
| bgGradientTo   | string | Background gradient end color                                                |

## Examples

### Using Themes

```vue
<!-- Cyberpunk theme -->
<RetroGrid theme="cyberpunk" />

<!-- Matrix theme -->
<RetroGrid theme="matrix" />

<!-- Vaporwave theme -->
<RetroGrid theme="vaporwave" />
```

### Custom Configuration

```vue
<RetroGrid
  :angle="65"
  lineColor="rgba(255, 0, 255, 0.5)"
  :glowSize="5"
  :opacity="0.5"
  bgGradientFrom="#140028"
  bgGradientTo="#000000"
/>
```

### Theme Configuration Reference

```typescript
// Built-in theme presets
const themes = {
  cyberpunk: {
    lineColor: 'rgba(255, 0, 255, 0.5)',
    glowSize: 5,
    opacity: 0.5,
    bgGradientFrom: '#140028',
    bgGradientTo: '#000000',
  },
  matrix: {
    lineColor: 'rgba(0, 255, 0, 0.5)',
    glowSize: 3,
    opacity: 0.4,
    bgGradientFrom: '#001400',
    bgGradientTo: '#000000',
  },
  vaporwave: {
    lineColor: 'rgba(0, 255, 255, 0.5)',
    glowSize: 4,
    opacity: 0.6,
    bgGradientFrom: '#2b0054',
    bgGradientTo: '#000000',
  },
  // ... other themes
}
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server with demo page
pnpm dev

# Build for production
pnpm build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
