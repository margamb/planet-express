import React, { useEffect, useState } from 'react';
import { millisecondsToHumanTime } from '../helpers'

function Countdown({ deadline }) {
    const [remainingTime, setRemainingTime] = useState(deadline - new Date())

    useEffect(() => {
        const timer = setInterval(
            () => setRemainingTime(deadline - new Date())
            , 1000)

        return () => clearInterval(timer)
    }, [deadline])

    return (
        <span>{millisecondsToHumanTime(remainingTime)}</span>
    )
}

export default Countdown;