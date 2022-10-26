import Chart from '../../components/Chart';
import { PrefactureList, Populations } from '../const.js';
import { render } from '@testing-library/react';

describe('Chartコンポーネント', () => {
  test('表示確認', () => {
    const { getByText } = render(<Chart prefacturesList={PrefactureList} populations={Populations} />);
    expect(getByText('Created with Highcharts 10.2.1')).toBeTruthy();
  });
});
