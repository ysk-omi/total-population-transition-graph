import Layout from '../../components/Layout';
import { render } from '@testing-library/react';

describe('Layoutコンポーネント', () => {
  test('表示確認', () => {
    const { getByText } = render(<Layout>テスト表示</Layout>);
    expect(getByText('テスト表示')).toBeTruthy();
  });
});
