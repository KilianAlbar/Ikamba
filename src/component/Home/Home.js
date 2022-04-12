import React from 'react'

// ==== Styles ====
import './Home.css'

// ==== Imports ====
import Slider from './Slider/Slider';

// ==== Dependencies ====
import { useTranslation } from "react-i18next";


export default function Home() {

  const { t } = useTranslation();

  return (
    <div id="Home">
            <Slider/>
            <div className="hometext">
                <h3>{t('hometitle')}</h3>
                <p>{t('hometext')}</p>
            </div>
    </div>
  )
}
