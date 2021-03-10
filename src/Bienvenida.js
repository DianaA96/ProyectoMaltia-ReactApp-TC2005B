import './Bienvenida.css';

function Bienvenida(props) {
  return (
      <div className="bannerTitulo">
        <p id="txtbienvenida"> {props.txtbienvenida} </p>
        <h1 id="txtventana"> {props.txtventana} </h1>
    </div>
  );
}

export default Bienvenida;