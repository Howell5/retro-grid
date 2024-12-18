<template>
  <div class="min-h-screen bg-black">
    <!-- 测试组件 -->
    <RetroGrid v-if="!customMode" :theme="selectedTheme" />
    <RetroGrid
      v-else
      :angle="angle"
      :glowSize="glowSize"
      :opacity="opacity"
      :lineColor="convertToRGBA(lineColor, opacity)"
      :bgGradientFrom="convertToRGBA(bgGradientFrom, 0.8)"
      :bgGradientTo="convertToRGBA(bgGradientTo, 0)"
    />

    <!-- 控制面板 -->
    <div class="relative z-10 p-8">
      <div class="max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-6 text-cyan-500">
        <h1 class="text-2xl font-bold mb-4 text-pink-500">Retro Grid Demo</h1>

        <!-- 预设主题选择 -->
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2">Theme Presets</label>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="theme in themes"
              :key="theme"
              @click="selectTheme(theme)"
              :class="[
                'px-4 py-2 rounded capitalize',
                selectedTheme === theme
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 hover:bg-gray-600',
              ]"
            >
              {{ theme }}
            </button>
          </div>
        </div>

        <!-- 自定义模式开关 -->
        <div class="mb-6 flex items-center">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="customMode" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-700 peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"
            ></div>
            <span class="ml-3 text-sm font-medium">Custom Mode</span>
          </label>
        </div>

        <!-- 自定义控制面板 -->
        <div v-if="customMode">
          <!-- 角度控制 -->
          <div class="mb-4">
            <label class="block text-sm font-medium"> Grid Angle: {{ angle }}° </label>
            <input type="range" v-model="angle" min="0" max="90" class="w-full accent-pink-500" />
          </div>

          <!-- 发光大小控制 -->
          <div class="mb-4">
            <label class="block text-sm font-medium"> Glow Size: {{ glowSize }}px </label>
            <input
              type="range"
              v-model="glowSize"
              min="0"
              max="20"
              class="w-full accent-pink-500"
            />
          </div>

          <!-- 透明度控制 -->
          <div class="mb-4">
            <label class="block text-sm font-medium"> Opacity: {{ opacity }} </label>
            <input
              type="range"
              v-model="opacity"
              min="0"
              max="1"
              step="0.1"
              class="w-full accent-pink-500"
            />
          </div>

          <!-- 颜色选择器 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Line Color</label>
            <input type="color" v-model="lineColor" class="w-full h-10 rounded" />
          </div>

          <!-- 渐变色选择器 -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Background Gradient From</label>
            <input type="color" v-model="bgGradientFrom" class="w-full h-10 rounded" />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Background Gradient To</label>
            <input type="color" v-model="bgGradientTo" class="w-full h-10 rounded" />
          </div>
        </div>

        <!-- 导出配置按钮 -->
        <button
          v-if="customMode"
          @click="exportConfig"
          class="w-full px-4 py-2 bg-cyan-600 text-white/80 hover:bg-cyan-700 rounded mt-4"
        >
          Export Configuration
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RetroGrid from '../components/RetroGrid.vue'

const themes = ['cyberpunk', 'matrix', 'vaporwave', 'classic', 'midnight'] as const
const selectedTheme = ref<(typeof themes)[number]>('cyberpunk')
const customMode = ref(false)

// 自定义模式的控制值
const angle = ref(65)
const glowSize = ref(5)
const opacity = ref(0.5)
const lineColor = ref('#ff00ff')
const bgGradientFrom = ref('#140028')
const bgGradientTo = ref('#000000')

// 新增: 颜色转换函数
function convertToRGBA(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const selectTheme = (theme: (typeof themes)[number]) => {
  selectedTheme.value = theme
  customMode.value = false
}

const exportConfig = () => {
  const config = {
    angle: angle.value,
    glowSize: glowSize.value,
    opacity: opacity.value,
    lineColor: lineColor.value,
    bgGradientFrom: bgGradientFrom.value,
    bgGradientTo: bgGradientTo.value,
  }

  navigator.clipboard
    .writeText(JSON.stringify(config, null, 2))
    .then(() => alert('Configuration copied to clipboard!'))
    .catch(() => alert('Failed to copy configuration'))
}
</script>
