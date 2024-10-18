import {
  generateUniqueIdentifier
} from './generateUniqueIdentifier';
import { validate as uuidValidate } from 'uuid';

/** 
 * Generate a RFC4122 compliant UUID v4
 * returns @string unique identifier
 */
describe('generateUniqueIdentifier', () => {
  it('should return a valid UUID v4', () => {
    expect(uuidValidate(generateUniqueIdentifier())).toBeTruthy();
  });
});