setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const date = new Date();
    const secondRatio = date.getSeconds() / 60;
    const minuteRatio = (secondRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours()) / 12;

    setRotation(hourHand, hourRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(secondHand, secondRatio);
}

function setRotation(hand, ratio) {
    hand.style.setProperty('--rotation', ratio * 360);
}

setClock();