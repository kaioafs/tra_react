import { Menu } from "../components/Menu";
import img from '../components/img/contato.jpg'

export const Contato = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Deseja se tornar um idol também?</h1>
             <h1>Inscreva-se!</h1>
             <br></br>
             <form action="">
                <div>
                    <label form="name">Nome: </label>
                    <input type="text" id="name" />
                    </div>
                    <div>
                    <label form="mail">E-mail: </label>
                    <input type="email" id="mail" />
                    </div>
                    <div>
                    <label form="msg">Mensagem: </label>
                    <textarea id="msg"></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Enviar</button>
                    </div>
             </form>
             
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             
        <p>Ou entre em contato com:</p>
             <p>+55 (85) 98669-3269</p>
        
        </main>

        </>
    )
}