import { useEffect, useRef, useState } from "react";
import Language, { LanguageProps } from "../../types/Language";
import { ChevronDownSVG, ChevronUpSVG } from "../svg/ChevronSVGs";

export interface LanguageSelectorProps extends LanguageProps {
  setLang: (lang: Language) => void;
}

const LanguageSelector = ({ lang, setLang }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = {
    en: { label: "English", flag: "🇺🇸" },
    es: { label: "Español", flag: "🇪🇸" }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center justify-between w-28 px-3 py-2 text-sm font-medium text-secondary-700 bg-white border border-secondary-300 rounded-md shadow-sm hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className="mr-2">{languages[lang].flag}</span>
          <span>{languages[lang].label}</span>
        </span>
        {!isOpen ? <ChevronDownSVG />: <ChevronUpSVG />}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-full bg-white border border-secondary-200 rounded-md shadow-lg">
          <div className="py-1">
            {Object.entries(languages).map(([code, { label, flag }]) => (
              <button
                key={code}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  lang === code ? "bg-secondary-100 text-secondary-900" : "text-secondary-700 hover:bg-secondary-50"
                }`}
                onClick={() => handleLanguageChange(code as Language)}
              >
                <span className="mr-2">{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;