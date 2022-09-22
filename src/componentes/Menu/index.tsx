import "./index.css";
import { Link} from "react-router-dom";
import img from "../../img/imagemm.jpg"
export const Menu = () => {
  return(
    <>
    <header>
      <h1 className="logo"> TECNOLOGIA</h1>
      <img className="ver" src={img} alt="rapa" />
     
      <nav className="menu">
        <ul>
          <li>
            <Link to='/' className="cor">Home</Link>
          </li>
          <li>
            <Link to='/contatos' className="cor">Contato</Link>
          </li>
          <li><Link to='/servicos' className="cor">Servicos</Link></li>
        </ul>
      </nav>
      </header>
     </>
  );
}
      
    
    
      