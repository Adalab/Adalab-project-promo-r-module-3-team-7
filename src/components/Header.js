

import '../styles/components/Header-create.scss';
import iconLogo from '../images/icono-logo.png';
const Header = () => {
    return (
        <header className="header-create">
            {/* TODO: future link to preview-page */}
            {/* <a
          href="http://beta.adalab.es/project-promo-r-module-2-team-9/"
          title="Debuggers Cards"
          alt="Debuggers Cards"
        > */}
            <img className="header-create__img" src={iconLogo} alt="logo awesome" />
            {/* </a> */}
        </header>
    )
}

export default Header;