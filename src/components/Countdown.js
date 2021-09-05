import React, { useEffect, useState } from 'react';
import { millisecondsToHumanTime } from '../helpers';

function Countdown({ deadline }) {
  const [remainingTime, setRemainingTime] = useState(deadline - new Date());

  useEffect(() => {
    // Queremos que cada segundo se actualize el tiempo que queda
    const timer = setInterval(
      () => setRemainingTime(deadline - new Date()),
      1000
    );

    // devolvemos una funcion que quita el intervalo
    // una vez que el componente se desmonte del DOM
    return () => clearInterval(timer);
  }, [deadline]);

  return <span>{millisecondsToHumanTime(remainingTime)}</span>;
}

export default Countdown;
