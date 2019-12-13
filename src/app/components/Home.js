import React  from 'react';
import '../../assets/css/Home.css';
import { Container } from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import logo from '../../assets/img/logo-big.png';

class LoginScreen extends React.Component {

onSubmit = () => {
   var newName = this.props.userName;
   
   if (newName !== undefined) {
      this.props.history.push('/login');
   }
   else { 
      ToastsStore.error("Por favor ingresa un nombre")
   }
}

handleUsername = (event) => {
   this.props.setUserName(event.target.value.toUpperCase());
}

render() {   
	return (
         <div>
            <Container>
               <div><img className="main-logo" src={logo} alt="Logo" /></div>
               <p>¡Bienvenido!<br/>Para comenzar a jugar ingresa tu nombre</p> 
                  <p>
                  <input
                     type="text"
                     placeholder="Escribe tu nombre aquí"
                     name="userName"
                     onChange={ this.handleUsername}
                  />
                  </p>
                  <button className="btn btn-primary one-edge-shadow" onClick={this.onSubmit}>¡A JUGAR!</button>
                  <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} lightBackground/>
               <br></br>
               <div className="hint-container">
                  <p className="hint-text">¿No sabes cómo jugar?<br/><a href='/'>Ingresa aquí</a></p>               
               </div>
            </Container>
         </div>
      );
   }
}

export default LoginScreen;