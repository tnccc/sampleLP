<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';

const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url)
}
const items = [
  {
    images  : 'sample.webp',
    alt     : 'sample',
    heading : 'みらいのしごと',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
    category: 'WORKS',
    link    : 'https://www.google.co.jp/',
    linkText: 'リンク1',
  },
  {
    images  : 'sample.webp',
    alt     : 'sample',
    category: 'FEATURE',
    heading : '新時代',
    text    : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images : 'sample.webp',
    alt    : 'sample',
    heading: '企業理念',
    text   : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
  },
  {
    images   : 'sample.webp',
    alt      : 'sample',
    heading  : '新サービス',
    text     : `テキストテキストテキストテキストテキスト<br>テキストテキストテキスト<br>テキストテキストテキストテキストテキスト`,
    link     : 'https://www.google.co.jp/',
    linkText : 'リンク1',
    link2    : 'https://www.google.co.jp/',
    linkText2: 'リンク2',
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
      <ul :class="$style.list">
        <li 
          v-for="item in items"
          :key="item"
          :class="$style.item" 
        >
          <figure :class="$style.image">
            <img
              :src="imageUrl(item.images)"
              :alt="item.alt"
            >
          </figure>
          <div :class="$style.heading">
            <p v-show="item.category">
              {{ item.category }}
            </p>
            <h3>
              {{ item.heading }}
            </h3>
          </div>
          <div :class="$style.description">
            <p v-html="item.text" />
            <ul :class="$style.links">
              <a 
                v-show="item.link && item.linkText"
                :href="item.link"
                target="_blank"
                :class="$style.link"
              >
                {{ item.linkText }}
              </a>
              <br v-show="item.link2 && item.linkText2">
              <a 
                v-show="item.link2 && item.linkText2"
                :href="item.link2"
                target="_blank"
                :class="$style.link"
              >
                {{ item.linkText2 }}
              </a>
            </ul>
          </div>
        </li>
      </ul>
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

        .heading {

          p {
            font-size: var(--font-size-small);
            color    : var(--silver-gray);
          }

          h3 {
            margin-top: var(--bv);
            font-size: calc(var(--font-size-large));
          }
        }

        .description {

          > p {
            font-size: var(--font-size-small);
          }
        }

        .links {
          margin-top: calc(var(--bv) * 2);

          .link {
            display: inline-block;
            color: var(--accent-color);
  
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
