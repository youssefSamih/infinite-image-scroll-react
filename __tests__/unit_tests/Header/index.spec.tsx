import Header from 'ui/Header';
import { render } from 'utils/test-utils';

describe('Test header', () => {
  test('should have the right content and links', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Settings')).toBeVisible();
    expect(getByText('Home')).toBeVisible();
  });
});
