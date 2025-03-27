import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getAppModel from './data/screen/app/getAppModel';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import Language, { LanguageProps } from './types/Language';

interface AppProps extends LanguageProps { }

const App = (props: AppProps) => {
  const [lang, setLang] = useState<Language>(props.lang);
  const { nav, contacts } = getAppModel(lang);
  
  return (
    <Router>
      <div className="flex flex-col space-y-6 2xl:space-y-12 bg-slate-100 text-slate-900">
        <Nav nav={nav} lang={lang} setLang={setLang} />
        <Body lang={lang} />
        <Footer {...contacts} />
      </div>
    </Router>
  );
};

export default App;
