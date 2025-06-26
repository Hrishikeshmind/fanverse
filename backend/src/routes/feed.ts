import express from 'express';
import prisma from '../utils/prisma';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.get('/', requireAuth, async (req, res) => {
  const { userId } = req.auth;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    // Step 1: Get creators this user is subscribed to
    const subscriptions = await prisma.subscription.findMany({
      where: { fanId: userId },
      select: { creatorId: true },
    });

    const creatorIds = subscriptions.map((sub) => sub.creatorId);

    // Step 2: Get posts from those creators
    const posts = await prisma.post.findMany({
      where: { creatorId: { in: creatorIds } },
      orderBy: { createdAt: 'desc' },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
      },
    });

    res.json(posts);
  } catch (error) {
    console.error('Feed error:', error);
    res.status(500).json({ message: 'Failed to load feed.' });
  }
});

export default router; 