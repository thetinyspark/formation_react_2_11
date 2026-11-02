import { useEffect, useState } from 'react';
import PageHeader from './components/comp/PageHeader';
import Catalog from './components/screens/Catalog';
import ProductCard from './components/comp/ProductCard';


export default function App() {

  const [catalog,setCatalog] = useState([]);
  const [promo,setPromo] = useState({
    id: 0, 
    description: "", 
    name: "", 
    price: 0, 
    img: "", 
    platform: ""
  });

  useEffect( 

    ()=>{
      // version la plus raccourcie de la fonction
      const getDataFromURLShortVersion = async (u)=>await (await fetch(u)).json();
      const getDataFormUrl = async (url) =>{
        // await est un mot clé utilisable dans les fonctions asynchrones (async)
        // il permet de mettre en pause l'éxécution de la fonction ( et uniquement de cette fonction)
        // durant le temps nécessaire à la résolution de la promesse.
        // Une fois la promesse résolue on peut attraper les données qu'elle nous a promis directement
        // via assignation à une variable située à gauche du await

        // la syntaxe await permet d'encapsuler les éventuelles erreur de résolution 
        // de données (attrapées via .catch avant ça) avec un bloc try/catch
        try{
          const response = await window.fetch(url);
          const data = await response.json();
          return data;
        }
        catch(error){
          console.error(error);
        }
      }

      const refresh = async()=>{
        try{
          // On emploie l'utilitaire Promise.all, pour lui envoyer nos deux promesses
          // qui se chargent d'aller récupérer les données au sein des nos urls
          // les fonctions marquées comme asynchrones renvoient toujours de promesses
          const [catalogData, promoData] = await Promise.all([
            getDataFormUrl("/assets/catalog.json"), 
            getDataFormUrl("/assets/promo.json")
          ]);
          setCatalog(catalogData); 
          setPromo(promoData);

        }catch(error){ console.error(error) }
      }

      refresh();
    }, 
    []
  )
  return (
    <>
      <main className="app-shell">
        <PageHeader/>
        <ProductCard product={promo}/>
        <Catalog products={catalog}/>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
