
export function SeasonClock(props) {

    const nowTime = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayName = days[nowTime.getDay()]
    const monthIdx = nowTime.getMonth()
    const monthName = months[monthIdx]

    let season = null
    if (monthIdx >= 2 && monthIdx <= 4) season = 'Spring'
    else if (monthIdx >= 5 && monthIdx <= 7) season = 'Summer'
    else if (monthIdx >= 8 && monthIdx <= 10) Season = 'Fall'
    else season = 'Winter'

    const seasonLower = season.toLowerCase()
    let seasonImg = ''
    switch (seasonLower) {
        case 'winter':
            seasonImg = '/season-imgs/winter.png'
            break
        case 'spring':
            seasonImg = '/season-imgs/spring.png'
            break
        case 'summer':
            seasonImg = '/season-imgs/summer.png'
            break
        case 'fall':
            seasonImg = '/season-imgs/autumn.png'
            break
        default:
            seasonImg = '/season-imgs/winter.png'
    }

    return (
        <div className="clock-container">
            <h2>{monthName} ({season})</h2>
            <img src={seasonImg} alt="season" />
            <h3>{dayName}</h3>
        </div>
    )











}