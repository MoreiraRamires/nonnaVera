import styles from './Cardapio.module.scss';
import 'normalize.css';
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Cardapio(){

  return(
    <main>
      <nav className={styles.menu}>
        <Logo className={styles.logo}/>
      </nav>
    </main>
  );
}