import express from 'express';
import prisma from '../utils/prisma';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

// Get all posts by a creator
router.get('/:creatorId', async (req, res) => {
  const { creatorId } = req.params;

  try {
    const posts = await prisma.post.findMany({
      where: { creatorId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Creator creates a post
router.post('/', requireAuth, async (req, res) => {
  try {
    const { userId } = req.auth!;
    const { content, mediaUrl } = req.body;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const post = await prisma.post.create({
      data: { content, mediaUrl, creatorId: userId }
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router; 