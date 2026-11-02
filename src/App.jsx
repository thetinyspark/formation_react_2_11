import PageHeader from './components/PageHeader';

export default function App() {
  return (
    // Le Fragment ajoute le footer sans créer d'élément DOM englobant superflu.
    <>
      <main className="app-shell">
        <PageHeader />
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
