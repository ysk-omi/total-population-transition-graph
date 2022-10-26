import Footer from '../../components/Footer';
import { render } from '@testing-library/react';

describe('Footerコンポーネント', () => {
  test('表示確認', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('ysk-omi')).toBeTruthy();
  });
});
