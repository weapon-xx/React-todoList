const koa = require('koa')
const app = koa()
const router = require('koa-router')()

router.get('/',function *(next){
  this.body = 'hello world'
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000,()=>{
  console.log(`God bless love ...`)
  console.log(`Web server is running on 3000`)
})
