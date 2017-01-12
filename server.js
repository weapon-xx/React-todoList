const koa = require('koa')
const app = koa()

app.use(function *(){
  this.body = 'hello world'
})

app.listen(3000,()=>{
  console.log(`God bless love ...`);
  console.log(`Web server is running on 3000`);
})
