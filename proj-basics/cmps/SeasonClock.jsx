const { useState, useEffect } = React
import { utilService } from "../services/util.service.js"

export function SeasonClock() {

    const date = new Date()

    const dayName = utilService.getDayName(date)
    const monthIdx = date.getMonth()
    const monthName = utilService.getMonthName(date)

    const [isDark, setIsDark] = useState(true)
    const darkClass = isDark ? 'dark' : ''
    let season = 'Winter'

    let seasonImg = '/season-imgs/winter.png'
    if (monthIdx >= 2 && monthIdx <= 4) {
        season = 'Spring'
        seasonImg = '/season-imgs/spring.png'
    }
    else if (monthIdx >= 5 && monthIdx <= 7) {
        season = 'Summer'
        seasonImg = '/season-imgs/summer.png'
    }
    else if (monthIdx >= 8 && monthIdx <= 10) {
        season = 'Fall'
        seasonImg = '/season-imgs/autumn.png'
    }

    const [clock, setClock] = useState(new Date())
    useEffect(() => {
        let clockId = setInterval(() => setClock(new Date()), 1000)

        return () => {
            clearInterval(clockId)
        }
    }, [])

    return (
        <div className={`clock-container ${darkClass}`} onClick={() => setIsDark(!isDark)}>
            <h2>{monthName} ({season})</h2>
            <img src={seasonImg} alt="season" />
            <h3>{dayName}</h3>
            <section className="clock">{clock.toLocaleTimeString()}</section>
        </div>
    )
}