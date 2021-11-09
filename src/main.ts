import { createApp, App } from "vue"
import rootApp from "./App.vue"
import router from "./router"
import store from "./store"
import { globalRegister } from "./global"
import "./service/axios_demo"
const app: App = createApp(rootApp)
app.use(globalRegister)
app.use(router).use(store).mount("#app")
console.log("哈哈")
