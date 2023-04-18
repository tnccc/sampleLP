<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import SectionOfHero from '@/components/section/OfHero.vue'
import SectionOfAbout from '@/components/section/OfAbout.vue'
import SectionOfSolution from '@/components/section/OfSolution.vue'
import SectionOfWorks from '@/components/section/OfWorks.vue'
import SectionOfMedia from '@/components/section/OfMedia.vue'
import SectionOfTeam from '@/components/section/OfTeam.vue'

//監視する要素を取得
const isLoading = ref(false)
const elements = ref<NodeListOf<HTMLElement>>()
const navigationElements = ref<NodeListOf<HTMLElement> | null>()
const options = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}
//実行したい処理
const callback = (entries: any) => {
  entries.forEach((entry: any) => {
    if(entry.isIntersecting) {
      navigationElements.value?.forEach(el => {
        const currentNavigation = el.getAttribute('data-section')
        if(currentNavigation !== null && entry.target.classList.contains(currentNavigation)) {
          el.classList.add('current')
        } else {
          if(!entry.target.classList.contains('about')) {
            el.classList.remove('current')
          }
        }
      })
    } 
  })
}
// observerを呼び出す
const observer = new IntersectionObserver(callback, options)
// 各要素の取得
onMounted(() => {
  elements.value = document.querySelectorAll('.element')
  navigationElements.value = document.querySelectorAll('.item[data-section]')
  elements.value.forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <GlobalHeader 
    :scroll-elements="elements"
    :class="$style.header" 
  />
  <main :class="$style.main">
    <SectionOfHero
      id="hero"
      :class="'element hero'"
    />
    <SectionOfAbout
      id="about"
      :class="'element about'"
    />
    <SectionOfSolution
      id="solution"
      :class="'element solution'"
    />
    <SectionOfWorks
      id="works"
      :class="'element works'"
    />
    <SectionOfMedia
      id="media"
      :class="'element media'"
    />
    <SectionOfTeam
      id="team"
      :class="'element team'"
    />
  </main>
  <GlobalFooter />
  <teleport
    v-if="isLoading"
    to="body"
  >
    <div :class="$style.animation" />
  </teleport>
</template>

<style lang="scss" module>
.main {
  width : 100%;
}
</style>
