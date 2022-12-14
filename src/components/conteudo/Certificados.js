import Carrosseis from '../carrosseis/Carrosseis';
import styles from './Certificados.module.css';

function Certificados(){
    return(
        <div className={styles.certificado}>
            <h1>Meus Certificados</h1>
            <br/>
            <Carrosseis/>
        </div>
    )
}

export default Certificados