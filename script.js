const today = new Date()

    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()

const dayInput = document.querySelector(".day-input")
const monthInput = document.querySelector(".month-input")
const yearInput = document.querySelector(".year-input")

const button = document.querySelector(".button")

const validFuncNumber = (input, maxLength)=>{
    const regexReplace = /[^0-9]/g
    input.addEventListener("input", ()=>{
        input.value = input.value.replace(regexReplace, "")
    if (input.value.length > maxLength) {
        input.value= input.value.slice(0,maxLength)
        }
    })
}

validFuncNumber(dayInput, 2)
validFuncNumber(monthInput, 2)
validFuncNumber(yearInput, 4)

const red = "var(--Light-red)"

button.addEventListener("click", ()=>{

    let dayValue = dayInput.value
    let monthValue = monthInput.value
    let yearValue = yearInput.value

    const errorDayRequired = document.querySelector(".error-day-required")
    const errorMonthRequired = document.querySelector(".error-month-required")
    const errorYearRequired = document.querySelector(".error-year-required")

    const dayLabel = document.querySelector(".day-label")
    const monthLabel = document.querySelector(".month-label")
    const yearLabel = document.querySelector(".year-label")
    
    let dayOk, monthOk, yearOk, emptyOk = false

    const emptyValue = (data, styles, inputs, labels)=>{
        if (data === "") {
            styles.style.height = "18px"
            inputs.style.borderColor = red
            labels.style.color = red
            emptyOk = false

        } else {
            styles.style.height = "0"
            inputs.style.borderColor = ""
            labels.style.color = ""
            emptyOk = true
        }
    }

    emptyValue(dayValue, errorDayRequired, dayInput, dayLabel)
    emptyValue(monthValue, errorMonthRequired, monthInput, monthLabel)
    emptyValue(yearValue, errorYearRequired, yearInput, yearLabel)

    const errorDayValid = document.querySelector(".error-day-valid")
    const errorMonthValid = document.querySelector(".error-month-valid")
    const errorYearhValid = document.querySelector(".error-year-valid")

    const errorDateValid = document.querySelector(".error-valid-data")
    
    const spanDays = document.querySelector(".span-days")
    const spanMonths = document.querySelector(".span-months")
    const spanYears = document.querySelector(".span-year")

    const emptyText = ()=>{
        spanDays.innerHTML = "-- "
        spanMonths.innerHTML = "-- "
        spanYears.innerHTML = "-- "
    }

    const dateValid = (dayValue, monthValue, yearValue)=>{
        let totalDay=  new Date(yearValue, monthValue, 0).getDate()

        if (monthValue > 12 && monthValue == "") {
            errorMonthValid.style.height = "18px"
            monthOk = false
        }else{
            errorMonthValid.style.height = "0"
            monthOk = true
        }
        
        if (yearValue > year) {
            errorYearhValid.style.height = "18px"
            yearOk = false
        } else {
            errorYearhValid.style.height = "0"
            yearOk = true
        }

        if (dayValue > totalDay && (monthValue > 12 || yearValue > year)) {
            errorDayValid.style.height = "18px"
            errorDateValid.style.height = "0"
            dayOk = false
        } else if (dayValue > totalDay || monthValue > 12) {
            errorDateValid.style.height = "18px"
            errorDayValid.style.height = "0"
            dayOk = false
        } else {
            errorDayValid.style.height = "0"
            errorDateValid.style.height = "0"
            dayOk = true
        }

        //! REVISAR ESTA FUNCION

        const calculateAge = (birthDate) => {
            const today = new Date();
            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();
        
            if (months < 0 || (months === 0 && days < 0)) {
                years--
                months += 12
            }
        
            if (days < 0) {
                const previousMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1
                const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate()
                days += daysInPreviousMonth
                months--
            }
            spanDays.innerHTML = `${days} `
            spanMonths.innerHTML = `${months} `
            spanYears.innerHTML = `${years} `
        }

        //! TERMINO DE ESTAFUNCION
        
        if (dayOk && monthOk && yearOk && dayValue !== "" && monthValue !== "" && monthValue < 13 && yearValue !== "") {
            const birthDate = new Date(yearValue, monthValue-1, dayValue)
            calculateAge(birthDate)
        }else {
            emptyText()
        }
    }
    dateValid(dayValue, monthValue ,yearValue)
})
