import { defineStore } from 'pinia'
import type { ImgItem, RankingItem } from '@/views/home/types'
const useHomeStore = defineStore({
  id: 'homeInfo',
  state: () =>
    ({
      modeType: 'edit',
      // 皮肤
      skin: 'light', // dark light
      rankingRows: [],
      images: [],
      title: '创建你的排名列表',
    }) as {
      modeType: 'edit' | 'preview'
      skin: 'dark' | 'light'
      rankingRows: RankingItem[]
      images: ImgItem[]
      title: string
    },
  actions: {
    switchModeType() {
      this.modeType = this.modeType === 'edit' ? 'preview' : 'edit'
    },
    switchSkin() {
      this.skin = this.skin === 'dark' ? 'light' : 'dark'
    },
  },
  persist: true, // 数据持久化存储
})

export { useHomeStore }
