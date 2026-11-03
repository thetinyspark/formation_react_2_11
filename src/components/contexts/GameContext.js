import { createContext } from "react";

// le contexte en question est un objet qui va nous servir à stocker
// de la data, qui pourra être partagée à l'ensemble de l'application
// C'est en quelque sorte le contexte de stockage de la data.
const GameContext = createContext(null);

export default GameContext;