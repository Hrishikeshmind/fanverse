import { Router } from 'express';
import postsRouter from './posts';
import subscriptionsRouter from './subscriptions';
import feedRouter from './feed';
import analyticsRouter from './analytics';

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

router.use('/posts', postsRouter);
router.use('/subscriptions', subscriptionsRouter);
router.use('/feed', feedRouter);
router.use('/analytics', analyticsRouter);

export default router; 