let crypto;
try {
  crypto = await import('node:crypto');
} catch (err) {
  console.error(err);
}

const DEFAULT_UINT8_ARRAY_LENGTH = 256;

export const INDIVIDUAL_CHARACTER_REGEXP = /^[a-zA-Z0-9]{1}$/;
export const CHARACTER_RANGE_REGEXP = /[a-zA-Z0-9]/

export const generateUniqueIdentifier = (uInt8ArrayLength: number = DEFAULT_UINT8_ARRAY_LENGTH) =>
  Buffer.from(crypto.randomFillSync(new Uint8Array(uInt8ArrayLength)).buffer).toString('base64');

