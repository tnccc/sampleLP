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
  </header>
</template>

<style lang="scss" module></style>
