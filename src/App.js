import './App.css';
import CarouselContainer from './Component/CarouselContainer';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function App() {
    const [dropdown, setDropdown] = useState(false);
  
    const abrirCerrarDropdown=()=>{
      setDropdown(!dropdown);
    }
    const accionPrueba=()=>{
      alert("SoyPrueba");
    }
  return (
    <div className="App">
      
      <CarouselContainer/>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction="up" >
      <DropdownToggle caret className="botonDropdown">
        INFORMATE MÁS...
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem onClick={()=>accionPrueba()}><center>FAC</center></DropdownItem>
        <DropdownItem divider/>
        <DropdownItem><center>BECAS Y SERVICIO SOCIAL</center></DropdownItem>
        <DropdownItem divider/>
        <DropdownItem><center>INFORMES Y REDES SOCIALES</center></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>

    </div>
  );
}

export default App;
