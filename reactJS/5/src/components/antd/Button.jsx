import React, { useState } from 'react';
import { Button as AntButton, message } from 'antd';

export default function Button({ valor }) {

  const [texto, setTexto] = useState(valor);

  const handleClick = () =>{
    setTexto("Você clicou!");

    message.success("Botão clicado com sucesso!");
  }

  return (
    <AntButton
      onClick={handleClick}
      block
      size="large"
      type="primary"
    >
      {texto}
    </AntButton>
  );
}