import React from 'react';
import './Button.scss';

type ButtonProps = {
  buttonText: string;
  handlerClick: () => void;
}

const Button = ({ buttonText, handlerClick }:ButtonProps) => (
  <button className="button button-reset" onClick={handlerClick}>
    {buttonText}
  </button>
);

export default Button;
