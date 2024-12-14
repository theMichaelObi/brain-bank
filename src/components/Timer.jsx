import { useEffect, useState } from "react"

export default function Timer({ setStop, questionNumber, answered }) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {

        //stops the game when the timer reaches 0
        if (timer === 0) {
            setStop(true);
            return;
        }

        //sets the selected answer to answered
        if (answered) {
            return;
        }

        //sets the interval of the timer to count down by 1 second
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [setStop, timer, answered]);

    //sets the timer to 30 seconds at the start of each question
    useEffect(() => {
        setTimer(30);
    }, [questionNumber]);

    return timer;
}
