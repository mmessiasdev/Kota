fetch(' https://economia.awesomeapi.com.br/last/USD-BRL').then((response) => response.json()).then(data => {
    const dolar = document.querySelector('.dolar')

    const option = JSON.stringify(data['USDBRL']["bid"])

    const valorDolar = option.toString()

    try {
        console.log(valorDolar)
        dolar.innerHTML = valorDolar.slice(1, 7, 6, 5, 4) + ' R$'
    } catch (error) {
        console.log('Deu Erro')
    }
})