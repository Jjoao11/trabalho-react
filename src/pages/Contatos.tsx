/* eslint-disable jsx-a11y/alt-text */
import image from "../img/watts.png"
import "./contato.css"
export const Contato = () =>{
  return(
   
    <div className="container">
    {/* <h1 className="cont">CONTATO</h1> */}
    
    <h1 className="cont">Deseja saber mais sobre nós?</h1>
    <p className="pp">CONTATOS</p>
    <img className="com" src={image} alt="" />
    <p className="moc">(85) 978435624</p>
    </div>
    
  );
}

