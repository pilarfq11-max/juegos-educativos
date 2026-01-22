let currentMode = 'exacta';
let score = 0;
let correctAnswer;

const displayQ = document.getElementById('display-q');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const modeTitle = document.getElementById('mode-title');

/**
 * Cambia el tipo de ejercicio
 */
function setMode(mode) {
    currentMode = mode;
    modeTitle.innerText = `Modo: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
    generateExercise();
}

/**
 * Genera el ejercicio según el modo
 */
function generateExercise() {
    userInput.value = '';
    feedback.innerText = '';
    
    let a, b;
    
    if (currentMode === 'exacta') {
        b = Math.floor(Math.random() * 8) + 2; // Divisor
        correctAnswer = Math.floor(Math.random() * 10) + 1; // Cociente
        a = b * correctAnswer; // Dividendo
        displayQ.innerText = `${a} ÷ ${b} = `;
        
    } else if (currentMode === 'divisor') {
        correctAnswer = Math.floor(Math.random() * 8) + 2; // El divisor que falta
        let res = Math.floor(Math.random() * 10) + 1; // El cociente
        a = correctAnswer * res;
        displayQ.innerText = `${a} ÷ __ = ${res}`;
        
    } else if (currentMode === 'resto') {
        a = Math.floor(Math.random() * 50) + 10;
        b = Math.floor(Math.random() * 7) + 3;
        correctAnswer = a % b; // Calculamos el resto
        displayQ.innerText = `Resto de ${a} ÷ ${b}`;
    }
}

function checkAnswer() {
    if (parseInt(userInput.value) === correctAnswer) {
        score += 10;
        feedback.innerText = "¡Excelente trabajo! 🎯";
        feedback.style.color = "green";
        scoreDisplay.innerText = score;
        setTimeout(generateExercise, 1200);
    } else {
        feedback.innerText = "Sigue intentando 💡";
        feedback.style.color = "red";
    }
}

document.getElementById('check-btn').addEventListener('click', checkAnswer);
generateExercise(); // Iniciar primer ejercicio