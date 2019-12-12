import React from 'react';
import { Button, Container } from 'reactstrap';

class Help extends React.Component {

render() {
	return (
      <div className="board">         
        <Container >
	         <h1 className="Title">¿Cómo jugar</h1>
	         <p>instrucciones</p>
               <div>
                 <Button href="/">Volver al Inicio</Button>
				   </div>	 
         </Container>       				
      </div>
   );
}
}
export default Help;