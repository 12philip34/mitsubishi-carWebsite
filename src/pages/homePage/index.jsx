import React from 'react';
import Introduction from '../../components/Introduction';
import style from './style.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={style.HomePage}>
        <Introduction />
      </div>
    </div>
  )
}

export default HomePage