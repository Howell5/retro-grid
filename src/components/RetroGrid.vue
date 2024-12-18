<template>
  <div
    :class="['retro-grid']"
    :style="{
      perspective: '200px',
      '--grid-angle': `${currentTheme.angle}deg`,
      '--grid-opacity': currentTheme.opacity,
      '--line-color': currentTheme.lineColor,
      '--line-glow': `0 0 ${currentTheme.glowSize}px ${currentTheme.lineColor}`,
      '--bg-from': currentTheme.bgGradientFrom,
      '--bg-to': currentTheme.bgGradientTo,
    }"
  >
    <div class="grid-container" :style="{ transform: `rotateX(var(--grid-angle))` }">
      <div
        class="grid-lines"
        :style="{
          backgroundImage: `
            linear-gradient(to right, ${currentTheme.lineColor} 1px, transparent 0),
            linear-gradient(to bottom, ${currentTheme.lineColor} 1px, transparent 0)
          `,
          opacity: currentTheme.opacity,
          boxShadow: 'var(--line-glow)',
        }"
      />
    </div>
    <div
      class="gradient-overlay"
      :style="{
        background: `linear-gradient(to top, ${currentTheme.bgGradientFrom}, ${currentTheme.bgGradientTo} 90%)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
type ThemePreset = 'cyberpunk' | 'matrix' | 'vaporwave' | 'classic' | 'midnight'

interface ThemeConfig {
  angle: number
  lineColor: string
  glowSize: number
  opacity: number
  bgGradientFrom: string
  bgGradientTo: string
}

const THEMES: Record<ThemePreset, ThemeConfig> = {
  cyberpunk: {
    angle: 65,
    lineColor: 'rgba(255, 0, 255, 0.5)',
    glowSize: 5,
    opacity: 0.5,
    bgGradientFrom: 'rgba(20, 0, 40, 0.8)',
    bgGradientTo: 'rgba(0, 0, 0, 0)',
  },
  matrix: {
    angle: 70,
    lineColor: 'rgba(0, 255, 0, 0.5)',
    glowSize: 3,
    opacity: 0.4,
    bgGradientFrom: 'rgba(0, 20, 0, 0.9)',
    bgGradientTo: 'rgba(0, 0, 0, 0)',
  },
  vaporwave: {
    angle: 60,
    lineColor: 'rgba(0, 255, 255, 0.6)',
    glowSize: 4,
    opacity: 0.6,
    bgGradientFrom: 'rgba(147, 51, 234, 0.8)',
    bgGradientTo: 'rgba(236, 72, 153, 0)',
  },
  classic: {
    angle: 75,
    lineColor: 'rgba(255, 255, 255, 0.3)',
    glowSize: 2,
    opacity: 0.3,
    bgGradientFrom: 'rgba(30, 30, 30, 0.9)',
    bgGradientTo: 'rgba(0, 0, 0, 0)',
  },
  midnight: {
    angle: 68,
    lineColor: 'rgba(30, 64, 175, 0.5)',
    glowSize: 4,
    opacity: 0.4,
    bgGradientFrom: 'rgba(15, 23, 42, 0.9)',
    bgGradientTo: 'rgba(0, 0, 0, 0)',
  },
}

interface Props {
  theme?: ThemePreset
  // 保留自定义主题的能力
  angle?: number
  lineColor?: string
  glowSize?: number
  opacity?: number
  bgGradientFrom?: string
  bgGradientTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'cyberpunk',
})

// 合并预设主题和自定义属性
const currentTheme = computed(() => {
  const baseTheme = THEMES[props.theme]
  return {
    ...baseTheme,
    angle: props.angle ?? baseTheme.angle,
    lineColor: props.lineColor ?? baseTheme.lineColor,
    glowSize: props.glowSize ?? baseTheme.glowSize,
    opacity: props.opacity ?? baseTheme.opacity,
    bgGradientFrom: props.bgGradientFrom ?? baseTheme.bgGradientFrom,
    bgGradientTo: props.bgGradientTo ?? baseTheme.bgGradientTo,
  }
})
</script>

<style scoped>
.retro-grid {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.grid-container {
  position: absolute;
  inset: 0;
}

.grid-lines {
  position: absolute;
  height: 300vh;
  width: 600vw;
  inset: 0 0;
  margin-left: -50%;
  transform-origin: 100% 0 0;
  background-repeat: repeat;
  background-size: 60px 60px;
  animation: grid 20s linear infinite;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
}

@keyframes grid {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
