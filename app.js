const express = require('express')
const router = require('./router')

const app = express()

// app.js 负责启动应用程序，做一些应用程序配置
// 例如解析表单 post 请求体配置，模板引擎配置

// 挂载路由模块到应用程序中
app.use(router)

const port = 3000

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
  console.log(`  Please visit http://localhost:${port}/`)
})

module.exports = app
