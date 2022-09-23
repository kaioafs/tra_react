import { Menu } from "../components/Menu";
import img from '../components/img/home.jpg'

export const Home = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="op" />
        <main>
            <br></br>
             <h1>Formação:</h1>
             <br></br>
             <p>Seventeen (em coreano: 세븐틴; também estilizado como SEVENTEEN ou SVT), é um grupo masculino sul-coreano formado pela empresa Pledis Entertainment, em 2015.</p>
             <p>O grupo consiste em treze membros e são divididos em três subunidades – hip-hop, vocal e performance – cada uma com uma área de especialização diferente.</p>
             <br></br>
             <p>Os integrantes do grupo estão profundamente envolvidos na composição e produção de suas canções e sua coreografia, garantindo-lhes o apelido de "grupo ídolo autoproduzido."</p>
             <p>Eles são rotulados como "Performance Kings", "Theater Kids of K-Pop" e "K-Pop Performance Powerhouse'" por vários meios de comunicação nacionais e internacionais.</p>
             
             <br></br>

        </main>        
        </>
    )
}