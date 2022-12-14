//import logo from './logo.svg';
//import './App.css';
import Titulo from './components/Titulo';
import Apresentacao from './components/Apresentacao';
//exportação dos Conteudos
import Tecnologias from './components/conteudo/Tecnologias';
import Certificados from './components/conteudo/Certificados';
import Contato from './components/conteudo/Contato';
import Sobreeu from './components/Sobreeu';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.div_app} >
      <Titulo/>
      <Apresentacao/>
      <Sobreeu/>

      <Tecnologias/><br/><br/><br/>
      <Certificados/><br/><br/>
      <Contato/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
