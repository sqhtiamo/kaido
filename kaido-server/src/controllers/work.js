import Router from 'koa-router';
import WorkModel from '../models/work';

const work = new Router();

work.post('/save', async (ctx, next) => {
  try {
    console.log(ctx.request.body.viewport);
    await WorkModel.create(ctx.request.body.viewport);
    ctx.body = ctx.request.body;
    await next();
  } catch (e) {
    console.error(`[Error]: ${e.message}`);
    ctx.body = `Error: ${e.message}`;
  }
});

export default work;

