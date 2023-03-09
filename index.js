const mainTitle = document.querySelector('.main-container')

const zeroLeft = number => {
    if (number < 10) {
        return number = `0${number}`
    } else {
        return number
    }
}

//get current date
const currentDate = data => {
    let day = data.getDay() + 1
    const dayOfMonth = data.getDate()
    let currentMonth = data.getMonth() + 1
    const currentYear = data.getFullYear()
    const currentHour = data.getHours()
    const currentMinutes = data.getMinutes()
    const currentSeconds = data.getSeconds()

    switch (day) {
        case 1:
            day = 'Domingo'
            break;
        case 2:
            day = 'Segunda-feira'
            break;
        case 3:
            day = 'Terça-feira'
            break;
        case 4:
            day = 'Quarta-feira'
            break;
        case 5:
            day = 'Quinta-feira'
            break;
        case 6:
            day = 'Sexta-feira'
            break;
        case 7:
            day = 'Sábado'
            break;
    }

    switch (currentMonth) {
        case 1:
            currentMonth = "Janeiro"
            break;
        case 2:
            currentMonth = "Fevereiro"
            break;
        case 3:
            currentMonth = "Março"
            break;
        case 4:
            currentMonth = "Abriu"
            break;
        case 5:
            currentMonth = "Maio"
            break;
        case 6:
            currentMonth = "Junho"
            break;
        case 7:
            currentMonth = "Julho"
            break;
        case 8:
            currentMonth = "Agosto"
            break;
        case 9:
            currentMonth = "Setembro"
            break;
        case 10:
            currentMonth = "Outubro"
            break;
        case 11:
            currentMonth = "Novembro"
            break;
        case 12:
            currentMonth = "Dezembro"
            break;
    }

    return {
        dayOfTheWeek: day,
        day: dayOfMonth,
        month: currentMonth,
        year: currentYear,
        hour: currentHour,
        minutes: currentMinutes,
        seconds: currentSeconds
    }
}

const createElementJs = element => {
    const el = document.createElement(element)
    return el
}

const displayCurrentDate = () => {
    const data = new Date()
    const h1 = createElementJs('h1')
    h1.innerHTML = `${currentDate(data).dayOfTheWeek}, ${zeroLeft(currentDate(data).day)} de ${currentDate(data).month} de ${currentDate(data).year} <br> ${zeroLeft(currentDate(data).hour)}:${zeroLeft(currentDate(data).minutes)}`
    mainTitle.appendChild(h1)
}

const attDate = setInterval(() => {
    const currentTime = new Date()

    console.log(currentTime.getSeconds())

    if (currentTime.getSeconds() === 0) {
        mainTitle.innerHTML = ""
        const h1 = createElementJs('h1')
        h1.innerHTML = `${currentDate(currentTime).dayOfTheWeek}, ${zeroLeft(currentDate(currentTime).day)} de ${currentDate(currentTime).month} de ${currentDate(currentTime).year} <br> ${zeroLeft(currentDate(currentTime).hour)}:${zeroLeft(currentDate(currentTime).minutes)}`

        mainTitle.appendChild(h1)
    }
}, 1000)

displayCurrentDate()

