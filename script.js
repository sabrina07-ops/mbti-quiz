const PERSONALITY_REGISTRY = {
    "ISTJ": { desc: "Practical and organized. Focuses on details, structural integrity, and deep reliability.", percent: "11–14%", color: "#1abc9c" },
    "ISFJ": { desc: "Compassionate and loyal. Dedicated to protecting environments and supporting others meticulously.", percent: "9–14%", color: "#2ecc71" },
    "INFJ": { desc: "Idealistic and visionary. Driven by profound core values and structural human insights.", percent: "1–3%", color: "#9b59b6" },
    "INTJ": { desc: "Strategic and independent thinker. Driven by analytical systems and logical depth.", percent: "2–4%", color: "#34495e" },
    "ISTP": { desc: "Pragmatic and independent. Exceptional at technical troubleshooting and experimental logic.", percent: "4–6%", color: "#e67e22" },
    "ISFP": { desc: "Observant and flexible. Deep appreciation for aesthetics, autonomy, and personal values.", percent: "5–9%", color: "#f39c12" },
    "INFP": { desc: "Altruistic and creative. Constantly seeking systemic meaning and core alignment.", percent: "4–5%", color: "#1abc9c" },
    "INTP": { desc: "Analytical theoretician. Highly focused on conceptual architectures and objective logic.", percent: "3–5%", color: "#2980b9" },
    "ESTP": { desc: "Action-oriented and adaptive. Excels in dynamic environments requiring immediate tactical solutions.", percent: "4–5%", color: "#e74c3c" },
    "ESFP": { desc: "Spontaneous and highly social. Energized by experiential learning and collaboration.", percent: "4–9%", color: "#f1c40f" },
    "ENFP": { desc: "Innovative and energetic. Thrives on strategic possibilities, dynamic change, and novelty.", percent: "6–8%", color: "#e67e22" },
    "ENTP": { desc: "Resourceful and analytical. Exceptional at exploring abstract concepts and strategic challenges.", percent: "2–5%", color: "#d35400" },
    "ESTJ": { desc: "Systematic and results-driven. Focuses on execution, standard operating procedures, and leadership.", percent: "8–12%", color: "#3498db" },
    "ESFJ": { desc: "Cooperative and structured. Prioritizes social harmony, operational order, and community welfare.", percent: "9–13%", color: "#2ecc71" },
    "ENFJ": { desc: "Inspiring and collaborative. Natural leader focused on human optimization and team cohesion.", percent: "2–5%", color: "#9b59b6" },
    "ENTJ": { desc: "Decisive and strategic commander. Natural corporate planner focused on system efficiency.", percent: "2–5%", color: "#34495e" }
};

const ASSESSMENT_DATASET = [
    { q: "In large social gatherings, you tend to:", options: [{ text: "Interact with a wide network of individuals", value: "E" }, { text: "Engage deeply with a select few", value: "I" }] },
    { q: "Following a prolonged operational day, you typically:", options: [{ text: "Recharge through external activities or conversations", value: "E" }, { text: "Require solitary time to restore energy", value: "I" }] },
    { q: "During brainstorming sessions, you generally:", options: [{ text: "Formulate ideas out loud iteratively", value: "E" }, { text: "Process concepts internally before speaking", value: "I" }] },
    { q: "When evaluating data for a critical decision, you prioritize:", options: [{ text: "Concrete facts and immediate details", value: "S" }, { text: "Abstract patterns and future possibilities", value: "N" }] },
    { q: "When solving problems, your default methodology leans toward:", options: [{ text: "Practical, proven solutions", value: "S" }, { text: "Innovative, theoretical frameworks", value: "N" }] },
    { q: "When delivering peer evaluations, you base judgments on:", options: [{ text: "Objective logic and detached analysis", value: "T" }, { text: "Interpersonal dynamics and subjective impact", value: "F" }] },
    { q: "In collaborative environments, you primarily seek:", options: [{ text: "Objective validation and critical feedback", value: "T" }, { text: "Empathetic alignment and encouragement", value: "F" }] },
    { q: "Your approach to workflow and time management is:", options: [{ text: "Highly structured with predefined schedules", value: "J" }, { text: "Adaptive with open-ended flexibility", value: "P" }] },
    { q: "When confronted with unexpected operational shifts, you:", options: [{ text: "Immediately construct a backup plan", value: "J" }, { text: "Fluidly adjust to the situation as it unfolds", value: "P" }] },
    { q: "When acquiring a complex new skill, you prefer to focus on:", options: [{ text: "Direct empirical examples and hands-on usage", value: "S" }, { text: "Broad architectural theories and abstractions", value: "N" }] },
    { q: "During downtime, you feel most aligned when participating in:", options: [{ text: "Group-centric activities", value: "E" }, { text: "Independent, isolated pursuits", value: "I" }] },
    { q: "When resolving architectural or logic disputes, you emphasize:", options: [{ text: "Rational consistency and analytics", value: "T" }, { text: "Team sentiments and personal values", value: "F" }] },
    { q: "In corporate or academic meetings, you generally:", options: [{ text: "Speak early and drive active dialogue", value: "E" }, { text: "Listen carefully and document observations", value: "I" }] },
    { q: "When defining long-term milestones, you lean toward:", options: [{ text: "Rigid roadmap metrics and explicit timelines", value: "J" }, { text: "Agile checkpoints that allow organic pivots", value: "P" }] },
    { q: "When reviewing systemic components, your focus is caught by:", options: [{ text: "Granular details and micro-errors", value: "S" }, { text: "The overarching architecture and macro-vision", value: "N" }] },
    { q: "Your overarching decision-making engine relies on:", options: [{ text: "Structured analytical deduction", value: "T" }, { text: "Alignment with core human values", value: "F" }] },
    { q: "When exploring unfamiliar domains, you prefer to:", options: [{ text: "Navigate alongside an organized group", value: "E" }, { text: "Analyze and experience the domain autonomously", value: "I" }] },
    { q: "When processing onboarding documentation, you demand:", options: [{ text: "Step-by-step practical implementation steps", value: "S" }, { text: "Conceptual diagrams and structural context", value: "N" }] },
    { q: "While executing tasks within a team sprint, you prefer:", options: [{ text: "Adhering strictly to standard sprint guidelines", value: "J" }, { text: "Refactoring goals dynamically based on new factors", value: "P" }] },
    { q: "In daily professional life, your actions are driven by:", options: [{ text: "Data-backed logical deduction", value: "T" }, { text: "Contextual emotional intelligence", value: "F" }] }
];

let currentQuestionIndex = 0;
const userAnswersCollection = [];

function renderQuestion() {
    if (currentQuestionIndex >= ASSESSMENT_DATASET.length) {
        processAssessmentResults();
        return;
    }

    const container = document.getElementById("quiz-container");
    if (!container) return;
    container.innerHTML = "";

    const dataModel = ASSESSMENT_DATASET[currentQuestionIndex];
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-block");

    const header = document.createElement("h3");
    header.classList.add("question-text");
    header.textContent = `${currentQuestionIndex + 1}. ${dataModel.q}`;
    questionWrapper.appendChild(header);

    dataModel.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        optionLabel.classList.add("option-container");
        
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "mbti-option";
        radioInput.value = option.value;
        radioInput.id = `opt-${index}`;

        const textSpan = document.createElement("span");
        textSpan.classList.add("option-text");
        textSpan.textContent = option.text;

        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(textSpan);
        questionWrapper.appendChild(optionLabel);
    });

    const actionButton = document.createElement("button");
    actionButton.textContent = currentQuestionIndex === ASSESSMENT_DATASET.length - 1 ? "Calculate Results" : "Next Question";
    actionButton.type = "button";
    actionButton.classList.add("btn-primary");
    
    actionButton.onclick = () => {
        const checkedNode = document.querySelector('input[name="mbti-option"]:checked');
        if (!checkedNode) { 
            alert("Action Required: Please make a selection to proceed."); 
            return; 
        }
        userAnswersCollection.push(checkedNode.value);
        currentQuestionIndex++;
        updateProgressBar();
        renderQuestion();
    };

    questionWrapper.appendChild(actionButton);
    container.appendChild(questionWrapper);
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress");
    if (!progressBar) return;
    const progressPercentage = Math.round((currentQuestionIndex / ASSESSMENT_DATASET.length) * 100);
    progressBar.style.width = `${progressPercentage}%`;
}

function processAssessmentResults() {
    const container = document.getElementById("quiz-container");
    if (container) container.innerHTML = "";

    const metricScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    userAnswersCollection.forEach(vector => metricScores[vector]++);

    let calculatedType = "";
    calculatedType += metricScores.E >= metricScores.I ? "E" : "I";
    calculatedType += metricScores.S >= metricScores.N ? "S" : "N";
    calculatedType += metricScores.T >= metricScores.F ? "T" : "F";
    calculatedType += metricScores.J >= metricScores.P ? "J" : "P";

    const targetProfile = PERSONALITY_REGISTRY[calculatedType];
    const resultCard = document.getElementById("result");
    
    if (!resultCard) return;

    resultCard.style.backgroundColor = targetProfile.color;
    
    const typeElement = document.getElementById("type");
    const descElement = document.getElementById("desc");

    if (typeElement) typeElement.textContent = calculatedType;
    if (descElement) {
        descElement.innerHTML = `${targetProfile.desc}<br><br><strong>Global Frequency:</strong> ${targetProfile.percent}`;
    }

    resultCard.classList.add("show");
    resultCard.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    renderQuestion();
    updateProgressBar();

    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
        });
    }
});
