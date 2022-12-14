import styles from './Redesocial.module.css';
import {} from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Redesocial(){
    return(
        <div className={styles.social_img}>
            <ul>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
                <li><FaInstagram/></li>
            </ul>
        </div>
    )
}

export default Redesocial