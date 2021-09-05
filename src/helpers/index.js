// Acepta un numero de milisegundos y nos lo "traduce"
// a dias, horas, minutos y segundos
export function millisecondsToHumanTime(ms) {
  const MILLISECONDS_IN_A_SECOND = 1000;
  const MILLISECONDS_IN_A_MINUTE = MILLISECONDS_IN_A_SECOND * 60;
  const MILLISECONDS_IN_AN_HOUR = MILLISECONDS_IN_A_MINUTE * 60;
  const MILLISECONDS_IN_A_DAY = MILLISECONDS_IN_AN_HOUR * 24;

  const days = Math.floor(ms / MILLISECONDS_IN_A_DAY);
  const remaining_hours = ms % MILLISECONDS_IN_A_DAY;

  const hours = Math.floor(remaining_hours / MILLISECONDS_IN_AN_HOUR);
  const remaining_minutes = ms % MILLISECONDS_IN_AN_HOUR;

  const minutes = Math.floor(remaining_minutes / MILLISECONDS_IN_A_MINUTE);
  const remaining_seconds = ms % MILLISECONDS_IN_A_MINUTE;

  const seconds = Math.floor(remaining_seconds / MILLISECONDS_IN_A_SECOND);

  const daysString = days === 1 ? 'día' : 'días';
  const hoursString = hours === 1 ? 'hora' : 'horas';
  const minutesString = minutes === 1 ? 'minuto' : 'minutos';
  const secondsString = seconds === 1 ? 'segundo' : 'segundos';

  return `${days} ${daysString}, ${hours} ${hoursString}, ${minutes} ${minutesString} y ${seconds} ${secondsString}`;
}
