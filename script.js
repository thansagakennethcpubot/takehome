// Neon Quiz logic (simplified for GitHub Pages)
const questions = [
  { q: "A viral post is always true.", a: false, e: "Virality ≠ truth." },
  { q: "Reverse image search can verify sources.", a: true, e: "Exactly! It often reveals the original context." }
];

const startBtn = document.getElementById("startBtn");
const quizArea = document.getElementById("quizArea");
const startScreen = document.getElementById("startScreen");
const questionEl = document.getElementById("question");
const btnTrue = document.getElementById("btnTrue");
const btnFalse = document.getElementById("btnFalse");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const endArea = document.getElementById("endArea");
const finalText = document.getElementById("finalText");
const restartBtn = document.getElementById("restartBtn");
const playerNameInput = document.getElementById("playerName");

let idx = 0, score = 0;

function startQuiz() {
  const name = playerNameInput.value.trim();
  if (!name) return alert("Enter your name first!");
  startScreen.style.display = "none";
  quizArea.style.display = "block";
  idx = 0; score = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[idx];
  questionEl.textContent = `${idx + 1}. ${q.q}`;
  feedback.textContent = "";
  btnTrue.disabled = btnFalse.disabled = false;
  nextBtn.style.display = "none";
}

function handleAnswer(isTrue) {
  const q = questions[idx];
  const correct = q.a === isTrue;
  feedback.textContent = correct ? `✅ ${q.e}` : `❌ ${q.e}`;
  feedback.style.color = correct ? "limegreen" : "tomato";
  if (correct) score++;
  btnTrue.disabled = btnFalse.disabled = true;
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  idx++;
  if (idx < questions.length) loadQuestion();
  else finishQuiz();
}

function finishQuiz() {
  quizArea.style.display = "none";
  endArea.style.display = "block";
  finalText.textContent = `You scored ${score}/${questions.length}`;
}

function restart() {
  endArea.style.display = "none";
  startScreen.style.display = "block";
  playerNameInput.value = "";
}

startBtn.addEventListener("click", startQuiz);
btnTrue.addEventListener("click", () => handleAnswer(true));
btnFalse.addEventListener("click", () => handleAnswer(false));
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restart);
