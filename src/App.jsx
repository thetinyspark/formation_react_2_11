import PageHeader from './components/PageHeader';
import ProductCard from './components/ProductCard';
import CATALOG_MOCK from './data/CATALOG_MOCK';

function getUniquePlatforms(products){
  // ici on retourne un tableau de plateformes 
  // crée à partir de la liste des produits
  let platforms = products.map( 
    (product) => {
      return product.platform;
    }
  ); 
  // Set permet de trier les doublons
  // Array.from permet de créer un tableau à partir du Set
  return Array.from( new Set( platforms ) );
}

export default function App() {

  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader/>
            <div>
              <select>
              {
                getUniquePlatforms(CATALOG_MOCK).map( 
                  (platform, index)=>{
                    return (
                      <option value={platform} key={index}>{platform}</option>
                    )
                  }
                )
              }
              </select>
            </div>

            {
              CATALOG_MOCK.map(
                (product)=>{
                  return ( 
                    <ProductCard product={product} key={product.id} />
                  )
                }
              )
            }
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
