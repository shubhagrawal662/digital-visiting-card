export function notFound(req, res) {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
}

export function errorHandler(err, _req, res, _next) {
  console.error(err);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Something went wrong',
    code: err.code || 'INTERNAL_ERROR'
  });
}
