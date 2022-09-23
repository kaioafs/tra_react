import { Menu } from "../components/Menu";
import img from '../components/img/sobre.jpg'

export const Sobre = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="op" />
        <main>
             <br></br>
             <h1>História:</h1>
             <br></br>
             <p>A partir de 2013, eles apareceram em transmissões ao vivo regulares de um programa chamado 17TV na plataforma de streaming on-line UStream.</p>
             <p>Durante as transmissões, os fãs foram convidados a assistir a formação do grupo em sua sala de prática.</p>
             <br></br>
             <p>Estrearam em 26 de maio de 2015, com um showcase ao vivo, televisionado pela MBC.</p>
             <p>Logo após, tornaram-se o primeiro grupo masculino de K-pop a estrear com um showcase ao vivo de uma hora em um grande canal de transmissão.</p>
             <br></br>
        </main>
        </>
    )
}