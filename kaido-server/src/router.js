import Router from 'koa-router';
import work from './controllers/work';

const router = new Router();

router.use('/work', work.routes());

export default router;
