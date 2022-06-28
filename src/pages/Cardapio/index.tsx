import styles from './Cardapio.module.scss';
import 'normalize.css';
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio(){

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
    </main>
  );
}