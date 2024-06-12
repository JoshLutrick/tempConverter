const tempObj = {
    temperatureResult: document.querySelector('.tempConverterContainerResultTitle'),
    tempInputs: {
        degrees: document.querySelector('#degrees'),
        type: document.querySelector('#type'),
        convertBtn: document.querySelector('.convertBtn')
    },
}



function evaluateTemp() {
    let userValue = tempObj.tempInputs.degrees.value
    let convertedToNum = parseFloat(userValue)
    let userTempType = tempObj.tempInputs.type.value
    let evaluatedTemp = 0
    function evaluated() {
        if (userTempType === 'fahrenheit') {
            return evaluateTemp = (userValue - 32) * 5 / 9;
        } else if (userTempType === 'kelvin') {
            return evaluateTemp = userValue - 273.15
        } else if (userTempType === 'celsius') {
            return evaluateTemp = userValue + 273.15
        } else {
            return 'ERROR'
        }
    }
    if (userValue && convertedToNum && userTempType) {
        evaluated()
    }
    tempObj.temperatureResult.innerText = evaluateTemp
}


tempObj.tempInputs.convertBtn.addEventListener('click', evaluateTemp)