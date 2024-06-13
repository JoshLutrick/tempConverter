const tempObj = {
    tempResultCelsius: document.querySelector('.tempConverterContainerResultCelsius'),
    tempResultKelvin: document.querySelector('.tempConverterContainerResultKelvin'),
    tempResultFahrenheit: document.querySelector('.tempConverterContainerResultFahrenheit'),
    tempInputs: {
        degrees: document.querySelector('#degrees'),
        type: document.querySelector('#type'),
        convertBtn: document.querySelector('.convertBtn')
    },
    getUserInp() {
        return parseFloat(this.tempInputs.degrees.value)
    }
}



// function evaluateTemp() {
//     let userValue = tempObj.tempInputs.degrees.value
//     let convertedToNum = parseFloat(userValue)
//     let userTempType = tempObj.tempInputs.type.value
//     let evaluatedTemp = 0
//     function evaluated() {
//         if (userTempType === 'fahrenheit') {
//             return evaluateTemp = (userValue - 32) * 5 / 9;
//         } else if (userTempType === 'kelvin') {
//             return evaluateTemp = userValue - 273.15
//         } else if (userTempType === 'celsius') {
//             return evaluateTemp = userValue + 273.15
//         } else {
//             return 'ERROR'
//         }
//     }
//     if (userValue && convertedToNum && userTempType) {
//         evaluated()
//     }
//     tempObj.temperatureResult.innerText = evaluateTemp
// }


// tempObj.tempInputs.convertBtn.addEventListener('click', evaluateTemp)

function updateTempElem() {
    tempObj.tempResultKelvin.innerText = kelvinCalc()
    tempObj.tempResultCelsius.innerText = celsiusCalc()
    tempObj.tempResultFahrenheit.innerText = fahrenheitCalc()
    if (tempObj.tempInputs.type.value === 'fahrenheit') {
        tempObj.tempResultFahrenheit.classList.add('glow')
        tempObj.tempResultCelsius.classList.remove('glow')
        tempObj.tempResultKelvin.classList.remove('glow')
    } else if (tempObj.tempInputs.type.value === 'kelvin') {
        tempObj.tempResultFahrenheit.classList.remove('glow')
        tempObj.tempResultCelsius.classList.remove('glow')
        tempObj.tempResultKelvin.classList.add('glow')
    } else if (tempObj.tempInputs.type.value === 'celsius') {
        tempObj.tempResultFahrenheit.classList.remove('glow')
        tempObj.tempResultCelsius.classList.add('glow')
        tempObj.tempResultKelvin.classList.remove('glow')
    }
}


function celsiusCalc() {
    return tempObj.getUserInp()
}

function kelvinCalc() {
    return tempObj.getUserInp() - 273.15
}


function fahrenheitCalc() {
    return (tempObj.getUserInp() - 32) * 5 / 9
}

tempObj.tempInputs.convertBtn.addEventListener('click', updateTempElem)