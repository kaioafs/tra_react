import "./style.css";
import {Link} from "react-router-dom";
export const Menu = () => {
    return (
        <>
            <header>
                <h1 className="Logo">SEVENTEEN FAN BLOG</h1>
                <nav className="Menu">
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/sobre'>Sobre</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>                                                                       
                    </ul>
                </nav>
            </header>
        </>
    )
};