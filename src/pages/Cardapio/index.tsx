import styles from './Cardapio.module.scss';
import 'normalize.css';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './Buscador';
import React, { useState } from 'react';
import Filtro from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';


export default function Cardapio(){

  const [busca,setBusca] = useState("");
  const [filtro,setFiltro] = useState<number|null > (null);
  const [ordenador,setOrdenador] = useState('');

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
          <div className={styles.cardapio__filtros}>
            <Filtro filtro={filtro} setFiltro={setFiltro}/>
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
          </div>
          <Itens/>
      </section>
    </main>
  );
}