import { Plugin as VitePlugin } from 'vite'

export function external(): VitePlugin {
  return {
    name: 'cxmh:plugin-external',
  }
}
