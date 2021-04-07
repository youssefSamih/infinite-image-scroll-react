import Card from 'ui/Card';
import { render } from 'utils/test-utils';
import userMock from '../../../__mocks__/userMock.json';

describe('Test Card', () => {
  test('should have the right content and card be visible', () => {
    const { getByText } = render(
      <Card
        {...({
          name: { ...userMock.name },
          id: '1',
          picture: userMock.picture,
          login: userMock.login,
          email: userMock.email,
          phone: userMock.phone,
          location: userMock.location,
          cell: userMock.cell,
        } as any)}
      />
    );
    expect(getByText('Full name')).toBeVisible();
    expect(getByText('silverswan131')).toBeVisible();
  });
});
