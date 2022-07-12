const resultel = document.getElementById("result");
const lengthel = document.getElementById("length");
const uppercaseel = document.getElementById("uppercase");
const lowercaseel = document.getElementById("lowercase");
const numbersel = document.getElementById("numbers");
const symbolsel = document.getElementById("symbols");
const generateel = document.getElementById("generate");
const clipboardel = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardel.addEventListener("click", function () {
    const textarea = document.createElement("textarea");
    const password = resultel.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard!");
});

generateel.addEventListener("click", function () {
    const length = +lengthel.value;
    const hasLower = lowercaseel.checked;
    const hasUpper = uppercaseel.checked;
    const hasNumber = numbersel.checked;
    const hasSymbol = symbolsel.checked;

    resultel.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{
        lower
    }, {
        upper
    }, {
        number
    }, {
        symbol
    }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(function (type) {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}