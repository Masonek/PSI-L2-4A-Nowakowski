const button = document.getElementById('dutch-btn');
const body = document.body;
const card = document.getElementById('main-card');
const textSpan = document.getElementById('dutch-text');

button.addEventListener('click', function() {
    body.classList.toggle('dutch-mode');
    card.classList.toggle('dutch-mode-border');
    textSpan.classList.toggle('highlight');

    if (body.classList.contains('dutch-mode')) {
        button.textContent = "Wróć do standardu";
        button.style.backgroundColor = "#FF9B00";
        alert("Gezellig! Teraz jest bardzo holendersko.");
    } else {
        button.textContent = "🇳🇱 Włącz tryb Holenderski";
        button.style.backgroundColor = "#306998";
    }
});