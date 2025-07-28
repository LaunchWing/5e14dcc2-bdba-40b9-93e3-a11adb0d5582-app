export function validateRequest(req: Request): string | null {
  const contentType = req.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) {
    return 'Invalid content type';
  }
  return null;
}
