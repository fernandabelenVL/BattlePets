import React from 'react';
import '../../assets/css/Home.css';
import { Button, Container } from 'reactstrap';

class LoginScreen extends React.Component {
    
onSubmit = () => {
   let newName = this.props.userName;
   console.log(newName);
   
   if (newName !== undefined) {
      this.props.history.push('/login');
   }
   
   else { console.log("no hay nombre")
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
               <br></br>
            </Container>
         </div>
      );
   }
}

export default LoginScreen;