<template>
  <div
    :class="['retro-grid']"
    :style="{
      perspective: '200px',
      '--grid-angle': `${angle}deg`,
      '--grid-opacity': opacity,
      '--line-color': lineColor,
      '--line-glow': `0 0 ${glowSize}px ${lineColor}`,
      '--bg-from': bgGradientFrom,
      '--bg-to': bgGradientTo,
    }"
  >
    <!-- Grid -->
    <div class="grid-container" :style="{ transform: `rotateX(var(--grid-angle))` }">
      <div
        class="grid-lines"
        :style="{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 0),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 0)
          `,
          opacity: opacity,
          boxShadow: 'var(--line-glow)',
        }"
      />
    </div>
    <div
      class="gradient-overlay"
      :style="{
        background: `linear-gradient(to top, ${bgGradientFrom}, ${bgGradientTo} 90%)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  angle?: number
  lineColor?: string
  glowSize?: number
  opacity?: number
  bgGradientFrom?: string
  bgGradientTo?: string
}

withDefaults(defineProps<Props>(), {
  angle: 65,
  lineColor: 'rgba(255, 0, 255, 0.5)',
  glowSize: 5,
  opacity: 0.5,
  bgGradientFrom: 'rgba(20, 0, 40, 0.8)',
  bgGradientTo: 'rgba(0, 0, 0, 0)',
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
