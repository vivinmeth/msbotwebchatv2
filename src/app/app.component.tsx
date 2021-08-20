import React from 'react';
import AppStyles from './app.module.scss';

export function AppComponent() {


  return (
    <div className={AppStyles.App}>
      <h1>React APP! Dockerized</h1>
        <h1 className={AppStyles.head} id={AppStyles.head}>Head test</h1>
    </div>
  );
}

