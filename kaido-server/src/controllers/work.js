import Router from 'koa-router';
import WorkModel from '../models/work';

const workRouter = new Router();

workRouter.post('/save', async (ctx, next) => {
  try {
    const workId = ctx.request.body.work.workId;
    if (!workId) {
      const work = await WorkModel.create(ctx.request.body.work);
      ctx.body = work.workId;
      await next();
    } else {
      await WorkModel.update({ workId }, ctx.request.body.work);
      ctx.body = workId;
      await next();
    }
  } catch (e) {
    console.error(`[Error]: ${e.message}`);
    ctx.body = `Error: ${e.message}`;
  }
});

workRouter.get('/get', async (ctx, next) => {
  try {
    const workId = ctx.request.query.id;
    const work = await WorkModel.findOne({ workId });
    ctx.body = work;
    await next();
  } catch (e) {
    console.error(`[Error]: ${e.message}`);
    ctx.body = `Error: ${e.message}`;
  }
});

workRouter.get('/view', async (ctx) => {
  try {
    const workId = ctx.request.query.id;
    const work = await WorkModel.findOne({ workId });
    await ctx.render('work', {
      work,
    });
  } catch (e) {
    console.error(`[Error]: ${e.message}`);
    ctx.body = `Error: ${e.message}`;
  }
});

export default workRouter;

