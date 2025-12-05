 

import React from 'react';

const AvisoInline = () => {
 
  const avisoStyle = {
 
    border: '2px solid #3498db',          
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#ecf0f1',           
    margin: '20px auto',                  
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
    maxWidth: '400px',
    fontFamily: 'Arial, sans-serif'
  };

  const tituloStyle = {
  
    color: '#2c3e50',                    
    fontSize: '1.2em',
    marginBottom: '10px',
    borderBottom: '1px solid #bdc3c7',    
    paddingBottom: '5px'
  };

  const textoStyle = {
 
    color: '#34495e',
    fontSize: '0.95em'
  };

  return (
    <div style={avisoStyle}>
 
      <h3 style={tituloStyle}>
       AVISO
      </h3>
 
      <p style={textoStyle}>
        ESTO ES UN MENSAJE DE PRUEBA V
      </p>
    </div>
  );
};

export default AvisoInline;