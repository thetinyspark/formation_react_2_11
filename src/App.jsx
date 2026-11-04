import PageHeader from './components/comp/PageHeader';
import PageHeaderClass from './components/comp/PageHeaderClass';
import AppNav from './components/comp/AppNav';
import Routing from './components/Routing';


export default function App() {
  return (
    <>
      <main className="app-shell">
        <PageHeaderClass/>
        <PageHeader/>
        <AppNav />
        <Routing />
      </main>
      <footer className="course-note">Footer</footer>
    </>
  );
}
