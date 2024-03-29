// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
	outputDir: "./build",
	publicPath: "./",
	devServer: {
		proxy: {
			"^/api": {
				target: "http://152.136.185.210:5000",
				pathRewrite: {
					"^/api": ""
				},
				changeOrigin: true
			}
		}
	},
	// configureWebpack: {
	//   resolve: {
	//     alias: {
	//       views: '@/views'
	//     }
	//   }
	// }
	// configureWebpack: (config) => {
	//   config.resolve.alias = {
	//     '@': path.resolve(__dirname, 'src'),
	//     views: '@/views'
	//   }
	// },
	chainWebpack: (config) => {
		config.resolve.alias
			.set("@", path.resolve(__dirname, "src"))
			.set("views", "@/views")
	}
}
