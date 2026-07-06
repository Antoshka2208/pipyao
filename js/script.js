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

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// СЮДА ПОТОМ ВПИШЕШЬ СВОЙ СЕКРЕТНЫЙ КОД
const SECRET_CODE = "LOVE";
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

        // Здесь потом будет переход
        // на финальный экран.

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