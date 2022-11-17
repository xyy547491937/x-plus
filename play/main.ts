import {createApp} from "vue"
import App from "./app.vue"
import  {XIcon}  from "@x-plus/components/icon"
import "@x-plus/theme-chalk/src/index.scss"
const app = createApp(App)
app.use(XIcon)
app.mount('#app')