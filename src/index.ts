import type { App } from 'vue'
import RetroGrid from './components/RetroGrid.vue'
import type { ThemePreset, ThemeConfig, RetroGridProps } from './types'

export { RetroGrid }
export type { ThemePreset, ThemeConfig, RetroGridProps }

export default {
  install: (app: App) => {
    app.component('RetroGrid', RetroGrid)
  },
}
