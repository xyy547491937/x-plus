import {createApp} from "vue"
import App from "./app.vue"
// import  {XIcon,XButton}  from "@x-plus/components/"
import  Xplus  from "@x-plus/components"
import "@x-plus/theme-chalk/src/index.scss"
const app = createApp(App)
app.use(Xplus)
app.mount('#app')