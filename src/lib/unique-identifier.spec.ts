import { uniqueIdentifier } from './unique-identifier';

describe('uniqueIdentifier', () => {
  it('should work', () => {
    expect(uniqueIdentifier()).toEqual('unique-identifier');
  });
});
