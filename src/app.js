const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  console.log('request comming...');
  ctx.body = 'Hello World to fei 123';
});

process.on('exit',()=>{
  console.error('killed...');
})

app.listen(5000);
