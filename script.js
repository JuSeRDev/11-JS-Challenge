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

button.addEventListener("click", (e)=>{

    let dayValue = dayInput.value
    let monthValue = monthInput.value
    let yearValue = yearInput.value

    const birthDate = new Date(yearValue, monthValue-1, dayValue)

    const errorDayRequired = document.querySelector(".error-day-required")
    const errorMonthRequired = document.querySelector(".error-month-required")
    const errorYearRequired = document.querySelector(".error-year-required")
    
    const emptyValue = (data, styles)=>{
        if (data === "") {
            styles.style.height = "18px"
            e.preventDefault()
        } else {
            styles.style.height = "0"
        }
    }

    emptyValue(dayValue, errorDayRequired)
    emptyValue(monthValue, errorMonthRequired)
    emptyValue(yearValue, errorYearRequired)

    const errorDayValid = document.querySelector(".error-day-valid")
    const errorMonthValid = document.querySelector(".error-month-valid")
    const errorYearhValid = document.querySelector(".error-year-valid")

    const errorDateValid = document.querySelector(".error-valid-data")

    const dateValid = (dayValue, monthValue, yearValue)=>{
        let totalDay=  new Date(yearValue, monthValue, 0).getDate()
        if (dayValue > totalDay && (monthValue > 12 || yearValue > year)) {
            errorDayValid.style.height = "18px"
            errorDateValid.style.height = "0"
            e.preventDefault()
        } else if (dayValue > totalDay) {
            errorDateValid.style.height = "18px"
            errorDayValid.style.height = "0"
            e.preventDefault()
        } else {
            errorDayValid.style.height = "0"
            errorDateValid.style.height = "0"
        }
        
        if (monthValue > 12) {
            errorMonthValid.style.height = "18px"
            e.preventDefault()
        }else{
            errorMonthValid.style.height = "0"
        }
        
        if (yearValue > year) {
            errorYearhValid.style.height = "18px"
            e.preventDefault()
        } else {
            errorYearhValid.style.height = "0"
        }
        
    }
    dateValid(dayValue, monthValue ,yearValue)


})
