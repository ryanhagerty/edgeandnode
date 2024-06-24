"use client";
import "./ButtonControl.css";
import { useState } from "react";

declare type ButtonControlProps = {
  option1: string;
  option2: string;
};

const ButtonControl: React.FC<ButtonControlProps> = ({ option1, option2 }) => {
  const [on, setOnState] = useState(true);
  const toggle = () => setOnState(o => !o);

  return (
    <button className="button-control" onClick={toggle}>
      <span className={`button-control__option ${on ? 'button-control--on' : 'button-control--off'}`}>{option1}</span>
      <span className={`button-control__option ${on ? 'button-control--off' : 'button-control--on'}`}>{option2}</span>
    </button>
  );
};

export default ButtonControl;