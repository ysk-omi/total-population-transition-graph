import IndexPage from '../pages/index';
import { PrefactureList } from './const.js';
import { render } from '@testing-library/react';

describe('TOPページ', () => {
  test('表示確認', () => {
    const { getByText } = render(<IndexPage prefacturesList={PrefactureList} />);
    expect(getByText('人口推移グラフ')).toBeTruthy();
  });
});
