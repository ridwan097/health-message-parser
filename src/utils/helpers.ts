import { IFullName, IParsedData } from '../interfaces/messageInterfaces';

export function parseMessage(message: string) {
  const lines = message.split('\n');

  let fullName: IFullName = { lastName: '', firstName: '', middleName: '' };
  let dateOfBirth = '';
  let primaryCondition = '';

  for (const line of lines) {
    const parts = line.split('|');

    if (parts[0] === 'PRS') {
      const nameParts = parts[4].split('^');
      fullName = {
        lastName: nameParts[0] || '',
        firstName: nameParts[1] || '',
        middleName: nameParts[2] || '',
      };
      dateOfBirth = parts[8] || '';
    } else if (parts[0] === 'DET') {
      primaryCondition = parts[4] || '';
    }
  }

  if (dateOfBirth) {
    const year = dateOfBirth.substring(0, 4);
    const month = dateOfBirth.substring(4, 6);
    const day = dateOfBirth.substring(6, 8);
    dateOfBirth = `${year}-${month}-${day}`;
  }

  const result: IParsedData = {
    fullName,
    dateOfBirth,
    primaryCondition,
  };

  return result;
}
