import styles from './Cardapio.module.scss';
import 'normalize.css';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';


export default function Cardapio(){

  const [busca,setBusca] = useState("");

  return(
    <main>
      <nav className={styles.menu}>
        <Logo className={styles.logo}/>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          <p>A casa da Nonna é uma delícia</p>
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__title}>
          Cardápio
        </h3>
          <Buscador busca={busca} setBusca = {setBusca}/>
      </section>
    </main>
  );
}