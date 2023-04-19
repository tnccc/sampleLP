<script setup lang="ts">
import { ref } from 'vue'
type Props = {
  scrollElements: any,
}
const props = defineProps<Props>()
const isMenuOpen = ref(false)
const lists: {id: string, section: string, link: string}[] = [
  {
    id     : '1',
    section: 'ABOUT',
    link   : '#about',
  },
  {
    id     : '2',
    section: 'SOLUTION',
    link   : '#solution',
  },
  {
    id     : '3',
    section: 'WORKS',
    link   : '#works',
  },
  {
    id     : '4',
    section: 'MEDIA',
    link   : '#media',
  },
  {
    id     : '5',
    section: 'TEAM',
    link   : '#team',
  },
]
const scrollToSection = ( sectionId = '/') => {
  const targetElement = document.getElementById(sectionId)
  const hero: HTMLElement | null = document.getElementById('hero')
  if(targetElement) {
    window.scrollTo({
      top     : targetElement.offsetTop,
      behavior: 'smooth', // スムーズスクロールを有効にする
    })
  } else {
    window.scrollTo({
      top     : hero ? hero.offsetTop : 0,
      behavior: 'smooth', // スムーズスクロールを有効にする
    })
  }
}
</script>

<template>
  <header :class="$style.header">
    <p :class="$style.logo">
      <a
        href="/" 
        @click.prevent="scrollToSection()"
      >
        LOGO
      </a>
    </p>
    <button 
      :class="[$style.hamburger, isMenuOpen ? $style.open : '']"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span 
        v-for="i in 3"
        :key="i"
      />
    </button>
    <nav
      :class="[
        $style.nav, isMenuOpen ? $style.open : ''
      ]"
    >
      <div :class="$style.modal">
        <ul :class="$style.list">
          <li 
            v-for="item in lists"
            :key="item.id"
            :data-section="item.section.toLowerCase()"
            :class="[$style.item, 'item']"
          >
            <a 
              :href="item.link"
              @click.prevent="scrollToSection(item.section.toLowerCase())"
            >
              {{ item.section }}
            </a>
          </li>
        </ul>
        <button 
          v-show="isMenuOpen"
          :class="$style.close"
          @click="isMenuOpen = false
          "
        >
          × CLOSE
        </button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.item {
  
  &.current {
    font-weight: bold;
    color      : var(--accent-color);
  }
}
</style>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.header {
  --font-size-logo: calc(var(--bv) * 5);
  font-family     : var(--font-family-english);
  position        : fixed;
  top             : calc(var(--bv) * 10);
  left            : calc(var(--bv) * 5);
  z-index         : var(--z-index-max);

  @include mediaScreen('tablet') {
    --font-size-logo: calc(var(--bv) * 3.5);
  }

  .logo {
    position      : relative;
    font-size     : var(--font-size-logo);
    font-weight   : bold;
    letter-spacing: var(--letter-spacing-medium);
    z-index       : calc(var(--z-index-max) + 1);
  }

  @include mediaScreen('tablet') {
    top : calc(var(--bv) * 5);
    left: calc((var(--bv) * 4));
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
          font-size : var(--font-size-small);
          transition: color .3s;

          &:hover {
            color: var(--accent-color);
          }
        }
      }
    }

    @include mediaScreen('tablet') {
      position          : fixed;
      top               : 0;
      left              : 0;
      margin-block-start: 0;
      width             : 100vw;
      height            : 100%;
      opacity           : 0;
      visibility        : hidden;
      pointer-events    : none;
      backdrop-filter   : blur(10px);
      transition        : opacity .5s, visibility .5s;
      z-index           : calc(var(--z-index-modal) + 1px);

      &.open {
        opacity       : 1;
        visibility    : visible;
        pointer-events: auto;

        .modal {
          transform: translateX(0);
        }
      }

      .list {
        padding-top: calc((var(--bv) * 10));
      }

      .modal {
        position        : absolute;
        top             : 0;
        left            : 0;
        padding         : calc(var(--bv) * 4);
        width           : calc(100vw - calc(var(--bv) * 8));
        height          : 100%;
        background-color: var(--white);
        transition      : transform 375ms cubic-bezier(.47, 0, .745, .715);
        transform       : translateX(-100%);
        z-index         : var(--z-index-modal);
      }

      .close {
        position      : absolute;
        bottom        : calc(var(--bv) * 4);
        padding       : calc(var(--bv) * 2);
        width         : calc(100% - calc(var(--bv) * 7.5));
        color         : var(--main-color);
        border        : solid 1px var(--main-color);
        letter-spacing: var(--letter-spacing-medium);
      }
    }
  }
}
</style>