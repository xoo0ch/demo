import './App.css';
import CarouselContainer from './Component/CarouselContainer';
import Fca from './Component/Fca';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
 
  const boton = (
    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="up" >
            <DropdownToggle caret className="botonDropdown">

              INFORMATE MÁS...
      </DropdownToggle>
      <DropdownMenu>
              <DropdownItem ><center>FAC</center></DropdownItem> <center> <Link to={"/fca"}>Página Oficial</Link></center>
              <DropdownItem divider />
              <DropdownItem><center>SERVICIO SOCIAL</center></DropdownItem> <center> <a href="http://sev.uaemex.mx/index.php/servicios/servicio-social">Servicio Social</a> </center>
              <DropdownItem divider />
              <DropdownItem><center>BECAS</center></DropdownItem> <center><a href="https://sibecas.uaemex.mx/">Becas</a></center>
              <DropdownItem divider />
              <DropdownItem><center>CONTACTO Y REDES SOCIALES</center></DropdownItem> <center> <a href="https://www.uaemex.mx/mi-universidad/directorio-telef%C3%B3nico.html">Contacto</a> </center>

            </DropdownMenu>
          </Dropdown>
  )
  return (
    <Router>
      <Switch>
        <div className="App">

          <Route exact path="/" component={CarouselContainer} />
          <Route path="/fca" component={Fca} />
          
          { boton }
        </div>
      </Switch>
    </Router>
  );
  }
export default App;