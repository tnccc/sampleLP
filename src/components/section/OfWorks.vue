<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';
import itemCard from '@/components/item/itemCard.vue';

const items = [
  {
    images  : 'sample.webp',
    alt     : 'sample.webp',
    heading : 'みらいのしごと',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
    link    : 'https://www.google.co.jp/',
    linkText: 'リンク1',
  },
  {
    images : 'sample.webp',
    alt    : 'sample.webp',
    heading: '新時代',
    text   : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images : 'sample.webp',
    alt    : 'sample.webp',
    heading: '企業理念',
    text   : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images : 'sample.webp',
    alt    : 'sample.webp',
    heading: '新サービス',
    text   : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
]
</script>

<template>
  <SectionContainer :class="$style.container">
    <SectionHeading 
      :en="'WORKS'"
      :ja="'代表事例'"
    />
    <div :class="$style.contents">
      <ul>
        <li>
          <itemCard :items="items" />
        </li>
      </ul>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  width: 100%;
}
</style>
