<script setup lang="ts">
type Emits = {
  (onClick: string): void
}

type Props = {
  item: any,
}
const emit =  defineEmits<Emits>()
const props = defineProps<Props>()
const modalCloseClick = () => {
  emit('onClick')
}
const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url).toString()
}
</script>

<template>
  <div 
    :class="$style.container"
  >
    <div :class="$style.contents">
      <figure>
        <img
          :src="imageUrl(item.image)"
          :alt="item.alt"
          loading="lazy"
        >
      </figure>
      <div :class="$style.heading">
        <p :class="$style.position">
          {{ item.position }}
        </p>
        <h2 :class="$style.name">
          <span>{{ item.name }}</span>
          <span>{{ item.subName }}</span>
        </h2>
        <p
          :class="$style.text"
          v-html="item.text"
        />
      </div>
      <button 
        :class="$style.button"
        @click="modalCloseClick"
      >
        <span>CLOSE ×</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  position        : fixed;
  top             : 0;
  left            : 0;
  width           : 100%;
  height          : 100vh;
  background-color: rgba(245, 245, 248, .75);

  @include mediaScreen('tablet') {
    height: 100%;
  }

  .contents {
    position        : fixed;
    right           : 0;
    padding         : calc(var(--bv) * 8) calc(var(--bv) * 4);
    display         : flex;
    flex-direction  : column;
    gap             : calc(var(--bv) * 5) 0;
    flex            : 1 0 calc(100% / 4);
    width           : calc(100% / 4);
    height          : 100%;
    background-color: var(--white);
    z-index         : var(--z-index-contents);

    @media (width < 1120px) {
      flex : 1 0 292px;
      width: 292px;
    }

    @include mediaScreen('tablet') {
      flex: 1 0 calc((100%) / 1.5);
      width: calc((100%) / 1.5);
    }

    @include mediaScreen('mobile') {
      flex: 1 0 calc((100%) / 1.25);
      width: calc((100%) / 1.25);
    }
  }

  .image {

    figure {
      aspect-ratio: 1 / 1;
    }
  }

  .heading {
    color: var(--main-color);

    > p {
      margin-top: calc(var(--bv) * 2);
      font-size  : var(--font-size-small);
      font-weight: 400;
    }

    h2 {
        display    : flex;
        align-items: center;
        gap        : 0 calc(var(--bv) * 4);

        span {
          font-size: calc(var(--bv) * 3.5);
          color    : var(--main-color);

          &:not(:first-of-type) {
            font-size: var(--font-size-min);
            color    : var(--silver-gray);
          }
        }
      }
  }

  .text {
    line-height: 2;
  }

  .button {
    margin-top: auto;
    flex      : 1 0 auto;
    max-height: calc(var(--bv) * 5.5);
    color     : var(--accent-color);
    border    : 1px solid var(--accent-color);
    transition: color .3s, background-color .3s,;

    > span {
      font-size: var(--font-size-small);
    }

    &:hover {
      color           : var(--white);
      background-color: var(--accent-color);
    }
  }
}
</style>