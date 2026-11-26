// ===============================
// 1. INTERNET HISTORY
// ===============================

const historyData = {
  1969: {
    title: {
      en: "The First Connection",
      ar: "أول اتصال"
    },
    text: {
      en: "In 1969, ARPANET connected computers at different research institutions. The first message was sent between UCLA and Stanford Research Institute.",
      ar: "في عام 1969، ربطت شبكة ARPANET حواسيب في مؤسسات بحثية مختلفة. وأُرسلت أول رسالة بين جامعة كاليفورنيا ومعهد ستانفورد للأبحاث."
    }
  },

  1973: {
    title: {
      en: "The Internet Goes International",
      ar: "الإنترنت يتجاوز الحدود"
    },
    text: {
      en: "ARPANET began making connections beyond the United States, helping the network grow internationally.",
      ar: "بدأت شبكة ARPANET في إنشاء اتصالات خارج الولايات المتحدة، مما ساعد على توسع الشبكة دولياً."
    }
  },

  1983: {
    title: {
      en: "A New Internet Language",
      ar: "لغة جديدة للإنترنت"
    },
    text: {
      en: "On January 1, 1983, ARPANET adopted TCP/IP, an important step toward the modern Internet.",
      ar: "في 1 يناير 1983، اعتمدت ARPANET بروتوكول TCP/IP، وهي خطوة مهمة نحو الإنترنت الحديث."
    }
  },

  1989: {
    title: {
      en: "The World Wide Web Idea",
      ar: "فكرة الشبكة العالمية"
    },
    text: {
      en: "Tim Berners-Lee proposed the World Wide Web at CERN, creating the idea of connected pages and information.",
      ar: "اقترح تيم بيرنرز لي فكرة الشبكة العالمية في مركز CERN، لتظهر فكرة صفحات المعلومات المترابطة."
    }
  },

  1991: {
    title: {
      en: "The First Website",
      ar: "أول موقع إلكتروني"
    },
    text: {
      en: "The World Wide Web became publicly available beyond its original research environment. The first website explained how the Web worked.",
      ar: "أصبحت الشبكة العالمية متاحة خارج بيئتها البحثية الأصلية. وكان أول موقع يشرح كيفية عمل الويب."
    }
  },

  1993: {
    title: {
      en: "The Web Opens to Everyone",
      ar: "الويب يصبح متاحاً للجميع"
    },
    text: {
      en: "CERN made the Web software available without royalties, helping the Web spread around the world.",
      ar: "أتاح مركز CERN برنامج الويب دون حقوق ملكية، مما ساعد على انتشاره في العالم."
    }
  },

  2000: {
    title: {
      en: "The Social Internet",
      ar: "الإنترنت الاجتماعي"
    },
    text: {
      en: "The Internet became more interactive. Blogs, online communities, and new digital services changed how people communicated.",
      ar: "أصبح الإنترنت أكثر تفاعلاً. وغيّرت المدونات والمجتمعات الإلكترونية والخدمات الرقمية طريقة تواصل الناس."
    }
  },

  2010: {
    title: {
      en: "The Mobile Revolution",
      ar: "ثورة الهواتف الذكية"
    },
    text: {
      en: "Smartphones and mobile apps made the Internet part of everyday life. People could connect almost anywhere.",
      ar: "جعلت الهواتف الذكية والتطبيقات الإنترنت جزءاً من الحياة اليومية، وأصبح بإمكان الناس الاتصال من أماكن كثيرة."
    }
  },

  2020: {
    title: {
      en: "A Connected World",
      ar: "عالم متصل"
    },
    text: {
      en: "Online education, video meetings, digital services, and artificial intelligence became increasingly important.",
      ar: "أصبح التعليم عن بعد والاجتماعات المرئية والخدمات الرقمية والذكاء الاصطناعي أكثر أهمية."
    }
  },

  2050: {
    title: {
      en: "The Internet of the Future",
      ar: "إنترنت المستقبل"
    },
    text: {
      en: "Imagine smarter digital assistants, immersive virtual worlds, and faster connections. These are possible ideas, not confirmed predictions.",
      ar: "تخيل مساعدين رقميين أكثر ذكاءً وعوالم افتراضية واتصالات أسرع. هذه أفكار محتملة وليست تنبؤات مؤكدة."
    }
  }
};

let currentLanguage = "en";

// ===============================
// 2. TIMELINE
// ===============================

const timelineButtons = document.getElementById("timelineButtons");

function showHistory(year) {
  const item = historyData[year];

  document.getElementById("historyYear").textContent = year;
  document.getElementById("historyTitle").textContent =
    item.title[currentLanguage];

  document.getElementById("historyText").textContent =
    item.text[currentLanguage];

  document.querySelectorAll(".year-btn").forEach(button => {
    button.classList.toggle(
      "active",
      Number(button.dataset.year) === Number(year)
    );
  });
}

Object.keys(historyData).forEach(year => {
  const button = document.createElement("button");

  button.className = "year-btn";
  button.textContent = year;
  button.dataset.year = year;

  button.addEventListener("click", () => {
    showHistory(year);
  });

  timelineButtons.appendChild(button);
});

showHistory(1969);

// ===============================
// 3. TIME MACHINE
// ===============================

document.getElementById("travelBtn").addEventListener("click", () => {
  const year = document.getElementById("yearSelect").value;

  showHistory(year);

  const item = historyData[year];

  const message = currentLanguage === "en"
    ? `🚀 Welcome to ${year}! ${item.text.en}`
    : `🚀 مرحباً بك في عام ${year}! ${item.text.ar}`;

  document.getElementById("travelResult").textContent = message;

  document.getElementById("timeline").scrollIntoView({
    behavior: "smooth"
  });
});

// ===============================
// 4. LANGUAGE SWITCHER
// ===============================

const languageBtn = document.getElementById("languageBtn");

function changeLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  languageBtn.textContent =
    currentLanguage === "en" ? "AR" : "EN";

  document.querySelectorAll("[data-en]").forEach(element => {
    element.innerHTML = element.dataset[currentLanguage];
  });

  const selectedYear = document.getElementById("yearSelect").value;

  showHistory(selectedYear);
  showQuestion();
}

languageBtn.addEventListener("click", changeLanguage);

// ===============================
// 5. QUIZ QUESTIONS
// ===============================

const questions = [
  {
    question: {
      en: "In which year did ARPANET send its first message?",
      ar: "في أي سنة أرسلت شبكة ARPANET أول رسالة؟"
    },
    answers: {
      en: ["1969", "1983", "1991", "2000"],
      ar: ["1969", "1983", "1991", "2000"]
    },
    correct: 0
  },

  {
    question: {
      en: "Who proposed the World Wide Web?",
      ar: "من اقترح فكرة الشبكة العالمية World Wide Web؟"
    },
    answers: {
      en: [
        "Bill Gates",
        "Tim Berners-Lee",
        "Steve Jobs",
        "Mark Zuckerberg"
      ],
      ar: [
        "بيل غيتس",
        "تيم بيرنرز لي",
        "ستيف جوبز",
        "مارك زوكربيرغ"
      ]
    },
    correct: 1
  },

  {
    question: {
      en: "What does WWW stand for?",
      ar: "ماذا تعني WWW؟"
    },
    answers: {
      en: [
        "World Wide Web",
        "World Web Window",
        "Wireless World Web",
        "Wide World Website"
      ],
      ar: [
        "الشبكة العالمية",
        "نافذة الويب العالمية",
        "الويب اللاسلكي العالمي",
        "موقع العالم الواسع"
      ]
    },
    correct: 0
  },

  {
    question: {
      en: "Which technology became very important in the 2010s?",
      ar: "أي تقنية أصبحت مهمة جداً في العقد الثاني من الألفية؟"
    },
    answers: {
      en: [
        "Typewriters",
        "Smartphones",
        "Telegraphs",
        "Floppy disks"
      ],
      ar: [
        "الآلات الكاتبة",
        "الهواتف الذكية",
        "التلغراف",
        "الأقراص المرنة"
      ]
    },
    correct: 1
  }
];

let questionIndex = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("quizFeedback");
const nextButton = document.getElementById("nextQuestion");

function showQuestion() {
  answered = false;

  const question = questions[questionIndex];

  document.getElementById("questionNumber").textContent =
    currentLanguage === "en"
      ? `QUESTION ${questionIndex + 1} / ${questions.length}`
      : `السؤال ${questionIndex + 1} / ${questions.length}`;

  questionText.textContent = question.question[currentLanguage];

  answersBox.innerHTML = "";
  feedback.textContent = "";
  nextButton.hidden = true;

  question.answers[currentLanguage].forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.textContent = answer;

    button.addEventListener("click", () => {
      checkAnswer(index, button);
    });

    answersBox.appendChild(button);
  });
}

function checkAnswer(selected, selectedButton) {
  if (answered) return;

  answered = true;

  const correct = questions[questionIndex].correct;
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === correct) {
      button.classList.add("correct");
    }
  });

  if (selected === correct) {
    score++;

    feedback.textContent =
      currentLanguage === "en"
        ? "✓ Excellent! Correct answer!"
        : "✓ ممتاز! إجابة صحيحة!";
  } else {
    selectedButton.classList.add("wrong");

    feedback.textContent =
      currentLanguage === "en"
        ? "Not quite! The correct answer is highlighted."
        : "ليس تماماً! الإجابة الصحيحة محددة باللون الأخضر.";
  }

  nextButton.hidden = false;
}

nextButton.addEventListener("click", () => {
  questionIndex++;

  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

function finishQuiz() {
  questionText.textContent =
    currentLanguage === "en"
      ? "You have completed your journey!"
      : "لقد أكملت رحلتك!";

  answersBox.innerHTML = "";

  document.getElementById("questionNumber").textContent =
    currentLanguage === "en" ? "MISSION COMPLETED" : "اكتملت المهمة";

  feedback.textContent = "";

  document.getElementById("quizScore").textContent =
    currentLanguage === "en"
      ? `Your score: ${score} / ${questions.length}`
      : `نتيجتك: ${score} / ${questions.length}`;

  nextButton.textContent =
    currentLanguage === "en" ? "TRY AGAIN ↻" : "حاول مجدداً ↻";

  nextButton.hidden = false;

  nextButton.onclick = () => {
    questionIndex = 0;
    score = 0;

    document.getElementById("quizScore").textContent = "";

    nextButton.onclick = null;

    showQuestion();
  };
}

showQuestion();
