<template>
  <button class="k-button" :class="styleClass">
      <slot />
  </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './button'
export default defineComponent({
  name: 'x-button',
  props: buttonProps,
  setup(props) {
      const styleClass = computed(() => { 
          return {
              [`k-button--${props.type}`]: props.type
          }
      })

      return {
          styleClass
      };
  },
});
</script>
