import Router from 'koa-router';

const work = new Router();

work.post('/save', async (ctx, next) => {
  console.log(ctx.request);
  console.log(this)
  ctx.body = 'Hello World!2';
  await next;
});

export default work;

