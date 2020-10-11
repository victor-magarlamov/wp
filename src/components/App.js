import React from 'react';
import T from 'i18n-react';
import './App.scss';

function setLocale (locale = 'en') {
  import(`../locales/${locale}.yml`).then(loc => {
    T.setTexts(loc);
  });
}

export default function App () {
  setLocale();

  handleLocaleClick = () => {
    setLocale('ru');
  };

  return (
    <div>
      <div className="main">{T.translate("greeting.hi")}</div>
      <button onClick={handleLocaleClick}>rus</button>
    </div>
  );
};
