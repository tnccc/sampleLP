<template>
  <Section :class="$style.container">
    <slot />
  </Section>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  margin     : 0 auto 0 calc(var(--bv) * 20);
  padding: calc(var(--bv) * 18) calc(var(--bv) * 12);
  max-width  : var(--desktop-width);

  @include mediaScreen('tablet') {
    margin: 0 auto;
    padding: calc(var(--bv) * 8) calc(var(--bv) * 4);
  }
}
</style>
