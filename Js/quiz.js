function checkAnswer(selectedOption) {
    const questionContainer = selectedOption.closest('.question-container');
    const isCorrect = selectedOption.value === "true";

    // Cocher le bouton radio
    selectedOption.checked = true;

    if (isCorrect) {
        selectedOption.classList.add("correct");
        questionContainer.classList.add("question-correct");
        alert("Bonne réponse !");
    } else {
        selectedOption.classList.add("incorrect");
        alert("Mauvaise réponse. Essayez à nouveau !");
    }
}

let climatModeButton = document.getElementById('climatToggle');
climatModeButton.addEventListener('click', function () {
    toggleClimatMode();
    climatModeButton.classList.toggle('on');
});

// Ajoute cette fonction à quiz.js pour créer des flocons de neige
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; // Tu peux utiliser une image à la place si tu préfères

    // Positionne le flocon de manière aléatoire sur la page
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée d'animation aléatoire entre 2 et 5 secondes

    document.body.appendChild(snowflake);

    // Supprime le flocon après un certain temps
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // 5000ms (5 secondes), ajuste selon tes préférences
}

// Ajoute cette fonction pour arrêter la neige
function stopSnowfall() {
    const existingSnowflakes = document.querySelectorAll('.snowflake');
    existingSnowflakes.forEach(snowflake => {
        snowflake.remove(); // Supprime tous les flocons existants
    });
}

// Modifie quiz.js pour ajouter/désactiver la classe climat-mode à chaque balise HTML

let secretCode = ""; // Mot-clé secret à détecter
const secretCodeLength = 6; // Longueur du mot-clé secret
let isClimatMode = false; // Indicateur du mode "climat"
let snowfallInterval; // Variable pour stocker l'ID de l'intervalle de neige

document.addEventListener('keydown', function (event) {
    // Ajoute la touche à la séquence secrète
    secretCode += event.key.toLowerCase();

    // Tronque la séquence secrète si elle est plus longue que la longueur définie
    secretCode = secretCode.slice(-secretCodeLength);

    // Vérifie si la séquence secrète correspond au mot-clé
    if (secretCode === "climat") {
        toggleClimatMode(); // Active/désactive le mode "climat"
        secretCode = ""; // Réinitialise la séquence secrète
    }
});

// Ajoute cette nouvelle fonction pour activer/désactiver le mode climatique
function toggleClimatMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelectorAll('h2');
    const p = document.querySelectorAll('p');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section');
    const divs = document.querySelectorAll('div');

    // Inverse l'état du mode "climat" uniquement pour le header
    isClimatMode = !isClimatMode;

    // Ajoute ou supprime la classe climat-mode en fonction de l'état pour chaque élément spécifique
    body.classList.toggle('climat-mode', isClimatMode);
    header.classList.toggle('climat-mode', isClimatMode);
    nav.classList.toggle('climat-mode', isClimatMode);
    h1.classList.toggle('climat-mode', isClimatMode);

    // Pour chaque élément <h2>
    h2.forEach(heading => {
        heading.classList.toggle('climat-mode', isClimatMode);
    });

    // Pour chaque élément <p>
    p.forEach(paragraph => {
        paragraph.classList.toggle('climat-mode', isClimatMode);
    });

    // Pour le footer
    footer.classList.toggle('climat-mode', isClimatMode);

    // Pour chaque élément <section>
    sections.forEach(section => {
        section.classList.toggle('climat-mode', isClimatMode);
    });

    // Pour chaque élément <div>
    divs.forEach(div => {
        div.classList.toggle('climat-mode', isClimatMode);
    });

    console.log("Toggle climat mode executed. isClimatMode:", isClimatMode);

    // Arrête la neige lorsque le mode climatique est désactivé
    if (!isClimatMode) {
        console.log("Stopping snowfall...");
        stopSnowfall();
    } else {
        console.log("Creating snowflakes...");
        // Crée des flocons de neige lorsque le mode climatique est activé
        for (let i = 0; i < 10; i++) {
            setTimeout(createSnowflake, i * 500); // Ajoute un délai pour chaque flocon
        }
    }
}

// Ajoute cette nouvelle fonction pour arrêter la neige
function stopSnowfall() {
    const existingSnowflakes = document.querySelectorAll('.snowflake');
    existingSnowflakes.forEach(snowflake => {
        snowflake.remove(); // Supprime tous les flocons existants
    });
}