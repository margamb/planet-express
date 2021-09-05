import { millisecondsToHumanTime } from './index';

describe('millisecondsToHumanTime', () => {
  test('outputs the correct string with plurals', () => {
    const dateOne = new Date('1999-12-31T12:00:00');
    const dateTwo = new Date('2000-01-02T15:04:30');

    const milliseconds = dateTwo - dateOne;

    const expected = '2 días, 3 horas, 4 minutos y 30 segundos';
    const got = millisecondsToHumanTime(milliseconds);

    expect(got).toBe(expected);
  });

  test('outputs the correct string with singulars', () => {
    const dateOne = new Date('1999-12-31T12:00:00');
    const dateTwo = new Date('2000-01-01T13:01:01');

    const milliseconds = dateTwo - dateOne;

    const expected = '1 día, 1 hora, 1 minuto y 1 segundo';
    const got = millisecondsToHumanTime(milliseconds);

    expect(got).toBe(expected);
  });
});
