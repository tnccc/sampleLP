<script setup lang="ts">
import { ref } from 'vue'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import { computed } from 'vue';


//TODO
//modalWindowを表示させるために、
//カードの要素がクリックすされると
//モーダル内に必要なitem(配列)の情報が渡るようにする

//TODO
//配列のデータをわざわざJsonにする必要はない
//moduleにして別のディレクトリで管理
//fetchで取得する
const isModalOpen = ref(false)
const teams = [
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
const modalItem = ref({})
const test = computed(() => {
  return modalItem.value
})
</script>

<template>
  <SectionContainer :class="$style.container">
    <SectionHeading 
      :en="'TEAM'"
      :ja="'チーム'"
    />
    <div :class="$style.contents">
      <button @click="isModalOpen = true">
        ModalOpen
      </button>
      <div :class="$style.team">
        <ul :class="$style.list">
          <li 
            v-for="(item, index) in teams"
            :key="index"
            :class="$style.item"
            @click="modalItem = item"
          >
            <a :class="$style.box">
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
              {{ test }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Teleport to="body">
      <transition>
        <div 
          v-show="isModalOpen"
          :class="$style.modal"
        >
          <ModalWindow :item="modalItem" />
        </div>
      </transition>
    </Teleport>
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
  
      .item {
        flex : 1 0 calc((100% / 4) - var(--list-margin));
        width: calc((100% / 4) - var(--list-margin));

        &:hover {

          .description {
            
            > * {
              color     : var(--accent-color);
              transition: color .3s;
            }
            
            p {

              &:last-of-type {
                color     : var(--accent-color);
                transition: color .3s;
              }
            }
          }
        }

        @include mediaScreen('tablet') {
          flex : 1 0 calc((100% / 2) - var(--list-margin));
          width: calc((100% / 2) - var(--list-margin));
        }

        .box {
          cursor: pointer;
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