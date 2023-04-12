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
  return new URL(`/src/assets/images/${image}`, import.meta.url)
}
console.log(props.item.images)
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
          <p>
            {{ item.text }}
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
  background-color: rgba(245, 245, 248, .75);

  .contents {
    position        : fixed;
    right           : 0;
    flex            : 1 0 calc(100% / 4);
    width           : calc(100% / 4);
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