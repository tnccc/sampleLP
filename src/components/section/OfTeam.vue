<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';

const team = [
  {
    position: '代表',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team01.webp',
    alt     : 'team01',
  },
  {
    position: 'デザイナー',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team02.webp',
    alt     : 'team02',
  },
  {
    position: 'アドバイザー',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team03.webp',
    alt     : 'team03',
  },
  {
    position: 'エンジニア',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team01.webp',
    alt     : 'team01',
  },
  {
    position: 'エンジニア',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team02.webp',
    alt     : 'team02',
  },
  {
    position: 'エンジニア',
    name    : '田中太郎',
    subName : 'Tanaka Tarou',
    image   : 'team03.webp',
    alt     : 'team03',
  },
]

const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url)
}
</script>

<template>
  <SectionContainer :class="$style.container">
    <SectionHeading 
      :en="'TEAM'"
      :ja="'チーム'"
    />
    <div :class="$style.contents">
      <div :class="$style.team">
        <ul :class="$style.list">
          <li 
            v-for="(item, index) in team"
            :key="index"
            :class="$style.item"
          >
            <figure :class="$style.image">
              <img 
                :src="imageUrl(item.image)"
                :alt="item.alt"
              >
            </figure>
            <div :class="$style.description">
              <p>{{ item.position }}</p>
              <h3>{{ item.name }}</h3>
              <p>{{ item.subName }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  --list-margin: calc(var(--bv) * 1);
  
  .team {
    margin-top: calc(var(--bv) * 10);
    .list {
      display: flex;
      gap    : calc(var(--bv) * 3) var(--list-margin);
      flex-wrap: wrap;
  
      &::before {
        content: "";
        display: block;
        order  : 1;
        width  : calc((100% / 4) - var(--list-margin));
      }
  
      &::after {
        content: "";
        display: block;
        width  : calc((100% / 4) - var(--list-margin));
      }

      @include mediaScreen('tablet') {

      }
  
      .item {
        flex : 1 0 calc((100% / 4) - var(--list-margin));
        width: calc((100% / 4) - var(--list-margin));

        @include mediaScreen('tablet') {
          flex : 1 0 calc((100% / 2) - var(--list-margin));
          width: calc((100% / 2) - var(--list-margin));
        }

        .description {
          margin-top: calc(var(--bv) * 1.5);
          line-height: var(--line-height-tight);

          h3 {
            margin-top: calc(var(--bv) * 1.5);
          }

          p {
            font-size: calc(var(--bv) * 1.5);
            color    : var(--main-color);

            &:last-of-type {
              margin-top: calc(var(--bv) * 1.25);
              font-size : var(--font-size-min);
              color     : var(--silver-gray);
            }
          }
        }
      }
    }
  }
}
</style>