<template>
  <button class="x-button" :class="styleClass">
      <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { buttonProps } from './button'
export default defineComponent({
  name: 'x-button',
  props: buttonProps,
  setup(props) {
      const styleClass = computed(() => { 
          return {           
              [`x-button--${props.type}`]: props.type,
              'is-plain': props.plain,
              'is-round': props.round,
              'is-disabled': props.disabled,
              [`x-button--${props.size}`]: props.size,
          }
      })

      return {
          styleClass
      };
  },
});
</script>
