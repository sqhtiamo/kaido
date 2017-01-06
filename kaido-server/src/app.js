import Koa from 'koa';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import router from './router';
import views from 'koa-views';


const app = new Koa();

app.use(cors());

app.use(bodyParser());

app.use(views(`${__dirname}/views`, {
  map: {
    html: 'underscore',
  },
}));

app.use(router.routes())
   .use(router.allowedMethods());


// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000);
