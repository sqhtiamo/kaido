import Router from 'koa-router';
import work from './controllers/work';

const router = new Router();

router.post('/', async (ctx, next) => {
  console.log(1)
  console.log(ctx)
  ctx.body = 'Hello World!';
  await next
  // await ctx.render('index');
});

router.use('/work', work.routes());
export default router;
