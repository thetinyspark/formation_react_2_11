import { Link } from "react-router-dom";

export default function AppNav(){
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