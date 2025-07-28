export function validateUserData(data: any): string | null {
  if (typeof data.username !== 'string' || data.username.trim() === '') {
    return 'Invalid username';
  }
  if (typeof data.email !== 'string' || !data.email.includes('@')) {
    return 'Invalid email';
  }
  if (typeof data.password !== 'string' || data.password.length < 6) {
    return 'Password must be at least 6 characters long';
  }
  return null;
}
