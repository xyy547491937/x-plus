import components from './src/index'
export * from './src/index'
import { App } from 'vue'
console.log(components);

export default {
    install: (app: App) => {
        components.forEach(c => app.use(c));
    }
}

