import { createRouter, createWebHashHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"

// import localCache
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/main"
	},
	{
		path: "/main",
		component: () => import("../views/main/main.vue")
	},
	{
		path: "/login",
		component: () => import("../views/login/login.vue")
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFound",
		component: () => import("@/views/not-found/not-found.vue")
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

router.beforeEach((to) => {
	if (to.path !== "/login") {
		// 判断登陆
		const token = localCache.getCache("token")
		if (!token) {
			return "/login"
		}
	}
})

export default router
