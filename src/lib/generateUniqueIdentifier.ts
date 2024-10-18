let crypto;
try {
  crypto = await import('node:crypto');
} catch (err) {
  console.error(err);
}

export const generateUniqueIdentifier = () =>
  crypto.randomUUID();

