import styles from './Contato.module.css'
import Emailcontato from '../emailcontato/Emailcontato'

function Contato(){
    return(
        <div className={styles.contato}>
            <h1>Entre em contato comigo</h1>
            <br/>
            <Emailcontato/>
        </div>
    )
}

export default Contato