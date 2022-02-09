let inputAge = document.getElementById("inputAge");
let minorOrNot = document.getElementById("minorOrNot");
let areYouDisgusting = document.getElementById("areYouDisgusting");

function adult() {
    if (inputAge.value > 130 || inputAge.value < 0) {
        minorOrNot.innerHTML = `Well...at least you tried something creative now`;
        areYouDisgusting.innerHTML = `You might be able to smoke Shisha - but it's disgusting, so I say NO!`;
    } else if
        (inputAge.value >= 18) {
        minorOrNot.innerHTML = `volljährig lol`;
        areYouDisgusting.innerHTML = `Ja. Du kannst Shisha rauchen, aber es ist ekelhaft und belästigt deine Mitmenschen, also lass es.`;
    }
    else {
        minorOrNot.innerHTML = `minderjährig`;
        areYouDisgusting.innerHTML = `Nein. Du darfst noch keine Shisha rauchen, bleib dabei. Du hast tausend wunderschöne Alternativen, die nicht andere mit Tabakrauch und Co nerven.`;
    }
}

console.log(" ");
console.log(" ");
console.log("Lev1_2");

let inputWeather = document.getElementById("typeWeather");
let sunShine = document.getElementById("weatherDIV");

function weatherType() {
    if (inputWeather.value >= 0 && inputWeather.value <= 10) {
        if (inputWeather.value >= 8) {
            sunShine.innerHTML = `The weather seems to be great =D`;
        } else if (inputWeather.value >= 6) {
            sunShine.innerHTML = `The weather seems to be good :3`;
        } else if (inputWeather.value >= 3) {
            sunShine.innerHTML = `The weather seems to be okay :)`;
        } else if (inputWeather.value >= 0) {
            sunShine.innerHTML = `The weather seems to be bad :/`;
        }
    }
    else {
        sunShine.innerHTML = `I said: BETWEEN 0 AND 10!!`;
    }
}

console.log(" ");
console.log("Lev2_3");
let a = 35;
// let a = 74;
// let a = 123;
// let a = 27;

function calC() {
    if (a - 27 > 0) {
        return ((a - 27) * 2);
    } else {
        return ("false");
    }
}
calC()
console.log(calC());

console.log(" ");
console.log("Lev2_4");
let paraA = 5;
let paraB = 8;
// let paraB = 5;

function CalCo() {
    if (paraA === paraB) {
        return ((paraA + paraB) * 5);
    } else {
        return (paraA + paraB);
    }
}
CalCo();
console.log(CalCo());