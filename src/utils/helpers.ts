import { IFullName, IParsedData } from '../interfaces/messageInterfaces';

export function parseMessage(message: string): IParsedData {
  const segments: string[] = message.split('\n');
  let fullName: IFullName = { lastName: '', firstName: '', middleName: '' };
  let dateOfBirth = '';
  let primaryCondition = '';

  for (const segment of segments) {
    const fields: string[] = segment.split('|');
    console.log(segment, 'segment');
    switch (fields[0]) {
      case 'PRS':
        const nameComponents: string[] = fields[4].split('^');

        fullName = {
          lastName: nameComponents[0] || '',
          firstName: nameComponents[1] || '',
          middleName: nameComponents[2] || '',
        };

        const dob: string = fields[8];
        if (dob && dob.length === 8) {
          dateOfBirth = `${dob.slice(0, 4)}-${dob.slice(4, 6)}-${dob.slice(
            6,
            8,
          )}`;
        }
        break;
      case 'DET':
        primaryCondition = fields[4];
        break;
      default:
        break;
    }
  }

  return {
    fullName,
    dateOfBirth,
    primaryCondition,
  };
}
