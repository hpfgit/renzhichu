const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/css/variable.scss";`
            }
        }
    },
    chainWebpack: config =>
        config.resolve.alias
            .set('@', resolve('src'))
}
