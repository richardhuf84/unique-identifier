import {
  generateUniqueIdentifier
} from './generateUniqueIdentifier';
import { validate as uuidValidate } from 'uuid';


describe('generateUniqueIdentifier', () => {
  it('should return a valid UUID v4', () => {
    expect(uuidValidate(generateUniqueIdentifier())).toBeTruthy();
  });
});