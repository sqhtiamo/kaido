import Koa from 'koa';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import router from './router';

const app = new Koa();

app.use(cors());

app.use(bodyParser());

app.use(router.routes())
   .use(router.allowedMethods());

// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000);
