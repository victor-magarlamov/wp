import React, { useState, useEffect } from 'react';
import T from 'i18n-react';
import './App.scss';

T.setTexts(require('../locales/en.yml'));

function toogleLocale (locale = 'en') {
  return new Promise((res) => {
    import(`../locales/${locale}.yml`).then(loc => {
      T.setTexts(Object.assign({}, loc.default));
      res();
    });
  });
}

export default function App () {
  const [locale, setLocale] = useState('en');

  const handleLocaleClick = () => {
    toogleLocale('ru').then(() => {
      setLocale('ru');
    });
  };

  return (
    <div>
      <div className="locale">{locale}</div>
      <div className="main">{T.translate("greeting.hi")}</div>
      <button onClick={handleLocaleClick}>rus</button>
    </div>
  );
};
