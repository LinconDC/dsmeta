import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="SpringReact" />
                <h1>Spring React Project</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/lincondc/"> @lincondc</a>
                </p>
            </div>
        </header>
    )
}

export default Header;