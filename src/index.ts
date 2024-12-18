import type { App } from 'vue'
import RetroGrid from './components/RetroGrid.vue'

export { RetroGrid }

export default {
  install: (app: App) => {
    app.component('RetroGrid', RetroGrid)
  },
}
