fetch(' https://economia.awesomeapi.com.br/last/USD-BRL').then((response) => response.json()).then(data => {
    const dolar = document.querySelector('.dolar')

    const option = JSON.stringify(data['USDBRL']["bid"])

    const valorDolar = option.toString()

    try {
        console.log(valorDolar)
        dolar.innerHTML = valorDolar.slice(1, 5, 6, 7) + ' R$'
    } catch (error) {
        console.log('Deu Erro')
    }
})


fetch(' https://economia.awesomeapi.com.br/last/EUR-BRL').then((response) => response.json()).then(data => {
    const dolar = document.querySelector('.euro')

    const option = JSON.stringify(data['EURBRL']['bid'])

    const valorEuro = option.toString()

    try {
        console.log(valorEuro)
        dolar.innerHTML = valorEuro.slice(1, 5, 6, 7) + ' R$'
    } catch (error) {
        console.log('Deu Erro Aqui')
    }
})


fetch(' https://economia.awesomeapi.com.br/last/BTC-BRL').then((response) => response.json()).then(data => {
    const dolar = document.querySelector('.bitcoin')

    const option = JSON.stringify(data['BTCBRL']['bid'])

    const valorBit = option.toString()

    try {
        console.log(valorBit)
        dolar.innerHTML = valorBit.slice(1, 8) + ' R$'
    } catch (error) {
        console.error('Deu Erro Aqui')
    }
})