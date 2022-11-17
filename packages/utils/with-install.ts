import type{ App,Plugin} from "vue"

export type SFCWithInstall<T> = T & Plugin;

/**
 *  定义一个withInstall 方法处理以下组件问题
 *  @params comp
 */

export const withInstall = <T>(comp:T)=> {
    /**
    * 直接写comp.install = function(){} 的话会报错，因为comp下没有install方法
    * 所以从vue中引入Plugin类型，断言comp的类型为T&Plugin
    */
    (comp as SFCWithInstall<T>).install =function(app:App) {
        app.component((comp as any).name, comp as any)
    }
    return (comp as SFCWithInstall<T>)
}