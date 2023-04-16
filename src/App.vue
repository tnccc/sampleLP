<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { nextTick } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import SectionOfHero from '@/components/section/OfHero.vue'
import SectionOfAbout from '@/components/section/OfAbout.vue'
import SectionOfSolution from '@/components/section/OfSolution.vue'
import SectionOfWorks from '@/components/section/OfWorks.vue'
import SectionOfMedia from '@/components/section/OfMedia.vue'
import SectionOfTeam from '@/components/section/OfTeam.vue'

//ioで監視する要素を取得
const elements = ref<NodeListOf<HTMLElement>>()
const currnetElement = ref()
const options = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}
//ioで実行したい処理
const callback = (entries: any) => {
  entries.forEach((entry: any) => {
    if(entry.isIntersecting) {
      console.log(`要素の取得に成功 => ${entry.target.className}`)
    }
  })
}
const observer = new IntersectionObserver(callback, options)
onMounted(() => {
  nextTick(() => {
    elements.value = document.querySelectorAll('.element')
    Array.from(elements.value)
    elements.value.forEach(el => {
      observer.observe(el)
    })
  })
})
</script>

<template>
  <GlobalHeader :class="$style.header" />
  <main :class="$style.main">
    <SectionOfHero :class="'element'" />
    <SectionOfAbout :class="'element'" />
    <SectionOfSolution :class="'element'" />
    <SectionOfWorks :class="'element'" />
    <SectionOfMedia :class="'element'" />
    <SectionOfTeam :class="'element'" />
  </main>
  <GlobalFooter />
</template>

<style lang="scss" module>
.main {
  width : 100%;
}
</style>
