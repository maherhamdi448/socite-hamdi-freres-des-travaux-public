const translations = {
ar: {
nav_about: "من نحن",
nav_services: "خدماتنا",
nav_projects: "مشاريعنا",
nav_contact: "اتصل بنا",
btn_devis: "طلب عرض سعر",
hero_title: "الاحترافية والدقة في بناء المستقبل والأشغال العامة",
hero_desc: "شركة حمدي للأخوة للأشغال العامة - خبرة متكاملة في التشييد، البنية التحتية، الصيانة، والحلول الفنية للمؤسسات والأفراد.",
btn_contact_now: "تواصل معنا الآن",
btn_view_work: "معاينة الأعمال",
stat_exp: "سنوات خبرة",
stat_proj: "مشروع منجز",
stat_qual: "التزام بالمواصفات",
contact_title: "تواصل معنا",
btn_send: "إرسال الطلب",
alert_success: "تم إرسال طلبكم بنجاح وسنقوم بالرد عليكم في أقرب وقت!"
},
fr: {
nav_about: "À propos",
nav_services: "Nos Services",
nav_projects: "Nos Projets",
nav_contact: "Contact",
btn_devis: "Demander un devis",
hero_title: "L'expertise et la précision dans les travaux publics",
hero_desc: "Société Hamdi Frères des Travaux Publics - Une expertise globale dans la construction, les infrastructures et la maintenance.",
btn_contact_now: "Contactez-nous",
btn_view_work: "Voir nos réalisations",
stat_exp: "Années d'expérience",
stat_proj: "Projets réalisés",
stat_qual: "Engagement de qualité",
contact_title: "Contactez-nous",
btn_send: "Envoyer le message",
alert_success: "Merci pour votre message! Votre demande a été enregistrée."
}
};

// 1. اللغة الافتراضية
let currentLang = 'ar';

// 2. دالة تغيير اللغة الديناميكية
function toggleLanguage() {
currentLang = currentLang === 'ar' ? 'fr' : 'ar';
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = currentLang;

document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
if (translations[currentLang] && translations[currentLang][key]) {
el.textContent = translations[currentLang][key];
}
});
}

// 3. دالة معالجة الاستمارة عند الإرسال
function handleFormSubmit(event) {
event.preventDefault();
const alertMsg = translations[currentLang].alert_success;
alert(alertMsg);
event.target.reset();
}

