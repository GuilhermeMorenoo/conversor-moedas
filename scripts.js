const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor para converter Real //
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas //

    const dolarToday = 5.53
    const euroToday = 6.46
    const libraToday = 7.54
    const bitcoinToday = 652111.64


    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado o valor de dolar, entra aqui //
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado o valor de euro, entra aqui //
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        // Se o select estiver selecionado o valor de euro, entra aqui //
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        // Se o select estiver selecionado o valor de euro, entra aqui //
        const formattedValue = new Intl.NumberFormat("en-US", {
            style: "decimal",
            currency: "BTC",
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)

        currencyValueConverted.innerHTML = `₿ ${formattedValue}`; // Adiciona o símbolo do Bitcoin
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
