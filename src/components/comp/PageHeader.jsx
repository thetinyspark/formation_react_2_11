export default function PageHeader({title}) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{title || 'MICROMANIA'}</p>
      </div>
    </header>
  );
}