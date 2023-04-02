<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';

const lists = [
  {
    num  : '01',
    title: 'ビジョン策定',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
  },
  {
    num  : '02',
    title: '事業開発',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
    plot3: 'テキストテキストテキスト',
    plot4: 'テキストテキストテキスト',
  },
  {
    num  : '03',
    title: '事業改善',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
    plot3: 'テキストテキストテキスト',
  },
  {
    num  : '04',
    title: 'コミュニケーション設計',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
  },
  {
    num  : '05',
    title: '組織設計',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
  },
  {
    num  : '06',
    title: '人材育成',
    text : 'テキストテキストテキストテキストテキストテキストテキストテキスト',
    plot1: 'テキストテキストテキスト',
    plot2: 'テキストテキストテキスト',
  },
]
</script>

<template>
  <section :class="$style.solution">
    <SectionContainer :class="$style.container">
      <SectionHeading 
        :en="'SOLUTION'"
        :ja="'ソリューション'"
      />
      <article :class="$style.contents">
        <ul :class="$style.list">
          <li 
            v-for="(item, index) in lists"
            :key="index"
            :class="$style.item"
          >
            <div :class="$style.box">
              <h3>
                <span :class="$style.num">
                  {{ item.num }}
                </span>
                <span :class="$style.title">
                  {{ item.title }}
                </span>
              </h3>
              <div :class="$style.description">
                <p
                  :class="$style.text"
                  v-html="item.text"
                />
                <div :class="$style.plot">
                  <p>{{ item.plot1 }}</p>
                  <p>{{ item.plot2 }}</p>
                  <p v-if="item.plot3">
                    {{ item.plot3 }}
                  </p>
                  <p v-if="item.plot4">
                    {{ item.plot4 }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </SectionContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;
.solution {
  --font-size-num  : calc(var(--bv) * 1.5);
  --font-size-title: calc(var(--bv) * 2.5);
  --item    : 3;
  margin-top       : calc(var(--bv) * 18);
  background-color : var(--light-white);

  .contents {
    margin-top: calc(var(--bv) * 10);

    .list {
      display  : flex;
      flex-wrap: wrap;
  
      .item {
        margin          : 0 2px 2px 0;
        padding         : calc(var(--bv) * 4);
        width           : calc((100% / var(--item)) - 2.1px);
        background-color: var(--white);
        line-height     : var(--line-height-normal);
        
        @include mediaScreen('desktop') {
          --item: 2;
        }

        @include mediaScreen('tablet') {
          --item: 1;
        }
        
        .box {

          h3 {
            display    : flex;
            align-items: baseline;
            gap: 0 calc(var(--bv) * 2);

            .num {
              position   : relative;
              top        : -2px;
              font-size  : var(--font-size-num);
              font-weight: 500;
              color      : var(--silver-gray);
            }
  
            .title {
              font-size  : var(--font-size-title);
              font-weight: 500;
              letter-spacing: var(--letter-spacing-medium);
            }
          }

          .description {
            padding: calc(var(--bv) * 2) calc(var(--bv) * 4.3) 0;

            .text {
              font-size: calc(var(--bv) * 1.8);
            }

            .plot {
              padding-top: calc(var(--bv) * 2);

              p + p {
                padding-top: var(--bv);
              }
              
              > p {
                display    : flex;
                align-items: center;
                font-size  : calc(var(--bv) * 1.5);
                gap        : 0 calc(var(--bv) * 1.5);

                &::before {
                  content         : "";
                  display         : block;
                  width           : var(--bv);
                  height          : 1px;
                  background-color: var(--main-color);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
