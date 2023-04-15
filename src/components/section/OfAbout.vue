<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SectionHeading from '@/components/SectionHeading.vue';

</script>

<template>
  <SectionContainer :class="[$style.container, 'element']">
    <SectionHeading 
      :en="'ABOUT'"
      :ja="'アバウト'"
    />
    <div :class="$style.contents">
      <p>テキストテキストテキスト</p>
      <p>
        テキストテキストテキスト<br>
        テキストテキストテキスト
        テキストテキストテキスト
      </p>
      <p>
        テキストテキストテキスト<br>
        テキストテキストテキスト
        テキストテキストテキスト
      </p>
      <p>
        テキストテキストテキスト<br>
        テキストテキストテキスト
        テキストテキストテキスト
      </p>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {

  .contents {
    margin-top : calc((var(--bv) * 12));
    width      : 50%;
    line-height: 2.5;

    p + p {
      margin-top: calc(var(--bv) * 4);
    }

    @include mediaScreen('tablet') {
      margin-top: calc((var(--bv) * 6));
      width     : 100%;

      p + p {
        margin-top: calc(var(--bv) * 1.5);
      }
    }
  }
}
</style>
