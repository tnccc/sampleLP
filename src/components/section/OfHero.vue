<script setup lang="ts">

</script>

<template>
  <section class="element">
    <div :class="$style.container">
      <figure :class="$style.image">
        <img
          src="@/assets/images/bg.jpg"
          alt=""
        >
      </figure>
      <div :class="$style.description">
        <h1 :class="$style.logo">
          <span>距離を越える。</span>
          <span>常識を越える。</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  --font-size-hero: calc(var(--bv) * 6.5);
  width: 100%;
  height: 100dvh;

  @include mediaScreen('tablet') {
    --font-size-hero: calc(var(--bv) * 4);
  }
  
  .image {
    position: relative;
    width   : 100%;
    height  : 100%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    position        : absolute;
    padding         : calc(var(--bv) * 4);
    right           : calc(var(--bv) * 4);
    bottom          : calc(var(--bv) * 4);
    background-color: var(--transparent-color);

    span {
      display    : block;
      font-size: var(--font-size-hero);
      font-weight: bold;
    }

    @include mediaScreen('tablet') {
      padding: calc(var(--bv) * 2.5);
    }
  }
}
</style>
