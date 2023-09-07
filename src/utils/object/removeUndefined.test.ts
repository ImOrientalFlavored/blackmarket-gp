
import removeUndefined from './removeUndefined.utils'; // Assuming function is in separate file. Adjust accordingly.

describe('removeUndefined', () => {
  it('removes undefined values from the object', () => {
    const obj = {
      key1: 'value1',
      key2: undefined,
      key3: {
        subKey1: 'subValue1',
        subKey2: undefined
      },
      key4: [1, 2, undefined]
    };

    const result = removeUndefined(obj);

    expect(result).toEqual({
      key1: 'value1',
      key3: {
        subKey1: 'subValue1'
      },
      key4: [1, 2, undefined]
    });
  });

  it('leaves the object unmodified when there are no undefined values', () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
      key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2'
      }
    };

    const result = removeUndefined(obj);

    expect(result).toEqual(obj);
  });

  it('returns an empty object when all values are undefined', () => {
    const obj = {
      key1: undefined,
      key2: undefined
    };

    const result = removeUndefined(obj);

    expect(result).toEqual({});
  });
});
