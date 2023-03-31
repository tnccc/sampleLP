<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import SectionOfHero from '@/components/section/OfHero.vue'
import SectionOfAbout from '@/components/section/OfAbout.vue'
</script>

<template>
  <GlobalHeader :class="$style.header" />
  <main :class="$style.main">
    <SectionOfHero />
    <SectionOfAbout />
  </main>
</template>

<style lang="scss" module>
.main {
  width : 100%;
}

</style>
