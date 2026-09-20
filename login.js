// ---------- ambient particles ----------
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.animationDuration = (14 + Math.random() * 16) + 's';
  p.style.animationDelay = (Math.random() * -20) + 's';
  p.style.opacity = (0.12 + Math.random() * 0.3).toFixed(2);
  particlesContainer.appendChild(p);
}

// ---------- language data ----------
// Fully translated: en, hi, te, ko, fr, ja. Everything else in this list is
// selectable (so the picker shows real global + Indian language coverage)
// but falls back to English text until real translations are added.
const languages = [
  ["en", "English"], ["hi", "हिन्दी"], ["te", "తెలుగు"], ["ta", "தமிழ்"],
  ["kn", "ಕನ್ನಡ"], ["ml", "മലയാളം"], ["mr", "मराठी"], ["bn", "বাংলা"],
  ["gu", "ગુજરાતી"], ["pa", "ਪੰਜਾਬੀ"], ["ko", "한국어"], ["ja", "日本語"],
  ["zh", "中文"], ["fr", "Français"], ["de", "Deutsch"], ["es", "Español"],
  ["pt", "Português"], ["ru", "Русский"], ["ar", "العربية"], ["it", "Italiano"]
];

const translations = {
  en: {
    tabLogin: "Login", tabSignup: "Create Account",
    loginTitle: "Welcome back", loginSub: "Sign in to continue exploring India.",
    emailLabel: "Email or phone number", passLabel: "Password", confirmLabel: "Confirm password",
    signinBtn: "Sign In",
    signupTitle: "Create your account", signupSub: "Join to save trips and unlock village passes.",
    nameLabel: "Full name", createBtn: "Create Account",
    switchToSignup: "New here?", switchLinkSignup: "Create an account",
    switchToLogin: "Already have an account?", switchLinkLogin: "Sign in",
    confirmedLabel: "Signed in", confirmHeading: "Dashboard file comes next.", confirmBack: "Back to form"
  },
  hi: {
    tabLogin: "लॉगिन", tabSignup: "खाता बनाएं",
    loginTitle: "वापसी पर स्वागत है", loginSub: "भारत की खोज जारी रखने के लिए साइन इन करें।",
    emailLabel: "ईमेल या फ़ोन नंबर", passLabel: "पासवर्ड", confirmLabel: "पासवर्ड की पुष्टि करें",
    signinBtn: "साइन इन करें",
    signupTitle: "अपना खाता बनाएं", signupSub: "यात्राएं सहेजें और गाँव पास अनलॉक करें।",
    nameLabel: "पूरा नाम", createBtn: "खाता बनाएं",
    switchToSignup: "नए हैं?", switchLinkSignup: "खाता बनाएं",
    switchToLogin: "पहले से खाता है?", switchLinkLogin: "साइन इन करें",
    confirmedLabel: "साइन इन हो गया", confirmHeading: "अगला चरण: डैशबोर्ड फ़ाइल।", confirmBack: "फ़ॉर्म पर वापस जाएं"
  },
  te: {
    tabLogin: "లాగిన్", tabSignup: "ఖాతా సృష్టించండి",
    loginTitle: "తిరిగి స్వాగతం", loginSub: "భారతదేశాన్ని అన్వేషించడం కొనసాగించడానికి సైన్ ఇన్ చేయండి.",
    emailLabel: "ఇమెయిల్ లేదా ఫోన్ నంబర్", passLabel: "పాస్‌వర్డ్", confirmLabel: "పాస్‌వర్డ్ నిర్ధారించండి",
    signinBtn: "సైన్ ఇన్",
    signupTitle: "మీ ఖాతాను సృష్టించండి", signupSub: "యాత్రలు సేవ్ చేయండి, గ్రామ పాస్‌లను అన్‌లాక్ చేయండి.",
    nameLabel: "పూర్తి పేరు", createBtn: "ఖాతా సృష్టించండి",
    switchToSignup: "కొత్తవారా?", switchLinkSignup: "ఖాతా సృష్టించండి",
    switchToLogin: "ఇప్పటికే ఖాతా ఉందా?", switchLinkLogin: "సైన్ ఇన్",
    confirmedLabel: "సైన్ ఇన్ అయ్యింది", confirmHeading: "తర్వాత: డాష్‌బోర్డ్ ఫైల్.", confirmBack: "ఫారమ్‌కు తిరిగి వెళ్లండి"
  },
  ko: {
    tabLogin: "로그인", tabSignup: "계정 만들기",
    loginTitle: "다시 오신 것을 환영합니다", loginSub: "인도 탐험을 계속하려면 로그인하세요.",
    emailLabel: "이메일 또는 전화번호", passLabel: "비밀번호", confirmLabel: "비밀번호 확인",
    signinBtn: "로그인",
    signupTitle: "계정 만들기", signupSub: "여행을 저장하고 마을 패스를 잠금 해제하세요.",
    nameLabel: "이름", createBtn: "계정 만들기",
    switchToSignup: "처음이신가요?", switchLinkSignup: "계정 만들기",
    switchToLogin: "이미 계정이 있으신가요?", switchLinkLogin: "로그인",
    confirmedLabel: "로그인됨", confirmHeading: "다음 단계: 대시보드 파일.", confirmBack: "양식으로 돌아가기"
  },
  fr: {
    tabLogin: "Connexion", tabSignup: "Créer un compte",
    loginTitle: "Content de vous revoir", loginSub: "Connectez-vous pour continuer à explorer l'Inde.",
    emailLabel: "E-mail ou numéro de téléphone", passLabel: "Mot de passe", confirmLabel: "Confirmer le mot de passe",
    signinBtn: "Se connecter",
    signupTitle: "Créez votre compte", signupSub: "Enregistrez vos voyages et débloquez des pass village.",
    nameLabel: "Nom complet", createBtn: "Créer un compte",
    switchToSignup: "Nouveau ici ?", switchLinkSignup: "Créer un compte",
    switchToLogin: "Vous avez déjà un compte ?", switchLinkLogin: "Se connecter",
    confirmedLabel: "Connecté", confirmHeading: "Prochaine étape : le fichier tableau de bord.", confirmBack: "Retour au formulaire"
  },
  ja: {
    tabLogin: "ログイン", tabSignup: "アカウント作成",
    loginTitle: "おかえりなさい", loginSub: "インドの探索を続けるにはサインインしてください。",
    emailLabel: "メールまたは電話番号", passLabel: "パスワード", confirmLabel: "パスワードの確認",
    signinBtn: "サインイン",
    signupTitle: "アカウントを作成", signupSub: "旅行を保存し、村のパスを解除しましょう。",
    nameLabel: "氏名", createBtn: "アカウントを作成",
    switchToSignup: "はじめてですか？", switchLinkSignup: "アカウントを作成",
    switchToLogin: "すでにアカウントをお持ちですか？", switchLinkLogin: "サインイン",
    confirmedLabel: "サインイン済み", confirmHeading: "次はダッシュボードファイルです。", confirmBack: "フォームに戻る"
  }
};

const STORAGE_KEY = 'bx_lang';

function applyLanguage(code) {
  const dict = translations[code] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  // switch-line text only exists on login.html
  const loginFormEl = document.getElementById('loginForm');
  const switchTextEl = document.getElementById('switchText');
  const switchLinkEl = document.getElementById('switchLink');
  if (loginFormEl && switchTextEl && switchLinkEl) {
    const onLogin = loginFormEl.classList.contains('active');
    switchTextEl.textContent = onLogin ? dict.switchToSignup : dict.switchToLogin;
    switchLinkEl.textContent = onLogin ? dict.switchLinkSignup : dict.switchLinkLogin;
  }
}

function setLanguage(code, label) {
  localStorage.setItem(STORAGE_KEY, code);
  document.getElementById('langLabel').textContent = label;
  document.querySelectorAll('.lang-option').forEach(o => o.classList.toggle('selected', o.dataset.code === code));
  applyLanguage(code);
}

function renderLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.innerHTML = languages.map(([code, label]) =>
    `<button class="lang-option" data-code="${code}">${label}</button>`
  ).join('');
  menu.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.code, btn.textContent);
      document.getElementById('langMenu').classList.remove('open');
    });
  });
}

// restore saved language on load (this is how it "continues" once dashboard.html exists too)
function restoreLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY) || 'en';
  const match = languages.find(([code]) => code === saved) || languages[0];
  document.getElementById('langLabel').textContent = match[1];
  applyLanguage(saved);
}

document.getElementById('langBtn').addEventListener('click', () => {
  document.getElementById('langMenu').classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-wrap')) {
    document.getElementById('langMenu').classList.remove('open');
  }
});

// ---------- tab switching (only runs if these elements exist, e.g. on login.html) ----------
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchLink = document.getElementById('switchLink');

function showLogin() {
  if (!tabLogin) return;
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  const saved = localStorage.getItem(STORAGE_KEY) || 'en';
  applyLanguage(saved);
}
function showSignup() {
  if (!tabSignup) return;
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  const saved = localStorage.getItem(STORAGE_KEY) || 'en';
  applyLanguage(saved);
}

if (tabLogin) {
  tabLogin.addEventListener('click', showLogin);
  tabSignup.addEventListener('click', showSignup);
  switchLink.addEventListener('click', () => {
    if (loginForm.classList.contains('active')) showSignup(); else showLogin();
  });
}

// ---------- form submit: go straight to the dashboard ----------
if (loginForm) {
  [loginForm, signupForm].forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'dashboard.html';
    });
  });
}

// ---------- init ----------
renderLangMenu();
restoreLanguage();