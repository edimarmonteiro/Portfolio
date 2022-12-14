import styles from './Apresentacao.module.css';
import img from '../img/portifolio.jpeg';
import gifimg from '../img/xero-code.gif';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { DiCss3, DiHtml5, DiJsBadge, DiReact, DiVisualstudio } from 'react-icons/di'
import Redesocial from './Redesocial';

import {B} from 'react-router-dom';

function Apresentacao(){
    return(
        <div>
            <div className={styles.div_img}>
                <img src={img} />

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
            </div>

            <div className={styles.apresentacao}>
                
                <h5 translate="no">Front-end Developer</h5>
                <div className={styles.gifdev}>
                    <img src={gifimg}/>
                </div>
                <div className={styles.decoracao}>
                        <div 
                        className={styles.visual}>
                        <ul><li><DiVisualstudio/></li>
                        </ul></div>

                        <div 
                        className={styles.react}>
                        <ul><li><DiReact/></li>
                        </ul></div>

                        <div 
                        className={styles.js}>
                        <ul><li className={styles.supenimetio}>
                        <DiJsBadge/></li>
                        </ul></div>

                        <div 
                        className={styles.html}>
                        <ul><li><DiHtml5/></li>
                        </ul></div>

                        <div 
                        className={styles.css}>
                        <ul><li ><DiCss3/></li>
                        </ul></div>
                </div>
            </div>
        </div>
    )
}

export default Apresentacao

/* <div className={styles.div_social}>
                    <Redesocial/>
                </div> */