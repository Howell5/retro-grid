<template>
  <div class="min-h-screen bg-black">
    <!-- 测试组件 -->
    <RetroGrid
      :angle="angle"
      :line-color="lineColor"
      :glow-size="glowSize"
      :opacity="opacity"
      :bg-gradient-from="bgFrom"
      :bg-gradient-to="bgTo"
    />

    <!-- 控制面板 -->
    <div class="relative z-10 p-8">
      <div class="max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-6 text-cyan-500">
        <h1 class="text-2xl font-bold mb-4 text-pink-500">Retro Grid Demo</h1>

        <!-- 角度控制 -->
        <div class="mb-4">
          <label class="block text-sm font-medium"> Grid Angle: {{ angle }}° </label>
          <input type="range" v-model="angle" min="0" max="90" class="w-full accent-pink-500" />
        </div>

        <!-- 发光大小控制 -->
        <div class="mb-4">
          <label class="block text-sm font-medium"> Glow Size: {{ glowSize }}px </label>
          <input type="range" v-model="glowSize" min="0" max="20" class="w-full accent-pink-500" />
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
          <input type="color" v-model="lineColorPicker" class="w-full h-10 rounded" />
        </div>

        <!-- 预设主题 -->
        <div class="mb-4">
          <button
            @click="applyPinkTheme"
            class="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded mr-2"
          >
            Pink Theme
          </button>
          <button
            @click="applyCyanTheme"
            class="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded mr-2"
          >
            Cyan Theme
          </button>
          <button
            @click="applyPurpleTheme"
            class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
          >
            Purple Theme
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import RetroGrid from '../components/RetroGrid.vue'

const angle = ref(65)
const glowSize = ref(5)
const opacity = ref(0.5)
const lineColorPicker = ref('#ff00ff')

const lineColor = computed(() => {
  const color = lineColorPicker.value
  return `${color}80` // 添加50%的透明度
})

const bgFrom = ref('rgba(20, 0, 40, 0.8)')
const bgTo = ref('rgba(0, 0, 0, 0)')

// 预设主题
const applyPinkTheme = () => {
  lineColorPicker.value = '#ff00ff'
  bgFrom.value = 'rgba(20, 0, 40, 0.8)'
  bgTo.value = 'rgba(0, 0, 0, 0)'
  glowSize.value = 5
}

const applyCyanTheme = () => {
  lineColorPicker.value = '#00ffff'
  bgFrom.value = 'rgba(0, 20, 40, 0.8)'
  bgTo.value = 'rgba(0, 0, 0, 0)'
  glowSize.value = 5
}

const applyPurpleTheme = () => {
  lineColorPicker.value = '#b400ff'
  bgFrom.value = 'rgba(40, 0, 60, 0.8)'
  bgTo.value = 'rgba(0, 0, 0, 0)'
  glowSize.value = 5
}
</script>
