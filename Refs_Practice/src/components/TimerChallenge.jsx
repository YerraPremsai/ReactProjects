import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge({ title, targetTime }) {

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    const timer = useRef()
    const dialog = useRef()

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.open()
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>

                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'stop' : 'Start'} Challenge
                </button>

                <p>{timerStarted ? 'Timer is Running ....' : 'Timer inactive'}</p>
            </section>
        </>
    )
}