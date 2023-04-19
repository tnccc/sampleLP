<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';
import ItemCard from '@/components/item/itemCard.vue';

const items = [
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/9/26',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/10/26',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/3/11',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/1/26',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2023/4/26',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/8/11',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
  {
    images : 'sample02.webp',
    alt    : 'sample_02',
    date   : '2022/6/26',
    heading: 'テキストテキストテキストテキストテキストテキスト',
  },
]
</script>

<template>
  <SectionContainer :class="$style.container">
    <SectionHeading 
      :en="'MEDIA'"
      :ja="'メディア'"
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
              :category="item.date"
              :heading="item.heading"
            />
          </li>
        </ul>
      </article>
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
              :category="item.date"
              :heading="item.heading"
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
  --scroll-margin: calc(var(--bv) * 2);

  .contents {
    margin-top: calc(var(--bv) * 10 + var(--scroll-margin));

    .article {
      overflow-x: auto;

      + .article {
        margin-top: calc(var(--bv) * 12);

        @include mediaScreen('tablet') {
          margin-top: calc(var(--bv) * 4);
        }

        .list {
          padding-top: calc(var(--bv) * 4);
        }
      }
  
      h3 {
        font-size: var(--font-size-medium);
      }

      &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }
  
      &::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 5px;
      }
  
      &::-webkit-scrollbar-track {
        background: rgba(3, 0, 106, .12);
      }
  
      .list {
        margin-bottom: var(--scroll-margin);
        display: flex;
        gap: 0 calc(var(--bv) * 3);
  
        .item {
          min-width: 250px;
  
          p {
            margin-top: calc(var(--bv) * 1.75);
          }
  
          h3 {
            font-size: var(--font-size-larger);
          }
        }
      }
    }
  }
}
</style>
