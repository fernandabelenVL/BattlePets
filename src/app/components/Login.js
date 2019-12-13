import React from 'react';
import '../../assets/css/Login.css';
import { Link } from "react-router-dom";
import { Button, Container } from 'reactstrap';

class LoginScreen extends React.Component {

   render() {
	return (
        <div className="Login">         
        <Container className="home-content">
	         <h1 className="Title">¡Hola!</h1>
				<p className="user-name">{this.props.userName}</p>
               <div className= "btnLogin">
                  {/* <Link to="/home"> <Button>Invita a un amigo a jugar</Button></Link>
   					<Link to="/home"><Button>Jugar online</Button></Link><br></br> */}
   					<Link to="/computerboard"> <button className="btn one-edge-shadow btn-secondary">JUEGO RÁPIDO</button></Link>
                  <button disabled className="btn one-edge-shadow btn-primary">JUEGA CON UN AMIGO</button>
   					<button disabled className="btn one-edge-shadow btn-tertiary">JUEGA ONLINE</button>
                  <Button href="/" className="btn one-edge-shadow outline-btn">Volver atrás</Button>
				   </div>	 
         </Container>       				
         </div>
      );
   }
}
export default LoginScreen;