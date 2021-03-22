import './Bienvenida.css';

function Bienvenida(props) {
  return (
      <div className="bannerTitulo">
        <p id="txtBienvenida"> {props.txtBienvenida} </p>
        <h1 id="txtVentana"> {props.txtVentana} </h1>
    </div>
  );
}

export default Bienvenida;