import '../styles/components/Header-create.scss';
import iconLogo from '../images/icono-logo.png';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header-create">
            <Link to="/"><img className="header-create__img" src={iconLogo} alt="Debuggers Cards" /></Link>
        </header>
    )
}

export default Header;