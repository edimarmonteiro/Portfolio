import React,{useState} from 'react';
//Esportando o emailjs 
import emailjs from 'emailjs-com';
import styles from './Emailcontato.module.css';

function Emailcontato(){


    //Trabalhando com useState mudança de dados
    const [youname, setYouname] = useState();
    //const [youemail, setYouemail] = useState();
    //const [myemail, setMyemail] = useState();
    const [mensagem, setMensagem] = useState();

    function OnclikButao(){
        alert('Mensagem enviada com sucesso. Muito obrigado, responderei o mais rápido possível')
    }
    //Treabalhando com o from
    const Email = (e) => {
        e.preventDefault();

        var emvioemailjs = {
            remetente: youname,
            mensagem: mensagem
        };
        //Pegando o ID do Email e do Template. a Var e a minha Chave API
        emailjs.send('service_l7ea72r','template_isfcztm', emvioemailjs, 'PVUHX0R9mqjcDPC_i')
        //Validando
        .then(function(response){
            console.log('Deu certo gay!', response.status, response.text);
        }, function(erro){
            console.log('Deu erro gay', erro);
        });
        console.log(emvioemailjs);
    }

    return (
        <div className={styles.form_contato}>
                <form action="" onSubmit={Email}>
                    <fieldset>
                        <legend>Envie-me um e-mail</legend>
                        <input type='text' name='nome_usuario' id='nome_usuario' placeholder='Escreva Seu Nome'
                        onChange={(e) => {setYouname(e.target.value);}} value={youname}
                        /><br/>
                        <input type='text' name='my_email' ib='my_email' value='edimarfilho971@gmail.com'
                        /><br/>
                        <textarea cols='65' rows='5' name='uso_mensagem' id='uso_mensagem' placeholder='Escreva sua mensagem' 
                        onChange={(e) => {setMensagem(e.target.value);}} value={mensagem}
                        /><br/><br/>
                        <input className={styles.butao}
                         onClick={OnclikButao}
                         type='submit' 
                         value='Enviar Mensagem' />
                    </fieldset>
                </form>
        </div>
    );
}

export default Emailcontato

