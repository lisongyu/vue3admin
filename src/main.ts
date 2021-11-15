import { createApp, App } from "vue"
import rootApp from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/css/index.less"
import { globalRegister } from "./global"
import "./service/axios_demo"
import hyRequest from "./service"
const app: App = createApp(rootApp)
app.use(globalRegister)
app.use(router).use(store).mount("#app")

// hyRequest.request({
// 	url: "/home.mutidata",
// 	interceptors: {
// 		requestInterceptor: (config) => {
// 			console.log("单独请求的config")
// 			return config
// 		},
// 		responseInterceptor: (res) => {
// 			console.log("res")
// 			return res
// 		}
// 	},
// 	method: "GET"
// })

interface DataType {
	data: any
	returnCode: string
	success: boolean
}

hyRequest
	.get<DataType>({
		url: "/home.mutidata",
		method: "GET"
	})
	.then((res) => {
		console.log(res)
	})
