import {
  INDIVIDUAL_CHARACTER_REGEXP,
  CHARACTER_RANGE_REGEXP,
  uniqueIdentifier
} from './unique-identifier';

describe('uniqueIdentifier', () => {
  it('should be comprised of 5 random strings, separated by a hyphen', () => {
    const ID = uniqueIdentifier();
    const parts = ID.split('-');
    expect(parts).toHaveLength(5);
    expect(parts[0]).toHaveLength(8)
    expect(parts[1]).toHaveLength(4)
    expect(parts[2]).toHaveLength(4)
    expect(parts[3]).toHaveLength(4)
    expect(parts[4]).toHaveLength(12)
  });

  test.each`
  index | expected | extra
  ${0} | ${8}  | ${'first'}
  ${1} | ${4}  | ${'second'}
  ${2} | ${4}  | ${'third'}
  ${3} | ${4}  | ${'fourth'}
  ${4} | ${12} | ${'fifth'}
  `
    (`the $extra segment should be $expected characters in length`, ({ index, expected }) => {
      const ID = uniqueIdentifier();
      const parts = ID.split('-');
      expect(parts[index]).toHaveLength(expected)
    });

  it('each segment should be comprised of lowercase letters, uppercase letters or numbers 0-9', () => {
    const ID = uniqueIdentifier();
    const parts = ID.split('-');
    parts.forEach(part => {
      expect(CHARACTER_RANGE_REGEXP.test(part)).toBeTruthy();
    })
  })
});


describe('INDIVIDUAL_CHARACTER_REGEXP', () => {
  test.each`
  a | expected
  ${'a'} | ${true}
  ${'A'} | ${true}
  ${'0'} | ${true}
  ${'9'} | ${true}
  `
    (`$a is an accepted character`, ({ a, expected }) => {
      expect(INDIVIDUAL_CHARACTER_REGEXP.test(a)).toBe(expected);
    });

  test.each`
  a | expected
  ${'*'} | ${false}
  ${'?'} | ${false}
  ${'~'} | ${false}
  ${'😀'} | ${false}
  `
    (`$a is not an accepted character`, ({ a, expected }) => {
      expect(INDIVIDUAL_CHARACTER_REGEXP.test(a)).toBe(expected);
    });
});
describe('CHARACTER_RANGE_REGEXP', () => {
  test.each`
  a | expected
  ${'aA0'} | ${true}
  ${'d93kg0s'} | ${true}
  `
    (`$a is an accepted character`, ({ a, expected }) => {
      expect(CHARACTER_RANGE_REGEXP.test(a)).toBe(expected);
    });

  test.each`
  a | expected
  ${'ag*'} | ${false}
  ${'9876@ffg'} | ${false}
  `
    (`$a is not an accepted character`, ({ a, expected }) => {
      expect(INDIVIDUAL_CHARACTER_REGEXP.test(a)).toBe(expected);
    });
});