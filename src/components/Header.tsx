import {Link} from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <Link to="/SportSee/">
                    <img src="/SportSee/img/logo.svg" alt="logo"/>
                </Link>
                <div>
                    <Link to="/SportSee/">Accueil</Link>
                    <Link to="/SportSee/">Profil</Link>
                    <Link to="/SportSee/">Réglage</Link>
                    <Link to="/SportSee/">Communauté</Link>
                </div>
            </nav>
        </header>
    )
}