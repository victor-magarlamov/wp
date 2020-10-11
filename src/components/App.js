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

  return (
    <div className="main">{T.translate("greeting.hi")}</div>
  );
};
