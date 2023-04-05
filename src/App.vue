<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import SectionOfHero from '@/components/section/OfHero.vue'
import SectionOfAbout from '@/components/section/OfAbout.vue'
import SectionOfSolution from '@/components/section/OfSolution.vue'
import SectionOfWorks from '@/components/section/OfWorks.vue'
import SectionOfMedia from '@/components/section/OfMedia.vue'
import SectionOfTeam from '@/components/section/OfTeam.vue'
</script>

<template>
  <GlobalHeader :class="$style.header" />
  <main :class="$style.main">
    <SectionOfHero />
    <SectionOfAbout />
    <SectionOfSolution />
    <SectionOfWorks />
    <SectionOfMedia />
    <SectionOfTeam />
  </main>
</template>

<style lang="scss" module>
.main {
  width : 100%;
}

</style>
