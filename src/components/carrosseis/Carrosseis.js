import jsassincrono from './img/jsassincrono.webp';
import componentes from './img/componentes.webp';
import jsprainternet from './img/jsprainternet.jpg';
import dom from './img/dom.webp';
import semanafront from './img/semanafront.webp';
import htmlcss from './img/htmlcss.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import styles from './Carrosseis.module.css'

function Carrosseis(){
    return(
        <div className={styles.img_carrosseis}>
            <Carousel classNam={styles.socarousel}>
                    <Carousel.Item interval={1500}>
                        <img src={jsassincrono}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1100}>
                        <img src={componentes}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1150}>
                        <img src={jsprainternet}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1200}>
                        <img src={dom}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1250}>
                        <img src={semanafront}/>
                    </Carousel.Item>
                    <Carousel.Item interval={1300}>
                        <img src={htmlcss}/>
                    </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Carrosseis