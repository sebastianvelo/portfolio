import Language, { LanguageProps } from "../../../../types/Language";

export interface LanguageSelectorProps extends LanguageProps {
  setLang: (lang: Language) => void;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  return (
    <div>
      <select
        value={props.lang}
        onChange={(e) => props.setLang(e.target.value as Language)}
        className="border border-gray-300 rounded p-1 text-xs"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
