<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';
import ItemCard from '@/components/item/itemCard.vue';

const items = [
  {
    images  : 'sample.webp',
    alt     : 'sample',
    heading : 'みらいのしごと',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
    category: 'WORKS',
    links   : [
      {
        text: 'リンク1',
        path: 'https://www.google.co.jp/',
      },
    ],
  },
  {
    images  : 'sample.webp',
    alt     : 'sample',
    category: 'FEATURE',
    heading : '新時代',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images  : 'sample.webp',
    alt     : 'sample',
    category: 'FEATURE',
    heading : '企業理念',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images  : 'sample.webp',
    alt     : 'sample',
    category: 'FEATURE',
    heading : '新サービス',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
    links   : [
      {
        text: 'リンク1',
        path: 'https://www.google.co.jp/',
      },
      {
        text: 'リンク2',
        path: 'https://www.google.co.jp/',
      },
    ],
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
      <article :class="$style.article">
        <ul :class="$style.list">
          <li 
            v-for="(item, index) in items"
            :key="index"
            :class="$style.item" 
          >
            <ItemCard 
              :images="item.images"
              :alt="item.alt"
              :category="item.category"
              :heading="item.heading"
              :text="item.text" 
              :links="item.links" 
            />
          </li>
        </ul>
      </article>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {

  .contents {
    margin-top: calc(var(--bv) * 10);

    .list {
      display: flex;
      flex-wrap: wrap;
      gap: calc(var(--bv) * 5);

      @include mediaScreen('tablet') {
        flex-direction: column;
        flex-wrap     : nowrap;
      }
    
      .item {
        display: flex;
        gap: calc(var(--bv) * 2) 0;
        flex-direction: column;
        flex : 1 0 calc(100% / 2 - calc(var(--bv) * 5));
        width: calc(100% / 2 - calc(var(--bv) * 5));
        
        @include mediaScreen('tablet') {
          width: 100%;
          flex: 1 0 auto;
        }
      }
    }
  }
}
</style>
