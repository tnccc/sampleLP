<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const icons = [
  {
    name     : 'FacebookIcon',
    component: defineAsyncComponent(() => import('@/components/icons/FacebookIcon.vue')),
    link     : 'https://www.facebook.com/',
  },
  {
    name     : 'TwitterIcon',
    component: defineAsyncComponent(() => import('@/components/icons/TwitterIcon.vue')),
    link     : 'https://twitter.com/home',
  },
]
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.icons">
        <div
          v-for="icon in icons"
          :key="icon.name"
        >
          <a :href="icon.link">
            <component :is="icon.component" />
          </a>
        </div>
      </div>
      <div :class="$style.logo">
        <small>&copy; Logo Communications Corporation</small>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.footer {
  padding         : calc(var(--bv) * 4);
  width           : 100%;
  background-color: var(--light-white);

  .container {
    display        : flex;
    align-items    : center;
    justify-content: space-between;

    @include mediaScreen('tablet') {
      flex-direction: column;
      gap           : calc(var(--bv) * 3) 0;
    }
  }

  .icons {
    display: flex;
    gap    : 0 calc(var(--bv) * 3);

    a {
      transition: opacity var(--transition-time);

      &:hover {
        opacity: .5;
      }
    }

    svg {
      width         : calc(var(--bv) * 3);
      height        : auto;
      vertical-align: middle;
    }
  }

  .logo {
    font-weight: 500;
    color      : var(--main-color);
  }
}
</style>