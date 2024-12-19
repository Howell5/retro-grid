export type ThemePreset = 'cyberpunk' | 'matrix' | 'vaporwave' | 'classic' | 'midnight'

export interface ThemeConfig {
  angle: number
  lineColor: string
  glowSize: number
  opacity: number
  bgGradientFrom: string
  bgGradientTo: string
}

export interface RetroGridProps {
  theme?: ThemePreset
  angle?: number
  lineColor?: string
  glowSize?: number
  opacity?: number
  bgGradientFrom?: string
  bgGradientTo?: string
}
