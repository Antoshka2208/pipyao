// =====================================================
// GIFT SITE
// script.js
// ЧАСТЬ 1
// =====================================================

// =========================
// ЭКРАНЫ
// =========================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");
const screen7 = document.getElementById("screen7");
const screen8 = document.getElementById("screen8");

// =========================
// КНОПКИ
// =========================

const startBtn = document.getElementById("startBtn");
const okBtn = document.getElementById("okBtn");
const closeBtn = document.getElementById("closeBtn");
const nextBtn3 = document.getElementById("nextBtn3");
const nextBtn4 = document.getElementById("nextBtn4");
const nextBtn5 = document.getElementById("nextBtn5");
const nextBtn6 = document.getElementById("nextBtn6");

// =========================
// ЭКРАН 7
// =========================

const codeInput = document.getElementById("codeInput");
const checkCodeBtn = document.getElementById("checkCodeBtn");
const codeMessage = document.getElementById("codeMessage");
const finalText =
    document.getElementById("finalText");

const giftBtn =
    document.getElementById("giftBtn");

    const finalScreenBtn =
    document.getElementById("finalScreenBtn");

const bgMusic =
    document.getElementById("bgMusic");

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// СЮДА ПОТОМ ВПИШЕШЬ СВОЙ СЕКРЕТНЫЙ КОД
const SECRET_CODE = "Кардибалет";
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// =========================
// ЗАГРУЗКА
// =========================

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const searchMessage = document.getElementById("searchMessage");

// =========================
// ИГРА
// =========================

const heart = document.getElementById("heart");
const heartGame = document.getElementById("heartGame");
const heartCounter = document.getElementById("heartCounter");

let heartsCaught = 0;

// =========================
// ПЕРЕХОДЫ
// =========================

// 1 → 2

startBtn.addEventListener("click", function () {

    document.title = "Внимание ❤️";

    screen1.classList.remove("active");
    screen2.classList.add("active");

});

// 2 → 3

okBtn.addEventListener("click", function () {

    document.title = "Для тебя ❤️";

    screen2.classList.remove("active");
    screen3.classList.add("active");

    startMessage();

});

// 3 → 4

nextBtn3.addEventListener("click", function () {

    document.title = "Подарок 🎁";

    screen3.classList.remove("active");
    screen4.classList.add("active");

});

// 4 → 5

nextBtn4.addEventListener("click", function () {

    document.title = "Поиск подарка...";

    screen4.classList.remove("active");
    screen5.classList.add("active");

    startLoading();

});

// 5 → 6

nextBtn5.addEventListener("click", function () {

    document.title = "Мини-игра ❤️";

    screen5.classList.remove("active");
    screen6.classList.add("active");

    startHeartGame();

});

// 6 → 7

nextBtn6.addEventListener("click", function () {

    document.title = "Секретный код 🔐";

    screen6.classList.remove("active");
    screen7.classList.add("active");

});

// =========================
// УБЕГАЮЩАЯ КНОПКА
// =========================

let firstRun = true;

function moveButton() {

    if (firstRun) {

        const rect = closeBtn.getBoundingClientRect();

        closeBtn.style.position = "fixed";
        closeBtn.style.left = rect.left + "px";
        closeBtn.style.top = rect.top + "px";

        firstRun = false;

    }

    const margin = 50;

    const maxX = window.innerWidth - closeBtn.offsetWidth - margin;
    const maxY = window.innerHeight - closeBtn.offsetHeight - margin;

    closeBtn.style.left = Math.random() * maxX + "px";
    closeBtn.style.top = Math.random() * maxY + "px";

}

closeBtn.addEventListener("mouseenter", moveButton);

closeBtn.addEventListener("touchstart", function (e) {

    e.preventDefault();
    moveButton();

});

// =========================
// ЗВЁЗДЫ
// =========================

const sky = document.getElementById("sky");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    sky.appendChild(star);

}

// =========================
// ЭКРАН 3
// =========================

function startMessage() {

    const title = document.getElementById("messageTitle");
    const text = document.getElementById("messageText");

    nextBtn3.style.display = "none";

    title.innerHTML = "...";
    text.innerHTML = "";

    setTimeout(() => {

        title.innerHTML = "❤️";

    }, 1000);

    setTimeout(() => {

        text.innerHTML =
            "Я немножка волновался,<br>пока делал этот сайт 😅";

    }, 2000);

    setTimeout(() => {

        text.innerHTML +=
            "<br><br>Надеюсь, тебе понравится ❤️";

    }, 3500);

    setTimeout(() => {

        nextBtn3.style.display = "inline-block";

    }, 5000);

}
// =====================================================
// GIFT SITE
// script.js
// ЧАСТЬ 2
// =====================================================

// =========================
// ЭКРАН 5
// =========================

function startLoading() {

    nextBtn5.style.display = "none";

    progressBar.style.width = "0%";
    progressText.textContent = "0%";
    searchMessage.innerHTML = "";

    const steps = [
        { value: 17, delay: 500 },
        { value: 41, delay: 700 },
        { value: 68, delay: 800 },
        { value: 89, delay: 900 },
        { value: 99, delay: 1200 },
        { value: 100, delay: 700 }
    ];

    let i = 0;

    function nextStep() {

        if (i >= steps.length) {

            finishLoading();
            return;

        }

        progressBar.style.width = steps[i].value + "%";
        progressText.textContent = steps[i].value + "%";

        const delay = steps[i].delay;

        i++;

        setTimeout(nextStep, delay);

    }

    nextStep();

}

function finishLoading() {

    searchMessage.innerHTML = `
        ✅ Подарок успешно найден!<br><br>
        Но перед тем,<br>
        как его получить,<br>
        тебе нужно чуть постараться ❤️
    `;

    nextBtn5.style.display = "inline-block";

}

// =========================
// ЭКРАН 6
// =========================

function startHeartGame() {

    heartsCaught = 0;

    heart.style.display = "block";

    heart.style.fontSize = "56px";

    heart.style.left = "300px";
    heart.style.top = "140px";

    nextBtn6.style.display = "none";

    heartCounter.innerHTML = "Поймано: 0 / 5";

}

heart.addEventListener("click", function () {

    heartsCaught++;

    heartCounter.innerHTML =
        "Поймано: " + heartsCaught + " / 5";

    // Немного уменьшаем сердце
    heart.style.fontSize =
        (56 - heartsCaught * 5) + "px";

    if (heartsCaught >= 5) {

        heart.style.display = "none";

        heartCounter.innerHTML =
            "❤️ Молодец! Теперь остался последний шаг ❤️";

        nextBtn6.style.display = "inline-block";

        return;

    }

    const maxX =
        heartGame.clientWidth -
        heart.offsetWidth;

    const maxY =
        heartGame.clientHeight -
        heart.offsetHeight;

    heart.style.left =
        Math.random() * maxX + "px";

    heart.style.top =
        Math.random() * maxY + "px";

});

// =========================
// ЭКРАН 7
// =========================

checkCodeBtn.addEventListener("click", function () {

    const code = 
        codeInput.value.trim();

    if (code === SECRET_CODE) {

        codeMessage.style.color = "#77ff77";

        codeMessage.innerHTML =
            "❤️ Правильно! Последний экран уже ждёт тебя.";

        finalScreenBtn.style.display = "block";

    }

    else {

        codeMessage.style.color = "#ff8080";

        codeMessage.innerHTML =
            "❌ Пока нет... Попробуй ещё ❤️";

    }

});

// Enter тоже проверяет код

codeInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        checkCodeBtn.click();

    }
});


const FINAL_MESSAGE =
`Поздравляю! ❤️

Ты справилась со всеми загадками и дошла до самого конца.
Надеюсь, этот небольшой квест смог подарить тебе улыбку и сделать этот день чуточку интереснее.
Спасибо, что прошла его до конца.

Но это ещё не всё...
На самом деле этот сайт был лишь частью моего подарка.
А теперь тебя ждёт небольшой сюрприз, который я хочу вручить тебе лично. 🎁`;


let typingIndex = 0;
let typingFinished = false;

function typeFinalMessage() {

    if (typingFinished) return;

    finalText.innerHTML = "";
    giftBtn.classList.remove("show");
    giftBtn.style.display = "none";

    typingIndex = 0;

    function type() {

        if (typingIndex >= FINAL_MESSAGE.length) {

            typingFinished = true;

            giftBtn.style.display = "inline-block";

            setTimeout(() => {

                giftBtn.classList.add("show");

            }, 300);

            return;

        }

        const char = FINAL_MESSAGE.charAt(typingIndex);

        if (char === "\n") {

            finalText.innerHTML += "<br>";

        } else {

            finalText.innerHTML += char;

        }

        typingIndex++;

        setTimeout(type, 32);

    }

    type();

}

finalScreenBtn.addEventListener("click", function () {

    document.title = "❤️ Финал ❤️";

    screen7.classList.remove("active");
    screen8.classList.add("active");

    typeFinalMessage();

});

// =========================
// ФИНАЛ
// =========================

giftBtn.addEventListener("click", function () {

    // Вибрация (если поддерживается)
    if (navigator.vibrate) {

        navigator.vibrate([120, 60, 120, 60, 250]);

    }

    giftBtn.style.display = "none";

    document.getElementById("finalCongrats")
        .classList.add("show");

        bgMusic.play();

    createConfetti();

});

function createConfetti() {

    const colors = [

        "#ff4d6d",
        "#ffd93d",
        "#6dff7a",
        "#5bc0ff",
        "#d66bff",
        "#ffffff"

    ];

    for (let i = 0; i < 150; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * window.innerWidth + "px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        piece.style.opacity =
            Math.random();

        piece.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(function(){

            piece.remove();

        },6000);

    }

}
