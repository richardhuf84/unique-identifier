export const INDIVIDUAL_CHARACTER_REGEXP = /^[a-zA-Z0-9]{1}$/;
export const CHARACTER_RANGE_REGEXP = /[a-zA-Z0-9]/


const generateRandomString = (length: number) =>
  Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('')


export function uniqueIdentifier(): string {
  const stringLengths = [8, 4, 4, 4, 12];
  const result = [];

  stringLengths.forEach(length => {
    result.push(generateRandomString(length));
  })
  return result.join('-');
}
