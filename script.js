const [hoursElement, minutesElement, secondsElement] = document.getElementsByClassName('clock-hand')
const [daysCountDown, hoursCountdown, minutesCountdown, secondsCountdown] = document.getElementsByClassName('countdown-time')
const c = document.querySelector('#days')
const updateHands = () => {
    const date = new Date()
    const hours = date.getHours() % 12
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    hoursElement.style.transform = `rotate(${360 / 12 * hours}deg)`
    minutesElement.style.transform = `rotate(${360 / 60 * minutes}deg)`
    secondsElement.style.transform = `rotate(${360 / 60 * seconds}deg)`
}
const countDown = () => {
    const diff = new Date('31 May 2021 00:00:00') - Date.now()
    const remainingDays = Math.floor(diff / 86400000)
    const remainingHours = Math.ceil((diff / 3600000) )% 24
    const remainingMinutes = (Math.ceil(diff / 60000)) % 60

    const remainingSeconds = Math.ceil(diff / 1000) % 60
    daysCountDown.textContent = remainingDays < 10 ? `0${remainingDays}` : remainingDays
    hoursCountdown.textContent  = remainingHours < 10 ? `0${remainingHours}` : remainingHours
    minutesCountdown.textContent = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes
    secondsCountdown.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
}
countDown()
updateHands()
setInterval( () =>{
    updateHands()
    countDown()
}, 1000)
