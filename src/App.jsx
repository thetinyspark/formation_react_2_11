import { useEffect, useState } from 'react';
import PageHeader from './components/comp/PageHeader';
import Catalog from './components/screens/Catalog';


export default function App() {

  const [catalog,setCatalog] = useState([]);

  useEffect( 
    // est lancé automatiquement par React lorsque le composant est "monté"
    // ce qui veut dire qu'il est prêt à être utilisé par le moteur
    ()=>{
      // on emploie la fonction native du Javascript "fetch", 
      // pour aller les données contenues à une certaine adresse URL

      // fetch est une fonctionnalité qui nous renvoie, non pas les données 
      // contenues à l'adresse passée en paramètre, mais un objet standard, 
      // de type Promise, qui comme son nom l'indique, nous promets de nous 
      // renvoyer les données si elles sont accessibles, sinon, il nous renverra 
      // une erreur.
      window.fetch("/assets/catalog.json").then(
        (response)=>{
          response.json().then(
            (data)=>{
              console.log(data);
              setCatalog(data);
            }
          ).catch(
            (reason)=>{
              console.error(reason);
            }
          )
        }
      ).catch(
        (reason)=>{
          console.error(reason);
        }
      );
    }, 
    [] // <- en lui donnant un tableau dépendances vide, on précise à React
    // que l'on souhaite utiliser useEffect uniquement au moment du montage
    // si dans le tableau de dépendance, on envoie des états, alors, chaque fois
    // que ces états seront actualisés, la fonction contenue dans useEffect 
    // sera relancée
  )
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader/>
        <Catalog products={catalog}/>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
