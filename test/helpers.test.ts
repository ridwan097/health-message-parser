import { parseMessage } from '../src/utils/helpers';

describe('parseMessage', () => {
  it('should handle missing fields', () => {
    const message = 'MSG\nPRS|1|2|3|Doe^Jane|5|6|7||9\nDET|1|2|3|';
    const result = parseMessage(message);

    expect(result).toEqual({
      fullName: {
        lastName: 'Doe',
        firstName: 'Jane',
        middleName: '',
      },
      dateOfBirth: '',
      primaryCondition: '',
    });
  });
});
