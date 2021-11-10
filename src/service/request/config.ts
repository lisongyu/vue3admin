// 根据process.env.NODE_ENV ，
let BASE_URL = ""
let BASE_NAME = ""

console.log(process.env.NODE_ENV)
const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === "development") {
  BASE_URL='develop'
	console.log("我是开发")
} else if (NODE_ENV === "test") {
  BASE_URL='test'
	console.log("我是测试")
}

export { BASE_URL, BASE_NAME }
