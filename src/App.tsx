import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getAppModel from './data/screen/app/getAppModel';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import Language, { LanguageProps } from './types/Language';
import Header from './layout/header/Header';

interface AppProps extends LanguageProps { }

const App = (props: AppProps) => {
  const [lang, setLang] = useState<Language>(props.lang);
  const { nav, contacts, header } = getAppModel(lang);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-secondary-200 via-secondary-100 to-white dark:from-black dark:via-secondary-950 dark:to-black text-secondary-900 dark:text-white font-sans`}>
      <Router>
        <Nav nav={nav} lang={lang} setLang={setLang} />
        <Header {...header} />
        <Body lang={lang} />
        <Footer {...contacts} />
      </Router>
    </div>
  );
};

export default App;
