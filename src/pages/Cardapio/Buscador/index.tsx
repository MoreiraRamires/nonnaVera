import React from 'react'
import styles from './Buscador.module.scss';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>
}


export default function Buscador({busca,setBusca}: Props ){

  return(
    <div className={styles.buscador}>
      <input type="text"  value ={busca} onChange={(event) => setBusca(event.target.value)}/>
      
    </div>
  )

}