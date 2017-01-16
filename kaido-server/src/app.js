import Koa from 'koa';
import cors from 'kcors';
import bodyParser from 'koa-bodyparser';
import views from 'koa-views';
import router from './router';


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

app.listen(3000);
