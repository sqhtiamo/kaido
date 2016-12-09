const Koa = require('koa');
const app = new Koa();
const cors = require('kcors');


app.use(cors());
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);