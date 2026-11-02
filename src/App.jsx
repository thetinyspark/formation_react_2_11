import PageHeader from './components/PageHeader';
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
        <PageHeader />
      </main>

      <div>
        <select>
        {
          getUniquePlatforms(CATALOG_MOCK).map( 
            (platform)=>{
              return (
                <option value={platform}>{platform}</option>
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
              <div className="product" key={product.id}>
                <h2>{product.name}</h2>
                <p>ID: {product.id}</p>
                <p>{product.description}</p>
                <p>{product.platform}</p>
                <p>{product.price}€</p>
                <img src={product.img} />
              </div>
            )
          }
        )
      }
      <footer className="course-note">Footer</footer>
    </>
  );
}
