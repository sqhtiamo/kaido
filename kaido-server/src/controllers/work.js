import Router from 'koa-router';
// import WorkModel from '../models/work';

const work = new Router();

work.post('/save', async (ctx, next) => {
  console.log(ctx.request);
  console.log(this);
  WorkModel.save()
  ctx.body = 'Hello World!2';
  await next;
});

export default work;

