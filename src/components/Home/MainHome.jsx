import React from 'react';
import Inicio from './Inicio/Inicio';
import Servicios from './Servicios/Servicios'
import Acercade from './Acercade/Acercade';
import Contactenos from './Contactenos/Contactenos'

const MainHome = () => {
  return (
    <div>
        <main>
            <div className="container-fluid">
                <Inicio />
                <Servicios />
                <Acercade />
                <Contactenos />
            </div>
        </main>
    </div>
  );
};

export default MainHome;
