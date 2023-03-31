<script setup lang="ts">
type Props = {
  en: string,
  ja: string
}

const props = withDefaults(defineProps<Props>(), {
  en: '',
  ja: '',
})

</script>

<template>
  <h2 :class="$style.heading">
    <span :class="$style.en">
      {{ en }}
    </span>
    <span :class="$style.ja">
      {{ ja }}
    </span>
  </h2>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.heading {
  --font-size-en: calc(var(--bv) * 4);
  --font-size-ja: calc(var(--bv) * 1.25);

  span {
    display: block;
  }

  .en {
    font-size: var(--font-size-en);
  }

  .ja {
    margin-top    : calc(var(--bv));
    font-size     : var(--font-size-ja);
    letter-spacing: var(--letter-spacing-medium);
  }
}
</style>
