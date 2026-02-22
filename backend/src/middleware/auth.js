import jwt from 'jsonwebtoken';

export function requireAuth(req, _res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    const error = new Error('Unauthorized');
    error.statusCode = 401;
    throw error;
  }

  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
}

export function requireRole(...roles) {
  return (req, _res, next) => {
    if (!roles.includes(req.user?.role)) {
      const error = new Error('Forbidden');
      error.statusCode = 403;
      throw error;
    }
    next();
  };
}
