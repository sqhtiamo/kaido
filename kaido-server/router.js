import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  console.log(1)
  await ctx.render('index');
});

export default router;
