
import '../styles/components/Footer.scss';

import logo from '../images/logo-adalab.png';
const Footer = () => {
    return (
    <footer className="footer">
        <small className="footer__small">Debuggers Cards ©2022</small>
        <a href="./index.html">
            <img
                className="footer__logo"
                src={logo}
                alt="Logo Adalab"
            />
        </a>
    </footer>)
}
export default Footer;