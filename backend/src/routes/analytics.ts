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
    // Count posts
    const postCount = await prisma.post.count({
      where: { creatorId: userId },
    });

    // Count followers
    const followerCount = await prisma.subscription.count({
      where: { creatorId: userId },
    });

    // Mock income (₹50 per follower or random for testing)
    const income = followerCount * 50;

    res.json({
      postCount,
      followerCount,
      income,
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Failed to load analytics.' });
  }
});

export default router; 