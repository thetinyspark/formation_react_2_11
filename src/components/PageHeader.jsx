import PropTypes from "prop-types";

export default function PageHeader( {title, info} ) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{title}</p>
        <p>{info.toto}</p>
        <p>{info.titi}</p>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired, // string obligatoire
  info: PropTypes.shape(
    {
      toto: PropTypes.string.isRequired, // string obligatoire
      titi: PropTypes.string // il faut que ce soit une string mais elle est optionnelle
    }
  ).isRequired // objet obligatoire
}