import styles from './Tecnologias.module.css'
import react_tec from './img/react.png'
import javascript_tec from './img/javascript.png'
import html_tec from './img/html.png'
import css_tec from './img/css.jpg'

//Eventodo Mouseover//
/*const evebutao = document.getElementById('mousemover');

evebutao.addEventListener('mousemove', function(){
    <input type='button'>Butão</input>
})*/

function Tecnologias(){
    return(
        <div className={styles.tecnologia}>
            <h1>Meus Conhecimentos</h1>
            <div className={styles.img_tec}>
                <img id='mousemover' src={react_tec}/>
                <img src={javascript_tec}/>
                <img src={html_tec}/>
                <img src={css_tec}/>
            </div>
        </div>
    )
}

export default Tecnologias