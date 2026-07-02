const TRANSLATIONS = {
    en: {
        title: "MBTI Personality Assessment",
        subtitle: "Select the option that best describes your behavior. There are no right or wrong answers.",
        alert: "Action Required: Please make a selection to proceed.",
        nextBtn: "Next Question",
        calcBtn: "Calculate Results",
        frequency: "Global Frequency:"
    },
    ar: {
        title: "اختبار الأنماط الشخصية MBTI",
        subtitle: "اختاري الإجابة الأقرب لكِ، لا يوجد صح أو خطأ في الإجابات.",
        alert: "تنبيه: يرجى اختيار إجابة واحدة للمتابعة.",
        nextBtn: "السؤال التالي",
        calcBtn: "عرض النتيجة",
        frequency: "نسبة التواجد في العالم:"
    }
};

const PERSONALITY_REGISTRY = {
    "INTJ": { 
        color: "#6b21a8",
        en: "Strategic and independent thinker. Driven by analytical systems and logical depth.",
        ar: "العقل المدبر: مفكر استراتيجي ومستقل، مدفوع بالأنظمة التحليلية والعمق المنطقي.",
        percent: "2–4%"
    },
    "INTP": { 
        color: "#6b21a8",
        en: "Analytical theoretician. Highly focused on conceptual architectures and objective logic.",
        ar: "المهندس: مفكر تحليلي ونظري، يركز بقوة على البنى المفاهيمية والمنطق الموضوعي.",
        percent: "3–5%"
    },
    "ENTJ": { 
        color: "#6b21a8",
        en: "Decisive and strategic commander. Natural corporate planner focused on system efficiency.",
        ar: "القائد: قائد استراتيجي وحاسم بطبعه، يركز على كفاءة الأنظمة والتخطيط بعيد المدى.",
        percent: "2–5%"
    },
    "ENTP": { 
        color: "#6b21a8",
        en: "Resourceful and analytical. Exceptional at exploring abstract concepts and strategic challenges.",
        ar: "المحاور: ذكي وواسع الحيلة، استثنائي في استكشاف المفاهيم المجردة والتحديات الاستراتيجية.",
        percent: "2–5%"
    },
    "INFJ": { 
        color: "#166534",
        en: "Idealistic and visionary. Driven by profound core values and structural human insights.",
        ar: "المستشار: مثالي وصاحب رؤية، مدفوع بقيم راسخة وبصيرة عميقة في فهم الطبيعة البشرية.",
        percent: "1–3%"
    },
    "INFP": { 
        color: "#166534",
        en: "Altruistic and creative. Constantly seeking systemic meaning and core alignment.",
        ar: "المعالج: مثالي ومبدع، يسعى دائماً وراء المعنى العميق والتوافق مع قيمه المبدئية.",
        percent: "4–5%"
    },
    "ENFJ": { 
        color: "#166534",
        en: "Inspiring and collaborative. Natural leader focused on human optimization and team cohesion.",
        ar: "البطل: ملهم ومتعاون، قائد بطبعه يركز على تطوير الأفراد وتماسك فريق العمل.",
        percent: "2–5%"
    },
    "ENFP": { 
        color: "#166534",
        en: "Innovative and energetic. Thrives on strategic possibilities, dynamic change, and novelty.",
        ar: "المناضل: مبتكر وحيوي، يزدهر في بيئات الاحتمالات الاستراتيجية والتغيير الديناميكي.",
        percent: "6–8%"
    },
    "ISTJ": { 
        color: "#1e3a8a",
        en: "Practical and organized. Focuses on details, structural integrity, and deep reliability.",
        ar: "اللوجستي: عملي ومنظم للغاية، يركز على التفاصيل، سلامة الهيكل، والموثوقية العالية.",
        percent: "11–14%"
    },
    "ISFJ": { 
        color: "#1e3a8a",
        en: "Compassionate and loyal. Dedicated to protecting environments and supporting others meticulously.",
        ar: "المدافع: متفانٍ ومخلص، ملتزم بحماية من حوله ودعم الآخرين بدقة وعناية فائقة.",
        percent: "9–14%"
    },
    "ESTJ": { 
        color: "#1e3a8a",
        en: "Systematic and results-driven. Focuses on execution, standard operating procedures, and leadership.",
        ar: "المشرف: منظم وموجه نحو النتائج، يركز على التنفيذ، إجراءات العمل القياسية، والقيادة.",
        percent: "8–12%"
    },
    "ESFJ": { 
        color: "#1e3a8a",
        en: "Competitive and structured. Prioritizes social harmony, operational order, and community welfare.",
        ar: "القنصل: متعاون وهيكلي، يضع الانسجام الاجتماعي، النظام العملياتي، ومصلحة الجماعة كأولوية.",
        percent: "9–13%"
    },
    "ISTP": { 
        color: "#b45309",
        en: "Pragmatic and independent. Exceptional at technical troubleshooting and experimental logic.",
        ar: "الفنان الميكانيكي: واقعي ومستقل، بارع في حل المشكلات التقنية وتطبيق المنطق التجريبي.",
        percent: "4–6%"
    },
    "ISFP": { 
        color: "#b45309",
        en: "Observant and flexible. Deep appreciation for aesthetics, autonomy, and personal values.",
        ar: "المغامر: مرن وملاحظ، يمتلك تقديراً عميقاً للجماليات، الاستقلالية، والقيم الشخصية.",
        percent: "5–9%"
    },
    "ESTP": { 
        color: "#b45309",
        en: "Action-oriented and adaptive. Excels in dynamic environments requiring immediate tactical solutions.",
        ar: "الـرائد: عملي ومرن، يتفوق في البيئات الديناميكية التي تتطلب حلولاً تكتيكية فورية.",
        percent: "4–5%"
    },
    "ESFP": { 
        color: "#b45309",
        en: "Spontaneous and highly social. Energized by experiential learning and collaboration.",
        ar: "المسلي: عفوي واجتماعي للغاية، يستمد طاقته من التعلم التجريبي والعمل التشاركي الممتع.",
        percent: "4–9%"
    }
};

const ASSESSMENT_DATASET = [
    {
        en: { q: "In large social gatherings, you tend to:", options: [{ text: "Interact with a wide network of individuals", value: "E" }, { text: "Engage deeply with a select few", value: "I" }] },
        ar: { q: "في التجمعات الاجتماعية الكبيرة، تميلين عادة إلى:", options: [{ text: "التفاعل مع شبكة واسعة من الأشخاص الجدد", value: "E" }, { text: "التواصل العميق مع عدد قليل ومحدد من الأشخاص", value: "I" }] }
    },
    {
        en: { q: "Following a prolonged operational day, you typically:", options: [{ text: "Recharge through external activities or conversations", value: "E" }, { text: "Require solitary time to restore energy", value: "I" }] },
        ar: { q: "بعد نهاية يوم عمل طويل وشاق، تفضلين غالباً:", options: [{ text: "استعادة طاقتك عبر الأنشطة الخارجية والمحادثات", value: "E" }, { text: "قضاء وقت هادئ بمفردك لشحن طاقتك من جديد", value: "I" }] }
    },
    {
        en: { q: "During brainstorming sessions, you generally:", options: [{ text: "Formulate ideas out loud iteratively", value: "E" }, { text: "Process concepts internally before speaking", value: "I" }] },
        ar: { q: "أثناء جلسات العصف الذهني وتبادل الأفكار، تقومين بـ:", options: [{ text: "التفكير بصوت عالٍ ومشاركة الأفكار مباشرة أثناء تشكلها", value: "E" }, { text: "معالجة المفاهيم وتحليلها داخلياً قبل التحدث بها", value: "I" }] }
    },
    {
        en: { q: "When evaluating data for a critical decision, you prioritize:", options: [{ text: "Concrete facts and immediate details", value: "S" }, { text: "Abstract patterns and future possibilities", value: "N" }] },
        ar: { q: "عند مراجعة البيانات لاتخاذ قرار حاسم، تركزين أولاً على:", options: [{ text: "الحقائق الملموسة والتفاصيل الراهنة المباشرة", value: "S" }, { text: "الأنماط المجردة، الروابط، والاحتمالات المستقبلية", value: "N" }] }
    },
    {
        en: { q: "When solving problems, your default methodology leans toward:", options: [{ text: "Practical, proven solutions", value: "S" }, { text: "Innovative, theoretical frameworks", value: "N" }] },
        ar: { q: "عند مواجهة مشكلة معقدة، منهجيتك الافتراضية للحل تميل إلى:", options: [{ text: "تطبيق حلول عملية ومجربة مسبقاً", value: "S" }, { text: "ابتكار أطر عمل نظرية جديدة وإبداعية", value: "N" }] }
    },
    {
        en: { q: "When delivering peer evaluations, you base judgments on:", options: [{ text: "Objective logic and detached analysis", value: "T" }, { text: "Interpersonal dynamics and subjective impact", value: "F" }] },
        ar: { q: "عند تقييم أداء الزملاء، تبنين أحكامكِ على:", options: [{ text: "المنطق الموضوعي والتحليل الحيادي البحت", value: "T" }, { text: "العلاقات الإنسانية ومدى التأثير النفسي للقرار", value: "F" }] }
    },
    {
        en: { q: "In collaborative environments, you primarily seek:", options: [{ text: "Objective validation and critical feedback", value: "T" }, { text: "Empathetic alignment and encouragement", value: "F" }] },
        ar: { q: "في بيئات العمل التشاركية، تبحثين في المقام الأول عن:", options: [{ text: "التحقق الموضوعي والنقد البناء للأفكار", value: "T" }, { text: "التوافق الإنساني والدعم المعنوي والتشجيع", value: "F" }] }
    },
    {
        en: { q: "Your approach to workflow and time management is:", options: [{ text: "Highly structured with predefined schedules", value: "J" }, { text: "Adaptive with open-ended flexibility", value: "P" }] },
        ar: { q: "طريقتكِ النموذجية في إدارة الوقت وجدول العمل تكون:", options: [{ text: "منظمة جداً ومبنية على جداول وخطط محددة سلفاً", value: "J" }, { text: "مرنة وقابلة للتكيف مع ترك الخيارات مفتوحة", value: "P" }] }
    },
    {
        en: { q: "When confronted with unexpected operational shifts, you:", options: [{ text: "Immediately construct a backup plan", value: "J" }, { text: "Fluidly adjust to the situation as it unfolds", value: "P" }] },
        ar: { q: "عند حدوث تغييرات طارئة وغير متوقعة في خطة العمل:", options: [{ text: "تقومين فوراً بصياغة خطة بديلة ومنظمة لتدارك الوضع", value: "J" }, { text: "تتأقلمين بسلاسة مع الموقف وتتعاملين معه خطوة بخطوة", value: "P" }] }
    },
    {
        en: { q: "When acquiring a complex new skill, you prefer to focus on:", options: [{ text: "Direct empirical examples and hands-on usage", value: "S" }, { text: "Broad architectural theories and abstractions", value: "N" }] },
        ar: { q: "عند تعلم مهارة جديدة ومعقدة، تفضلين التركيز على:", options: [{ text: "الأمثلة التطبيقية المباشرة والممارسة العملية الفورية", value: "S" }, { text: "النظريات العامة، المفاهيم، والسياق المعماري للمهارة", value: "N" }] }
    },
    {
        en: { q: "During downtime, you feel most aligned when participating in:", options: [{ text: "Group-centric activities", value: "E" }, { text: "Independent, isolated pursuits", value: "I" }] },
        ar: { q: "في أوقات الفراغ، تجدين نفسكِ أكثر انسجاماً عند مشاركتك في:", options: [{ text: "أنشطة جماعية وتفاعلات مع الآخرين", value: "E" }, { text: "اهتمامات فردية ومشاريع مستقلة وخاصة", value: "I" }] }
    },
    {
        en: { q: "When resolving architectural or logic disputes, you emphasize:", options: [{ text: "Rational consistency and analytics", value: "T" }, { text: "Team sentiments and personal values", value: "F" }] },
        ar: { q: "عند حل النزاعات التقنية أو المنطقية، تركزين على:", options: [{ text: "الاتساق العقلاني، التحليل، وصحة البيانات", value: "T" }, { text: "مشاعر الفريق، القيم الشخصية، والمحافظة على الود", value: "F" }] }
    },
    {
        en: { q: "In corporate or academic meetings, you generally:", options: [{ text: "Speak early and drive active dialogue", value: "E" }, { text: "Listen carefully and document observations", value: "I" }] },
        ar: { q: "في الاجتماعات المهنية أو الأكاديمية، غالباً ما تقومين بـ:", options: [{ text: "التحدث في وقت مبكر وقيادة الحوار بفاعلية", value: "E" }, { text: "الاستماع بعناية وتدوين الملاحظات قبل التعليق", value: "I" }] }
    },
    {
        en: { q: "When defining long-term milestones, you lean toward:", options: [{ text: "Rigid roadmap metrics and explicit timelines", value: "J" }, { text: "Agile checkpoints that allow organic pivots", value: "P" }] },
        ar: { q: "عند تحديد الأهداف والمستهدفات بعيدة المدى، تفضلين:", options: [{ text: "خارطة طريق صارمة ذات مؤشرات أداء وتواريخ واضحة", value: "J" }, { text: "نقاط فحص مرنة تتيح لكِ تغيير الاتجاه بشكل طبيعي", value: "P" }] }
    },
    {
        en: { q: "When reviewing systemic components, your focus is caught by:", options: [{ text: "Granular details and micro-errors", value: "S" }, { text: "The overarching architecture and macro-vision", value: "N" }] },
        ar: { q: "عند مراجعة مكونات مشروع ما، ما يلفت انتباهك فوراً هو:", options: [{ text: "التفاصيل الدقيقة جداً والأخطاء البرمجية الصغيرة", value: "S" }, { text: "البنية البرمجية العامة للمشروع والرؤية الكلية", value: "N" }] }
    },
    {
        en: { q: "Your overarching decision-making engine relies on:", options: [{ text: "Structured analytical deduction", value: "T" }, { text: "Alignment with core human values", value: "F" }] },
        ar: { q: "محرك اتخاذ القرار الأساسي لديكِ يعتمد بشكل رئيسي على:", options: [{ text: "الاستنتاج التحليلي الممنهج والمعادلات المنطقية", value: "T" }, { text: "التوافق التام مع القيم والمبادئ الإنسانية الأساسية", value: "F" }] }
    },
    {
        en: { q: "When exploring unfamiliar domains, you prefer to:", options: [{ text: "Navigate alongside an organized group", value: "E" }, { text: "Analyze and experience the domain autonomously", value: "I" }] },
        ar: { q: "عند استكشاف مجالات أو بيئات جديدة كلياً، تفضلين:", options: [{ text: "التحرك والاستكشاف برفقة مجموعة منظمة", value: "E" }, { text: "تحليل وتجربة المجال بمفردك وبشكل مستقل", value: "I" }] }
    },
    {
        en: { q: "When processing onboarding documentation, you demand:", options: [{ text: "Step-by-step practical implementation steps", value: "S" }, { text: "Conceptual diagrams and structural context", value: "N" }] },
        ar: { q: "عند قراءة المستندات التعريفية والتعليمات البرمجية، تحتاجين إلى:", options: [{ text: "خطوات تطبيقية عملية ومباشرة ومكتوبة بالتفصيل", value: "S" }, { text: "مخططات مفاهيمية تشرح السياق العام للبنية والأفكار", value: "N" }] }
    },
    {
        en: { q: "While executing tasks within a team sprint, you prefer:", options: [{ text: "Adhering strictly to standard sprint guidelines", value: "J" }, { text: "Refactoring goals dynamically based on new factors", value: "P" }] },
        ar: { q: "أثناء تنفيذ المهام البرمجية في الفريق (Sprint)، تفضلين:", options: [{ text: "الالتزام الصارم بالإرشادات والجداول المحددة مسبقاً", value: "J" }, { text: "إعادة هيكلة الأهداف ديناميكياً بناءً على المعطيات الجديدة", value: "P" }] }
    },
    {
        en: { q: "In daily professional life, your actions are driven by:", options: [{ text: "Data-backed logical deduction", value: "T" }, { text: "Contextual emotional intelligence", value: "F" }] },
        ar: { q: "في حياتكِ اليومية والمهنية، تصرفاتك تكون مدفوعة بـ:", options: [{ text: "الاستنتاج المنطقي المدعوم بالبيانات والأرقام", value: "T" }, { text: "الذكاء العاطفي ومراعاة سياق المشاعر الإنسانية", value: "F" }] }
    }
];

let currentQuestionIndex = 0;
const userAnswersCollection = [];
let currentLang = "en";

function renderQuestion() {
    if (currentQuestionIndex >= ASSESSMENT_DATASET.length) {
        processAssessmentResults();
        return;
    }

    const container = document.getElementById("quiz-container");
    if (!container) return;
    container.innerHTML = "";

    const dataModel = ASSESSMENT_DATASET[currentQuestionIndex][currentLang];
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

        if (userAnswersCollection[currentQuestionIndex] === option.value) {
            radioInput.checked = true;
        }

        const textSpan = document.createElement("span");
        textSpan.classList.add("option-text");
        textSpan.textContent = option.text;

        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(textSpan);
        questionWrapper.appendChild(optionLabel);
    });

    const actionButton = document.createElement("button");
    actionButton.textContent = currentQuestionIndex === ASSESSMENT_DATASET.length - 1 ? TRANSLATIONS[currentLang].calcBtn : TRANSLATIONS[currentLang].nextBtn;
    actionButton.type = "button";
    actionButton.classList.add("btn-primary");
    
    actionButton.onclick = () => {
        const checkedNode = document.querySelector('input[name="mbti-option"]:checked');
        if (!checkedNode) { 
            alert(TRANSLATIONS[currentLang].alert); 
            return; 
        }
        userAnswersCollection[currentQuestionIndex] = checkedNode.value;
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
        descElement.innerHTML = `${targetProfile[currentLang]}<br><br><strong>${TRANSLATIONS[currentLang].frequency}</strong> ${targetProfile.percent}`;
    }

    resultCard.classList.add("show");
    resultCard.scrollIntoView({ behavior: "smooth" });
}

function updateStaticUIStrings() {
    document.getElementById("main-title").textContent = TRANSLATIONS[currentLang].title;
    document.getElementById("main-subtitle").textContent = TRANSLATIONS[currentLang].subtitle;
    document.getElementById("translate-btn").textContent = currentLang === "en" ? "العربية" : "English";
    
    if (currentLang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
    }
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

    const translateBtn = document.getElementById("translate-btn");
    if (translateBtn) {
        translateBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "ar" : "en";
            updateStaticUIStrings();
            if (currentQuestionIndex < ASSESSMENT_DATASET.length) {
                renderQuestion();
            } else {
                processAssessmentResults();
            }
        });
    }
});
