import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = language;
        document.body.style.textAlign = language === "ar" ? "right" : "left";
    }, [language, i18n]);
    
    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-white focus:outline-0 font-medium flex items-center text-sm border-0"
        >
            <option value="en" className="text-black">English</option>
            <option value="ar" className="text-black">العربية</option>
        </select>
    );
}
