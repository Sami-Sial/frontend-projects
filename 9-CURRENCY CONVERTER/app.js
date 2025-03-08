let dropdowns = document.querySelectorAll("select");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  if (element.name === "to") {
    let toImg = document.querySelector("#to-img");
    toImg.src = newSrc;
  }

  if (element.name === "from") {
    let fromImg = document.querySelector("#from-img");
    fromImg.src = newSrc;
  }
};

let btn = document.querySelector("button");
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let input = document.querySelector("input");
  let amount = input.value;
  if (amount === "" || amount < 1) {
    amount = 1;
    input.value = "1";
  }

  let fromCurr = document.querySelector(".from select");
  let toCurr = document.querySelector(".to select");

  let BASE_URL = "https://api.exchangerate-api.com/v4/latest/USD";
  let result = await fetch(BASE_URL);
  let data = await result.json();
  let fromRate = data.rates[fromCurr.value];
  let toRate = data.rates[toCurr.value];
  let exchangeRate = toRate / fromRate;
  let finalAmt = (exchangeRate * amount).toFixed(2);

  let msg = document.querySelector(".msg");
  msg.innerText = `${amount} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
};

window.addEventListener("load", () => {
  updateExchangeRate();
});
