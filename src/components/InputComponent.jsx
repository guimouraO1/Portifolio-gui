import { useState } from 'react';
import styles from "./inputComponent.module.css";

export default function InputComponent() { 
  const [inputText, setText] = useState('Place url here'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <div className={styles.InputComponent}> 
      <input value={inputText} onChange={handleChange} /> 
      <button onClick={() => setText('Place url here')}> 
        Reset 
      </button> 
    </div> 
  ); 
} 