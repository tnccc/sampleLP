<script setup lang="ts">
type Props = {
  images: any,
  alt: any,
  category: any,
  heading: any,
  text?: any,
  links?: Array<{
      text: string,
      path: string,
    }>
}
const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url).toString()
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="$style.container">
    <figure :class="$style.image">
      <img
        :src="imageUrl(images)"
        :alt="alt"
        loading="lazy"
      >
    </figure>
    <div :class="$style.heading">
      <p 
        v-show="category"
        :class="$style.category"
      >
        {{ category }}
      </p>
      <h3>{{ heading }}</h3>
    </div>
    <div :class="$style.description">
      <p v-html="text" />
      <div :class="$style.links">
        <a 
          v-for="(link, index) in links"
          v-show="link && link.text"
          :key="`link-${index}`"
          :href="link.path"
          target="_blank"
          :class="$style.link"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {

  .figure {
    aspect-ratio: 1 / 1;
  }

  .heading {

    p {
      margin-top: calc(var(--bv) * 2);
      font-size : var(--font-size-small);
      color     : var(--silver-gray);
    }

    h3 {
      margin-top: var(--bv);
      font-size : calc(var(--font-size-large));
    }
  }

  .description {

    > p {
      font-size: var(--font-size-small);
    }
  }

  .links {
    padding-top   : var(--bv);
    display       : flex;
    flex-direction: column;

    .link {
      display: inline-block;
      color: var(--accent-color);
  
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
