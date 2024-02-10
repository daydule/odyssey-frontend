/**
 *  数値を表示用のテキストに変換する
 *
 * @param {string} unit - 単位
 * @param {'left' | 'right'} unitPosition - 単位の位置
 * @param {number} value - 表示する値
 * @returns - 表示用のテキスト
 */
const convertValueToDisplayText = (unit: string, unitPosition: 'left' | 'right', value: number) => {
  const formattedValue = value.toLocaleString();
  return unitPosition === 'left' ? `${unit}${formattedValue}` : `${formattedValue}${unit}`;
};

export { convertValueToDisplayText };
