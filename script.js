// ===== Dark / Light Mode =====
function toggleMode(){document.body.classList.toggle("light");}

// ===== بيانات الأنماط =====
const personalities = {
"ISTJ": {desc:"عملي ومنظم، يركز على التفاصيل ويحب الالتزام بالقوانين.", percent:"11–14%", icon:"🗂️", color:"#1abc9c"},
"ISFJ": {desc:"محب للآخرين ومخلص، يهتم بالتفاصيل وحماية من حوله.", percent:"9–14%", icon:"💖", color:"#2ecc71"},
"INFJ": {desc:"مبدع وبصير، يركز على القيم والناس من حوله.", percent:"1–3%", icon:"🌟", color:"#9b59b6"},
"INTJ": {desc:"استراتيجي مستقل، يحلل الأمور بعمق.", percent:"2–4%", icon:"🧠", color:"#34495e"},
"ISTP": {desc:"عملي ومستقل، يحب حل المشكلات والتجربة.", percent:"4–6%", icon:"🔧", color:"#e67e22"},
"ISFP": {desc:"هادئ ومرن، يقدر الجمال ويحب الحرية.", percent:"5–9%", icon:"🎨", color:"#f39c12"},
"INFP": {desc:"مثالي ومبدع، يسعى للمعنى والقيم.", percent:"4–5%", icon:"🌱", color:"#1abc9c"},
"INTP": {desc:"محلل مفكر، يحب النظريات والتفكير المنطقي.", percent:"3–5%", icon:"📘", color:"#2980b9"},
"ESTP": {desc:"واقعي ومغامر، يحب التجربة والعمل العملي.", percent:"4–5%", icon:"🏎️", color:"#e74c3c"},
"ESFP": {desc:"ممتع ومرح، يقدر الحياة الاجتماعية.", percent:"4–9%", icon:"🎉", color:"#f1c40f"},
"ENFP": {desc:"مبدع وحيوي، يحب التحفيز والتغيير.", percent:"6–8%", icon:"🔥", color:"#e67e22"},
"ENTP": {desc:"مخترع ومغامر، يحب التحديات والأفكار الجديدة.", percent:"2–5%", icon:"💡", color:"#d35400"},
"ESTJ": {desc:"منظم وعملي، يحب القيادة والنتائج.", percent:"8–12%", icon:"📋", color:"#3498db"},
"ESFJ": {desc:"محب للآخرين وعملي، يهتم بالانسجام الاجتماعي.", percent:"9–13%", icon:"🤝", color:"#2ecc71"},
"ENFJ": {desc:"ملهم ومؤثر، يهتم بالآخرين ويحب القيادة.", percent:"2–5%", icon:"🌈", color:"#9b59b6"},
"ENTJ": {desc:"قائد بطبعه، منطقي ومخطط استراتيجي.", percent:"2–5%", icon:"🚀", color:"#34495e"}
};

// ===== أسئلة الاختبار =====
const questions = [
{q:"1️⃣ في تجمع كبير:", options:[{text:"تتفاعلي مع عدة أشخاص", value:"E"},{text:"تفضلي شخص أو اثنين", value:"I"}]},
{q:"2️⃣ بعد يوم طويل:", options:[{text:"تحبي تحكي وتخرجي", value:"E"},{text:"تحتاجي وقت وحدك", value:"I"}]},
{q:"3️⃣ في النقاشات:", options:[{text:"تفكري بصوت عالي", value:"E"},{text:"تفكري قبل ما تهدري", value:"I"}]},
{q:"4️⃣ عند اتخاذ القرار:", options:[{text:"تركزين على الحقائق والتفاصيل", value:"S"},{text:"تركزين على الأفكار والاحتمالات", value:"N"}]},
{q:"5️⃣ عند حل المشاكل:", options:[{text:"تحبي الحلول العملية", value:"S"},{text:"تحبي الحلول الإبداعية", value:"N"}]},
{q:"6️⃣ في تقييم الآخرين:", options:[{text:"تستخدمي المنطق والتحليل", value:"T"},{text:"تأخذين المشاعر بعين الاعتبار", value:"F"}]},
{q:"7️⃣ عند المواقف الاجتماعية:", options:[{text:"تحبين الحقائق الموضوعية", value:"T"},{text:"تحبين الدعم والتشجيع", value:"F"}]},
{q:"8️⃣ في تنظيم الوقت:", options:[{text:"تحبين التخطيط والجدول المحدد", value:"J"},{text:"تحبين المرونة وترك الأمور مفتوحة", value:"P"}]},
{q:"9️⃣ عند مواجهة المفاجآت:", options:[{text:"تبحثين عن خطة سريعة", value:"J"},{text:"تتأقلمين مع الوضع بمرونة", value:"P"}]},
{q:"🔟 عند تعلم شيء جديد:", options:[{text:"تحتاجين أمثلة عملية وتطبيقات", value:"S"},{text:"تركزين على المفاهيم والنظريات", value:"N"}]},
{q:"1️⃣1️⃣ في وقت الفراغ:", options:[{text:"تحبين الأنشطة الجماعية", value:"E"},{text:"تحبين الأنشطة الفردية", value:"I"}]},
{q:"1️⃣2️⃣ عند مواجهة مشكلة:", options:[{text:"تحبين التفكير العقلاني", value:"T"},{text:"تحبين مراعاة المشاعر", value:"F"}]},
{q:"1️⃣3️⃣ في الاجتماعات:", options:[{text:"تتحدثين وتشاركين بفاعلية", value:"E"},{text:"تكتفين بالاستماع والملاحظة", value:"I"}]},
{q:"1️⃣4️⃣ عند التخطيط لمستقبلك:", options:[{text:"تحددين أهداف واضحة", value:"J"},{text:"تتركي الأمور مفتوحة وتبحثين عن فرص", value:"P"}]},
{q:"1️⃣5️⃣ عند التعامل مع التفاصيل:", options:[{text:"تنتبهين للتفاصيل الدقيقة", value:"S"},{text:"تركزين على الصورة الكبيرة", value:"N"}]},
{q:"1️⃣6️⃣ في اتخاذ القرارات:", options:[{text:"تعتمدين على التحليل المنطقي", value:"T"},{text:"تعتمدين على مشاعرك وقيمك", value:"F"}]},
{q:"1️⃣7️⃣ عند السفر أو المغامرة:", options:[{text:"تفضلين الذهاب مع مجموعة", value:"E"},{text:"تفضلين التجربة بمفردك", value:"I"}]},
{q:"1️⃣8️⃣ عند التعلم:", options:[{text:"تحتاجين أمثلة واضحة وتطبيق عملي", value:"S"},{text:"تركزين على النظرية والأفكار", value:"N"}]},
{q:"1️⃣9️⃣ عند العمل في مشروع:", options:[{text:"تحبين الالتزام بالجدول والخطة", value:"J"},{text:"تفضلين التعامل مع التغييرات بشكل مرن", value:"P"}]},
{q:"2️⃣0️⃣ في حياتك اليومية:", options:[{text:"تتخذين قراراتك بالمنطق والتحليل", value:"T"},{text:"تتخذين قراراتك بمراعاة المشاعر والعواطف", value:"F"}]}
];

// ===== عرض الأسئلة ديناميكياً =====
let current = 0;
let answers = [];

function showQuestion(){
  if(current >= questions.length){
    calculateResult();
    return;
  }
  const quizDiv = document.getElementById("quiz-container");
  quizDiv.innerHTML = "";

  const qObj = questions[current];
  const qDiv = document.createElement("div");
  qDiv.classList.add("question");

  const qTitle = document.createElement("h3");
  qTitle.textContent = qObj.q;
  qDiv.appendChild(qTitle);

  qObj.options.forEach(opt=>{
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${opt.value}"> ${opt.text}`;
    qDiv.appendChild(label);
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = current === questions.length-1 ? "عرض النتيجة" : "التالي";
  nextBtn.type = "button";
  nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){ alert("اختاري إجابة!"); return; }
    answers.push(selected.value);
    current++;
    updateProgress();
    showQuestion();
  };
  qDiv.appendChild(nextBtn);
  quizDiv.appendChild(qDiv);
}

function updateProgress(){
  const percent = Math.round((current / questions.length) * 100);
  document.getElementById("progress").style.width = percent+"%";
}


function calculateResult(){
  const scores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  answers.forEach(a=>scores[a]++);
  let type="";
  type += scores.E>=scores.I?"E":"I";
  type += scores.S>=scores.N?"S":"N";
  type += scores.T>=scores.F?"T":"F";
  type += scores.J>=scores.P?"J":"P";

  const card = document.getElementById("result");
  card.style.background = personalities[type].color;
  document.getElementById("icon").textContent = personalities[type].icon;
  document.getElementById("type").textContent = type;
  document.getElementById("desc").innerHTML = personalities[type].desc + "<br><strong>نسبة تواجد هذا النمط في العالم:</strong> " + personalities[type].percent;
  card.classList.add("show");
  card.scrollIntoView({behavior:"smooth"});
}


showQuestion();
updateProgress();
