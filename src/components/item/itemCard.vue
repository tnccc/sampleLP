<script setup lang="ts">
type Props = {
  items: { 
    images: any,
    alt: any,
    heading: any,
    text: any,
    link: any,
    linkText: any,
  }
}

const imageUrl = (image: any) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url)
}

const props = withDefaults(defineProps<Props>(), {
})

</script>

<template>
  <div 
    v-for="(item, index) in items"
    :key="index"
    :class="$style.container"
  >
    <figure :class="$style.image">
      <img
        :src="imageUrl(item.images)"
        :alt="item.alt"
      >
    </figure>
    <div :class="$style.heading">
      <p 
        v-show="item.category"
        :class="$style.category"
      >
        {{ item.category }}
      </p>
      <h3>{{ item.heading }}</h3>
    </div>
    <div :class="$style.description">
      <p v-html="item.text" />
      <a 
        v-show="item.link && item.linkText"
        :href="item.link"
        target="_blank"
      >
        {{ item.linkText }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {

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
</style>
