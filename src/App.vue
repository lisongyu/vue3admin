<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<p>{{ $store.state.name }}</p>
		<router-link to="/login">登录</router-link>
		<router-link to="/main">首页</router-link>
		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="success">成功按钮</el-button>
		<el-button type="info">信息按钮</el-button>
		<el-button type="warning">警告按钮</el-button>
		<el-button type="danger">危险按钮</el-button>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
	name: "App"
})
</script>

<style lang="less">
body {
	color: #2c3e50;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
