import type { ExtractPropTypes } from "vue";

// as const 会让对象每个属性变成只读（readonly）
export const iconProps = {
    size:{
        type:Number
    },
    color: {
        type:String
    }
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>