const esbuild = require("esbuild")
const { buildConfig } = require("./build")

esbuild
    .serve({ port: 9000, host: "localhost", servedir: "./dist" }, buildConfig)
    .then(res => console.log(res))
    .catch(err => console.error(err))