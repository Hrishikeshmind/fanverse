import express from 'express';
import prisma from '../utils/prisma';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

// Fan subscribes to creator
router.post('/:creatorId', requireAuth, async (req, res) => {
  try {
    const { userId } = req.auth!;
    const { creatorId } = req.params;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    if (userId === creatorId) {
      res.status(400).json({ error: 'Cannot subscribe to yourself' });
      return;
    }

    const subscription = await prisma.subscription.create({
      data: {
        fanId: userId,
        creatorId
      }
    });

    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// Fan's subscriptions
router.get('/', requireAuth, async (req, res) => {
  try {
    const { userId } = req.auth!;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const subscriptions = await prisma.subscription.findMany({
      where: { fanId: userId },
      include: { creator: true }
    });

    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
});

export default router; 