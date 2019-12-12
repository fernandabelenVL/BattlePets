import React, { useState } from 'react';
import '../../assets/css/Home.css';
import { Button, Container } from 'reactstrap';
import { ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class LoginScreen extends React.Component {


    
onSubmit = () => {
   let newName = this.props.userName;
   console.log(newName);
   
   if (newName !== undefined) {
      this.props.history.push('/login');
   }
   
   else { 
      ToastsStore.error("Por favor ingresa un nombre")
   // alert("por favor ingresa tu nombre :)")
   }
}

handleUsername = (event) => {
   // console.log(event.target.name, event.target.value)
   this.props.setUserName(event.target.value);
}


render() {   
	return (
         <div>
            <Container>
               <h1>¡Bienvenido a Battlepet! </h1>
               <h2>Antes de empezar ingresa tu nombre</h2> 
               {/* <p>Nombre de usuario: {userName}</p> */}
                  <p>
                  <input
                     type="text"
                     placeholder="Ingresa tu nombre"
                     name="userName"
                     onChange={ this.handleUsername }
                  />
                  </p>
                  <Button onClick={this.onSubmit}>Jugar</Button>
                  <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
               <br></br>
            </Container>
         </div>
      );
   }
}

export default LoginScreen;