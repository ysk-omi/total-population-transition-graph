import Checkbox from '../../components/Checkbox';
import { Prefacture } from '../const.js';
import { render } from '@testing-library/react';

describe('CheckBoxコンポーネント', () => {
  test('表示確認', () => {
    const { getByText } = render(<Checkbox prefacture={Prefacture} checked={false} onChange={() => {}} />);
    expect(getByText('北海道')).toBeTruthy();
  });
});
