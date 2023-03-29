<script setup lang="ts">
const lists: {id: string, section: string, link: string}[] = [
  {
    id     : '1',
    section: 'ABOUT',
    link   : '/',
  },
  {
    id     : '2',
    section: 'SOLUTION',
    link   : '/',
  },
  {
    id     : '3',
    section: 'WORKS',
    link   : '/',
  },
  {
    id     : '4',
    section: 'MEDIA',
    link   : '/',
  },
  {
    id     : '5',
    section: 'TEAM',
    link   : '/',
  },
  {
    id     : '6',
    section: 'CAREER',
    link   : '/',
  },
]
</script>

<template>
  <header :class="$style.header">
    <h1 :class="$style.logo">
      <a href="/">LOGO</a>
    </h1>
    <button :class="$style.hamburger">
      <span 
        v-for="i in 3"
        :key="i"
      />
    </button>
    <nav :class="$style.nav">
      <ul :class="$style.list">
        <li 
          v-for="item in lists"
          :key="item.id"
          :class="$style.item"
        >
          <a :href="item.link">
            {{ item.section }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.header {
  position: fixed;
  top     : calc(var(--bv) * 10);
  left    : calc(var(--bv) * 5);

  .logo {
    letter-spacing: var(--letter-spacing-medium);
  }

  .hamburger {
    display: none;

    @include mediaScreen('tablet') {
      margin-block-start: calc(var(--bv) * 2);
      display           : flex;
      width             : calc(var(--bv) * 2.75);
      height            : calc(var(--bv) * 2.75);
      gap               : calc(var(--bv) / 2);
      justify-content   : center;
      flex-direction    : column;

      span {
        display         : block;
        width           : 100%;
        height          : 1px;
        background-color: var(--main-color);
        cursor          : pointer;
        transition      : all .6s ease-out;

        &:nth-of-type(2) {
          width: calc(var(--bv) * 2);
        }

        &:nth-of-type(3) {
          width: calc(var(--bv) * 1.25);
        }
      }
    }
  }

  .nav {
    margin-block-start: calc(var(--bv) * 5);

    .list {

      li + li {
        padding-top: var(--bv);
      }
      .item {

        a {
          display   : block;
          font-size : var(--font-size-min);
          transition: color .3s;

          &:hover {
            color: var(--accent-color);
          }
        }
      }
    }

    @include mediaScreen('tablet') {
      opacity   : 0;
      visibility: hidden;
    }
  }
}
</style>