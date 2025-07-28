export function validateRequest(req: Request): { isValid: boolean; errorMessage?: string } {
  if (req.method !== 'POST') {
    return { isValid: false, errorMessage: 'Invalid request method' };
  }

  const contentType = req.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return { isValid: false, errorMessage: 'Invalid content type' };
  }

  return { isValid: true };
}