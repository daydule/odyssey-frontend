import { convertValueToDisplayText } from '../utils/formatting';

describe('convertValueToDisplayText', () => {
  it('単位が左側に付加されること', () => {
    const unit = '¥';
    const unitPosition = 'left';
    const value = 1000;
    const expected = '¥1,000';

    const result = convertValueToDisplayText(unit, unitPosition, value);

    expect(result).toEqual(expected);
  });

  it('単位が右側に付加されること', () => {
    const unit = 'h';
    const unitPosition = 'right';
    const value = 10;
    const expected = '10h';

    const result = convertValueToDisplayText(unit, unitPosition, value);

    expect(result).toEqual(expected);
  });
});
