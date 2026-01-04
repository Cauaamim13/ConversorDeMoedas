const currencyFrom = document.querySelector(".currency-converted");
const currencyTo = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency");
const convertButton = document.querySelector(".convertButton")

const currencyNameFrom = document.querySelector(".currency-box:first-child .currency");
const currencyImgFrom = document.querySelector(".currency-box:first-child img");
const currencyValueFrom = document.querySelector(".currency-value-to-convert");

const currencyNameTo = document.getElementById("currency-name");
const currencyImgTo = document.querySelector(".currency-img");
const currencyValueTo = document.querySelector(".currency-value");

let cotacaoAtual = 0;

const currencyData = {
    "BRL": { name: "Real Brasileiro", img: "Assets/brasil 2.png", locale: "pt-BR", currency:"BRL" },
    "USD": { name: "Dólar Americano", img: "Assets/estados-unidos (1) 1.png", locale: "en-US", currency: "USD" },
    "EUR": { name: "Euro", img: "Assets/euro.png.png", locale: "de-DE", currency: "EUR" },
    "GBP": { name: "Libra", img: "Assets/libra 1.png", locale: "en-GB", currency: "GBP" }
}

async function checkQuotation() {
    const from = currencyFrom.value;
    const to = currencyTo.value;

    if (from === to) {
        cotacaoAtual = 1;
        calculate ();

        return; 
    }

    const url = `https://economia.awesomeapi.com.br/last/${from}-${to}`;

try {
    const response = await fetch(url);
    const data = await response.json();

    const key = `${from}${to}`;

    cotacaoAtual = parseFloat(data[key].bid);
    console.log(`Cotação atualizada: 1 ${from} = ${cotacaoAtual} ${to}`);

    calculate();

} catch (error) {
    console.error('Erro ao buscar API', error);
    cotacaoAtual = 0;
}    

}

function calculate () {
    const inputValue = parseFloat(inputCurrency.value) || 0;

    const convertedValue = inputValue * cotacaoAtual;

    const from = currencyFrom.value;
    const to = currencyTo.value;

    formatValue(inputValue, from, currencyValueFrom);
    formatValue(convertedValue, to, currencyValueTo);
}


function formatValue (value, currencyCode, element) {
    const data = currencyData[currencyCode];
    element.innerHTML = new Intl.NumberFormat(data.locale, {
        style: "currency",
        currency: data.currency
    }).format(value);
}

function changeCurrencyDisplay () {
    const from = currencyFrom.value;
    const to = currencyTo.value;

    currencyNameFrom.innerHTML = currencyData[from].name;
    currencyImgFrom.src = currencyData[from].img;

    currencyNameTo.innerHTML = currencyData[to].name;
    currencyImgTo.src = currencyData[to].img;

    checkQuotation();
}

currencyFrom.addEventListener("change", changeCurrencyDisplay);
currencyTo.addEventListener("change", changeCurrencyDisplay);
convertButton.addEventListener("click", checkQuotation);

inputCurrency.addEventListener("input", calculate);

setInterval(checkQuotation, 30000);

changeCurrencyDisplay();