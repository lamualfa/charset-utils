const { getIndexVal, randomIntInclusive, shuffleCharset } = require('./index');

describe('getIndexVal', () => {
  it('valid order result', () => {
    let i = 0;

    while ((i += 1) <= 1000)
      expect(getIndexVal(i, '0123456789')).toEqual(i.toString());
  });
});

describe('randomIntInclusive', () => {
  const min = 0;
  const max = 100;
  const totalTestProb = 1000;

  it(`has inclusive min in ${totalTestProb} calls`, () => {
    let testCount = totalTestProb;

    while ((testCount -= 1)) {
      const random = randomIntInclusive(min, max);

      if (random === min) break;
      else if (totalTestProb === 1) expect(random).toEqual(min);
    }
  });

  it(`has inclusive max in ${totalTestProb} calls`, () => {
    let testCount = totalTestProb;

    while ((testCount -= 1)) {
      const random = randomIntInclusive(min, max);

      if (random === max) break;
      else if (totalTestProb === 1) expect(random).toEqual(max);
    }
  });
});

describe('shuffleCharset', () => {
  const charset = 'abcdefghijklmnopqrstuvwxyz';

  it('return shuffled string', () => {
    let numberTest = 1000;

    while ((numberTest -= 1))
      expect(shuffleCharset(charset)).not.toEqual(charset);
  });
});
