import { default as XButton } from './button'
import { default as XIcon } from './icon'
// import { default as Link } from './link'
// import { default as Upload } from './upload'
// import { default as Shake } from './shake'
// import { default as Input } from './input'
import type { Plugin } from 'vue'
export {
    XButton, XIcon, //Link, Upload, Shake, Input
}
export default [XButton, XIcon, /*Link, Upload, Shake, Input*/] as Plugin[]