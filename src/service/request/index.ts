import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { HYRequestInterceptors, HYRequestConfig } from "./type"
import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

class HYRequest {
	instance: AxiosInstance
	interceptors?: HYRequestInterceptors
	showLoading: boolean
	loading?: ILoadingInstance
	constructor(config: HYRequestConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors
		this.showLoading = config.showLoading ?? true
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)
		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)
		// 添加所有的实例都有的拦截器
		this.instance.interceptors.request.use(
			(config) => {
				console.log("所有的实例都有的拦截器：请求拦截成功")
				this.loading = ElLoading.service({
					lock: true,
					text: "正在请求数据",
					background: "rgba(0,0,0,0.5)"
				})
				return config
			},
			(err) => {
				console.log("所有的实例都有的拦截器：请求拦截失败")
				return err
			}
		)

		this.instance.interceptors.response.use(
			(res) => {
				console.log("所有的实例都有的拦截器：响应拦截成功")
				this.loading?.close()
				return res.data
			},
			(err) => {
				console.log("所有的实例都有的拦截器：响应拦截失败")
				this.loading?.close()
				if (err.response.status === 404) {
					console.log("404的错误")
				}
				return err
			}
		)
	}
	request<T>(config: HYRequestConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}
			if (config.showLoading === false) {
				this.showLoading = false
			}
			this.instance.request<any, T>(config).then(
				(res) => {
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res)
					}
					this.showLoading = true
					resolve(res)

					console.log(res)
				},
				(err) => {
					reject(err)
				}
			)
		})
	}
	get<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "GET" })
	}
	post<T>(config: HYRequestConfig<T>): Promise<T> {
		return this.request<T>({ ...config, method: "POST" })
	}
}
export default HYRequest
