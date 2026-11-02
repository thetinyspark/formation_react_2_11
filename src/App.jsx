import CatalogFilter from './components/comp/CatalogFilter';
import PageHeader from './components/comp/PageHeader';
import Catalog from './components/screens/Catalog';
import CATALOG_MOCK from './data/CATALOG_MOCK';


export default function App() {

  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader/>
        <CatalogFilter products={CATALOG_MOCK} />
        <Catalog products={CATALOG_MOCK}/>
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
