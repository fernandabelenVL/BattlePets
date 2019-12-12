import React from 'react';
import '../../assets/css/Login.css';
import { Link } from "react-router-dom";
import { Button, Container } from 'reactstrap';

class LoginScreen extends React.Component {

   render() {
	return (
        <div className="Login">         
        <Container className="home-content">
	         <h1 className="Title">Bienvenido</h1>
				<h2 className="userName">{this.props.userName}</h2>
               <div className= "btnLogin">
                  {/* <Link to="/home"> <Button>Invita a un amigo a jugar</Button></Link>
   					<Link to="/home"><Button>Jugar online</Button></Link><br></br> */}
   					<Link to="/computerboard"> <Button>Jugar contra la computadora</Button></Link><br></br>
                  <Button href="/">Volver al Inicio</Button>
				</div>	 
                </Container>       				
         </div>
      );
   }
}
export default LoginScreen;