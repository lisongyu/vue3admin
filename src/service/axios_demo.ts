console.log("-----")

import axios from "axios"

// axios 的实力对象
axios.defaults.baseURL = "http:www.baidu.com"
axios.defaults.timeout = 10000

axios.interceptors.request.use(
	(config) => {
		return config
	},
	(err) => {
		console.log("请求发送失败")
		return err
	}
)
axios.interceptors.response.use(
	(res) => {
		return res
	},
	(err) => {
		console.log("请求发送失败")
		return err
	}
)
