import { getAuth } from '@clerk/express';

const requireUser = (req, res, next) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Authentication error' });
  }
};

export default requireUser;