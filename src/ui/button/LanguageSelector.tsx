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
        className="flex items-center justify-between px-3 py-2 text-sm font-medium 
                   text-secondary-700 dark:text-secondary-300 
                   bg-white dark:bg-secondary-800 
                   dark:border-primary-100 border border-blue-300 
                   rounded-md shadow-sm 
                   hover:bg-secondary-50 dark:hover:bg-secondary-700 
                   focus:outline-none
                   transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <span className="mr-2">{languages[lang].flag}</span>
          <span className="hidden md:block">{languages[lang].label}</span>
        </span>
        <span className="text-secondary-500 dark:text-secondary-400 ml-2">
          {isOpen ? <ChevronDownSVG /> : <ChevronUpSVG />}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-28 
                        bg-white dark:bg-secondary-800 
                        border border-secondary-200 dark:border-secondary-600 
                        rounded-md shadow-lg dark:shadow-secondary-900/20
                        animate-in fade-in-0 zoom-in-95 duration-100">
          <div className="py-1">
            {Object.entries(languages).map(([code, { label, flag }]) => (
              <button
                key={code}
                className={`flex items-center w-full px-4 py-2 text-sm transition-colors duration-150 ${lang === code
                    ? "bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-secondary-100"
                    : "text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700/50"
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