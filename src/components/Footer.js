import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer(){
    return (
        <div className={styles.Footer}>
            <p>Edimar Pires Monteiro Filho</p>
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/edimar-pires-monteiro-filho-1b8534231/'
                    target='_blank'>
                    <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/edimarmonteiro'
                    target='_blank'>
                    <FaGithub/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/edimarfilho971/'
                    target='_blank'>
                    <FaInstagram/>
                    </a>
                </li>
            </ul>
            <h6>@2022</h6>
        </div>
    )
}

export default Footer