import Picture from 'ui/Picture';
import { render } from 'utils/test-utils';

describe('test picture', () => {
  test('should picture be visible', () => {
    const { getByTestId } = render(<Picture height={100} />);
    expect(getByTestId('picture')).toBeVisible();
  });
});
