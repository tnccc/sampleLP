<script setup lang="ts">
type Emits = {
  (onClick: string, value: string): void
}

type Props = {
  defaultStatus: boolean,
}
const emit =  defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  defaultStatus: false,
})
const onClick = e => {
  emit('modalWindowClick', e.target.value)
}
</script>

<template>
  <div 
    :class="$style.container"
  >
    <div :class="$style.contents">
      <div :class="$style.image">
        <slot name="image" />
      </div>
      <div :class="$style.heading">
        <slot name="heading" />
      </div>
      <button 
        :class="$style.modal_close"
        @click="onClick"
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
  background-color: rgba(245, 245, 248, .1);

  .contents {
    position        : fixed;
    right           : 0;
    height          : 100%;
    background-color: var(--white);
    z-index         : var(--z-index-contents);
  }
}
</style>