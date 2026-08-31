 function scrollToSection(id) {
document
    .getElementById(id)
    .scrollIntoView({
        behavior: "smooth"
    });
}
/* COUNTDOWN */
function updateCountdown() {
const birthday = new Date("December 18, 2026 00:00:00");
const now = new Date();
const difference = birthday - now;
if (difference <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
}
const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);
const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
);
const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
);
const seconds = Math.floor(
    (difference / 1000) % 60
);
document.getElementById("days").innerText =
    String(days).padStart(2, "0");
document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");
document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");
document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
/* MUSIC */
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", function () {
if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸ Pause Music";
} else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
}
});
/* FINAL GIFT */
const giftBtn =
document.getElementById("giftBtn");
const surpriseMessage =
document.getElementById("surpriseMessage");
giftBtn.addEventListener("click", function () {
surpriseMessage.classList.add("show");
createConfetti();
});
/* SIMPLE CONFETTI */
function createConfetti() {
for (let i = 0; i < 80; i++) {
    const confetti =
        document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background =
        `hsl(${Math.random() * 360}, 80%, 70%)`;
    confetti.style.left =
        Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.zIndex = "9999";
    document.body.appendChild(confetti);
    const animation =
        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`
                }
            ],
            {
                duration:
                    2500 + Math.random() * 2000,
                easing:
                    "ease-out"
            }
        );
    animation.onfinish = () => {
        confetti.remove();
    };
}
}