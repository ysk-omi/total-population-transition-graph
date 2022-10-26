import Header from '../../components/Header';
import { render } from '@testing-library/react';

describe('Heaaderコンポーネント', () => {
  test('表示確認', () => {
    const { getByText } = render(<Header />);
    expect(getByText('人口推移グラフ')).toBeTruthy();
  });
});
