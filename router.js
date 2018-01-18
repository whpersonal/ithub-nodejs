// 用户模块
// 话题模块
// 评论模块
// 10 个
// 100 个
// 1000 个模块呢
// 
// 我们针对用户单独划分一个用户处理模块
//     针对话题单独划分一个话题处理模块
//     针对评论单独评论处理模块

// router.js 只做一件事儿：
//  根据不同的请求方法+请求路径分发到具体的模块处理函数

const indexCtrl = require('./controllers/index')
const userCtrl = require('./controllers/user')
const topicCtrl = require('./controllers/topic')

// 0. 引入 Express
const express = require('express')

// 1. 创建路由容器
const router = express.Router()

// 2. 配置路由表

// 首页
router
  .get('/', indexCtrl.showIndex)

// 用户模块
router
  .get('/signin', userCtrl.showSignin)
  .post('/signin', userCtrl.handleSignin)
  .get('/signup', userCtrl.showSignup)
  .post('/signup', userCtrl.handleSignup)
  .post('/signout', userCtrl.handleSignout)

// 话题模块
router
  .get('/topic/create', topicCtrl.showCreate)
  .post('/topic/create', topicCtrl.handleCreate)
  .get('/topic/show', topicCtrl.showTopic)
  .get('/topic/edit', topicCtrl.showEdit)
  .post('/topic/edit', topicCtrl.handleEdit)
  .get('/topic/delete', topicCtrl.handleDelete)


// 3. 导出路由容器对象
// 4. 在应用程序 app.js 中使用 app.use(router) 挂载路由容器对象使之生效
module.exports = router

