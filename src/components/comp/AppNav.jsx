import { Link } from "react-router-dom";

export default function AppNav(){

    const id = Math.round( Math.random() * 1000 );

    return (
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/catalog">Boutique</Link></li>
            <li><Link to="/cart">Panier</Link></li>
          </ul>
        </nav>
    )
}