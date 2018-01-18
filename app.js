const express = require('express')
const router = require('./router')

const app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// app.js 负责启动应用程序，做一些应用程序配置
// 例如解析表单 post 请求体配置，模板引擎配置

// 配置使用 art-template 模板引擎
// 注意：一定要在加载路由之前配置
app.engine('html', require('express-art-template'))

// 挂载路由模块到应用程序中
app.use(router)

const port = 3000

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
  console.log(`  Please visit http://localhost:${port}/`)
})

module.exports = app
