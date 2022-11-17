<template>
    <i class ="x-icon" :style="style">
        <slot></slot>
    </i>
</template>

<script lang="ts">
import {iconProps} from './icon'
import {computed,defineComponent} from "vue"
export default defineComponent({
    name:"XIcon",
    props:iconProps,
    setup(props) {
        const style =computed(() => {
            if(!props.size && !props.color) {
                return {}
            }
            return {
                ...(props.size?{'font-size':props.size}:""),
                ...(props.color?{'color':props.color}:""),
            }
        })

        return {style}
    }

})
</script>