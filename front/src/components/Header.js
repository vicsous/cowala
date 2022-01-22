import './Header.css';
import Logo from '../../src/Logo.png';
import Cowala from '../../src/Cowala Software.svg';

export default function Header(){
    return (
    <header className="header">
        <div className="logoCowala">
            <img src={Logo} className="logo"></img>
            <img src={Cowala} className="cowala"></img>
        </div>
    </header>
    )
}