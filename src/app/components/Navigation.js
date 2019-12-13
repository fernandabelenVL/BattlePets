import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">Battlepet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={handleClickOpen('paper')}>¿Cómo Jugar?</NavLink>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">¿Cómo jugar Battlepet?</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          Las mascotas son parte de nuestra familia, son compañeros, amigos y protectores
y en Battlepet no es diferente, por eso debes ayudar a tu perrito a proteger tu casita.
<br/><br/>Hay otras mascotas y animalitos que quieren entrar por lo que debes descubrir cuáles son posiciones dentro del tablero para poder espantarlos ¡ Tu y tu mascota serán el mejor equipo !
<br/><br/>
<strong>¿Cómo jugar?</strong>
<br/><br/>
1.  Ingresa tu nombre o el de tu mascota para poder jugar.
<br/><br/>2. Selecciona el modo de juego:
<br/><strong>-  Juego rápido:</strong> juega contra la computadora.
<br/><strong>- Juega con un amigo: </strong>invita a un amigo a jugar contigo a través de un código QR o un link de invitación que los ubicarán en la misma sala para jugar.
<br/><strong>- Juego Online: </strong>juega con una persona aleatoria que esté conectada en cualquier parte del mundo.

<br/><br/>3. Al entrar en la sala debes seleccionar las posiciones en que tu mascota y tú defenderán su casa, una vez listo presiona “Comenzar a Jugar”
<br/><br/>4. El juego es por turnos, por lo que verás tu tablero mientras el otro jugador te “ataca” y verás el tablero de tu oponente para descubrir sus posiciones y atacarlo.
<br/><br/>5. El primero en descubrir todas las posiciones del otro dentro del tablero de juego ¡Gana!
<br/><br/>
¡Mucha suerte y a divertirse!

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ¡Ok! Vamos a jugar
          </Button>
        </DialogActions>
      </Dialog>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;