import './App.css';
// React imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// Component Imports
import CarouselContainer from './Component/CarouselContainer';
import Cards from './Component/Cards'

export default function App() {

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
        <DropdownItem ><center>FAC</center></DropdownItem> <center> <Link to={"/Cards"}>Página Oficial</Link></center>
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
          <Route path="/Cards" component={Cards} />

          {boton}
        </div>
      </Switch>
    </Router>
  );
}