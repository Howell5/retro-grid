<template>
  <div
    :class="['pointer-events-none absolute w-full h-full overflow-hidden', className]"
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
    <div class="absolute inset-0" :style="{ transform: `rotateX(var(--grid-angle))` }">
      <div
        :class="[
          'animate-grid',
          '[background-repeat:repeat]',
          '[background-size:60px_60px]',
          '[height:300vh]',
          '[inset:0%_0px]',
          '[margin-left:-50%]',
          '[transform-origin:100%_0_0]',
          '[width:600vw]',
        ]"
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
      class="absolute inset-0 bg-gradient-to-t"
      :style="{
        '--tw-gradient-from': bgGradientFrom,
        '--tw-gradient-to': bgGradientTo,
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to) 90%',
      }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
  angle?: number
  lineColor?: string
  glowSize?: number
  opacity?: number
  bgGradientFrom?: string
  bgGradientTo?: string
}

// 赛博朋克风格的默认值
withDefaults(defineProps<Props>(), {
  className: '',
  angle: 65,
  lineColor: 'rgba(255, 0, 255, 0.5)', // 霓虹粉色
  glowSize: 5,
  opacity: 0.5,
  bgGradientFrom: 'rgba(20, 0, 40, 0.8)', // 深紫色背景
  bgGradientTo: 'rgba(0, 0, 0, 0)',
})
</script>

<style scoped>
@keyframes grid {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.animate-grid {
  animation: grid 20s linear infinite;
}
</style>
