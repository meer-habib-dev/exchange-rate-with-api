const currencyEl_One = document.getElementById('currency-one');
const amount_One = document.getElementById('amount-one');
const currencyEl_Two = document.getElementById('currency-two');
const amount_Two = document.getElementById('amount-two');

const rate_EL = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rate and update DOM 
calculate = async () => {
    const currency_one = currencyEl_One.value;
    const currency_two = currencyEl_Two.value;

    const url = `https://v6.exchangerate-api.com/v6/edd8bf3d2fe229d6804a3bd9/latest/${currency_one}`;
    // const url = `https://api.exchangerate-api.com/v4/latest/${currency_one}`;
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.conversion_rates[currency_two];
    // console.log(data);
    rate_EL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

    amount_Two.value = (amount_One.value * rate).toFixed(2);

}

//add event lisenters to DOM
currencyEl_One.addEventListener('change', calculate);
amount_One.addEventListener('input', calculate);
currencyEl_Two.addEventListener('change', calculate);
amount_Two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const swap = currencyEl_One.value;
    currencyEl_One.value = currencyEl_Two.value;
    currencyEl_Two.value = swap;
    calculate();

})


calculate();