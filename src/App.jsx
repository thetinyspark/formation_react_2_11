import PageHeader from './components/PageHeader';
import CATALOG_MOCK from './data/CATALOG_MOCK';

export default function App() {
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader />
      </main>
      {
        CATALOG_MOCK.map(
          (product)=>{
            return ( 
              <div className="product" key={product.id}>
                <h2>{product.name}</h2>
              </div>
            )
          }
        )
      }
      <footer className="course-note">Footer</footer>
    </>
  );
}
