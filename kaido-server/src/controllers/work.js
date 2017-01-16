import Router from 'koa-router';
import WorkModel from '../models/work';
import QRCode from '../utils/qrcode';

const workRouter = new Router();

workRouter.post('/save', async (ctx, next) => {
  try {
    let workId = ctx.request.body.work.workId;
    if (!workId) {
      const work = await WorkModel.create(ctx.request.body.work);
      workId = work.workId;
    } else {
      await WorkModel.update({ workId }, ctx.request.body.work);
    }
    const path = await QRCode.save(workId);
    ctx.body = {
      workId,
      path,
    };
    await next();
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

