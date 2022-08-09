const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipByPerson = document.querySelector('#tip-amount')
const totalTips = document.querySelector('#total-amount')
const tips = document.querySelectorAll('.tips')
const tipCustom = document.querySelector('.tip-custom')
const resetBtn = document.querySelector('.reset')
const error = document.querySelector('.error')

billInput.addEventListener("input", billFun)
peopleInput.addEventListener("input", peopleFun)
tips.forEach((val) => {
    val.addEventListener('click', tipClick)
})
tipCustom.addEventListener('input', customTip)
resetBtn.addEventListener('click', reset)

billInput.value = '0.0'
peopleInput.value = '1'
tipByPerson.innerHTML = "$" + (0.0).toFixed(2)
totalTips.innerHTML = "$" + (0.0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15


function billFun() {

    billValue = parseFloat(billInput.value)
    calcTip()
}

function peopleFun() {

    peopleValue = parseFloat(peopleInput.value)
    calcTip()

    if(peopleValue < 1){
        error.style.display = 'flex'
        peopleInput.style.border = 'solid red'
    }else{
        error.style.display = 'none'
        peopleInput.style.border = 'none'
    }
}

function customTip() {
    tipValue = parseFloat(tipCustom.value / 100)

    tips.forEach((val) => {
        val.classList.remove('active')
    })

    calcTip()
}


function tipClick(event) {

    tips.forEach((val) => {

        val.classList.remove('active')

        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active')
            tipValue = parseFloat(val.innerHTML) / 100
        }
    })
    calcTip()
}

function calcTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue
        let total = (billValue + tipAmount) / peopleValue

        tipByPerson.innerHTML = "$" + tipAmount.toFixed(2)
        totalTips.innerHTML = "$" + total.toFixed(2)
    }
}

function reset() {
    billInput.value = '0.0'
    billFun()
    peopleInput.value = '1'
    peopleFun()
   tipCustom.value = ""
}