<script setup lang="ts">
import { onMounted } from 'vue';

type Emits = {
  (onClick: string, value: string): void
}

type Props = {
  item: any,
}
const emit =  defineEmits<Emits>()
const props = defineProps<Props>()
const modalCloseClick = e => {
  emit('onClick', e.target.value)
}
const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url)
}
console.log(props.item)
</script>

<template>
  <div 
    :class="$style.container"
  >
    <div :class="$style.contents">
      <figure>
        <img
          :src="imageUrl(images)"
          :alt="alt"
          loading="lazy"
        >
      </figure>
      <div :class="$style.heading">
        <p :class="$style.position">
          {{ position }}
        </p>
        <h2 :class="$style.name">
          <span>{{ name }}</span>
          <span>{{ subName }}</span>
          <p>
            {{ text }}
          </p>
        </h2>
      </div>
      <button 
        :class="$style.modal_close"
        @click="modalCloseClick"
      >
        CLOSE ×
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  position        : fixed;
  top             : 0;
  left            : 0;
  width           : 100%;
  height          : 100vh;
  background-color: rgba(245, 245, 248, .1);

  .contents {
    position        : fixed;
    right           : 0;
    height          : 100%;
    background-color: var(--white);
    z-index         : var(--z-index-contents);
  }

  .image {

    figure {
      aspect-ratio: 1 / 1;
    }
  }

  .heading {
    color: var(--main-color);

    > p {
      font-size  : var(--font-size-small);
      font-weight: 400;
    }

    h2 {
        display: flex;
        gap    : 0 calc(var(--bv) * 4);

        span {
          font-size: var(--font-size-large);
          color    : var(--main-color);

          &:not(:first-of-type) {
            font-size: var(--font-size-min);
            color    : var(--silver-gray);
          }
        }
      }
  }
}
</style>