// 根据process.env.NODE_ENV ，
let BASE_URL = ""
const TIME_OUT = 10000

console.log(process.env.NODE_ENV)
const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === "development") {
	BASE_URL = "http://123.207.32.32:8000/"

	console.log("我是开发")
} else if (NODE_ENV === "test") {
	BASE_URL = "http://coderwhy.org/test"

	console.log("我是测试")
} else {
	BASE_URL = "http://coderwhy.org/prod"
}

export { BASE_URL, TIME_OUT }
